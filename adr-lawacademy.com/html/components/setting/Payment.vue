<template>
  <v-app>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="users"
      class="elevation-1"
      @click:row="handleClick"
    >
      <template #[`item.image`]="{ item }">
        <div class="">
          <v-img :src="item.image" :alt="item.bank_name" width="100px" />
        </div>
      </template>
      <template #[`item.status`]="{ item }">
        <!-- <div v-if="checkExpired(item.expiration_date) < 0">
          <span class="tw-rounded tw-bg-red-500 tw-px-2 tw-py-2 tw-text-white tw-font-bold">EXPIRED</span>
        </div>
        <div v-else> -->
          <span v-if="item.status === 'PENDING'" class="tw-rounded tw-bg-yellow-400 tw-px-2 tw-py-2 tw-text-white tw-font-bold">{{ item.status }}</span>
          <span v-if="item.status === 'ACTIVE'" class="tw-rounded tw-bg-blue-400 tw-px-2 tw-py-2 tw-text-white tw-font-bold">{{ item.status }}</span>
          <span v-if="item.status === 'COMPLETED'" class="tw-rounded tw-bg-green-400 tw-px-2 tw-py-2 tw-text-white tw-font-bold">{{ item.status }}</span>
        <!-- </div> -->
      </template>
      <template #[`item.payment_date`]="{ item }">
        <div class="">
          <p v-if="item.status === 'COMPLETED'">
            {{ item.payment_date }}
          </p>
        </div>
      </template>
      <template #top>
        <v-toolbar
          flat
        >
          <v-spacer />
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="tw-text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.peserta"
                        label="Kategori"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    />
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="tw-text-h5">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon
          small
          class="tw-mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template #no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    users: [],
    headers: [
      {
        text: 'Tanggal Pembuatan',
        align: 'start',
        sortable: false,
        value: 'create_date'
      },
      {
        text: 'ID Transaksi',
        value: 'trx_id',
        sortable: false
      },
      {
        text: 'Bank',
        value: 'image',
        sortable: false
      },
      {
        text: 'Tipe',
        value: 'type',
        sortable: false
      },
      {
        text: 'Account No',
        value: 'account_no'
      },
      {
        text: 'Jumlah',
        value: 'amount'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Tanggal Pembayaran',
        value: 'payment_date'
      }
    ],
    editedIndex: -1,
    editedItem: {
      universitas: '',
      gelombang: false
    },
    defaultItem: {
      universitas: '',
      gelombang: false
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$axios.$get('/payment-trx')
      this.users = res.data.map(item => ({ type: item.bank.type, account_no: item.account_number, image: item.bank.image_url, create_date: this.$moment(item.createdAt).format('DD MMMM YYYY, HH:mm:ss'), payment_date: this.$moment(item.updatedAt).format('DD MMMM YYYY, HH:mm:ss'), bank_name: item.bank.name, amount: item.amount, status: item.status, trx_id: item.trx_id, expiration_date: item.expiration_date }))
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
    add () {
      this.$router.push('/dashboard/admin/add-category')
    },
    handleClick (row) {
      // eslint-disable-next-line array-callback-return
      this.users.map((item, index) => {
        item.selected = item === row

        this.$set(this.users, index, item)
      })

      if (row.status !== 'COMPLETED')
        this.$router.push({ path: `/pay/${row.trx_id}` })
    },
    checkExpired (datetime) {
      const today = Date.now()
      const diff = new Date(datetime) - today
      return diff
    }
  }
}
</script>
