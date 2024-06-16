<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Peserta
        </div>
        <button
          class="tw-rounded tw-border-solid tw-px-3 tw-py-4 tw-border-blue-500 tw-border-2"
          @click="add()"
        >
          <span class="tw-text-blue-500 tw-font-bold">+ Tambah Peserta</span>
        </button>
      </div>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="users"
        class="elevation-1"
      >
        <template #[`item.status`]="{ item }">
          <div class="tw-flex tw-flex-row tw-gap-1">
            <div v-for="x in item.status" :key="x.id">
              <span v-if="x=='corrected'" class="tw-w-20 tw-rounded-md tw-bg-yellow-600 tw-text-white tw-p-1">Perbaikan</span>
              <span v-if="x=='verified'" class="tw-w-20 tw-rounded-md tw-bg-green-27 tw-text-white tw-p-1">Diterima</span>
              <span v-if="x=='rejected'" class="tw-w-20 tw-rounded-md tw-bg-red-400 tw-text-white tw-p-1">Ditolak</span>
              <span v-if="x=='waiting'" class="tw-w-20 tw-rounded-md tw-bg-red-800 tw-text-white tw-p-1">Menunggu</span>
            </div>
          </div>
        </template>
        <template #top>
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-10 tw-px-3">
            <div>
              <label class="tw-relative tw-block">
                <input
                  v-model="search"
                  class="tw-form-input tw-w-full tw-bg-white placeholder:tw-font-italic tw-border tw-border-slate-400 tw-drop-shadow-md tw-rounded-md tw-py-3 tw-pl-3 tw-pr-10 focus:tw-outline-none"
                  placeholder="Enter your keyword to search"
                  type="text"
                >

                <span class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3">
                  <fa :icon="['fas', 'search']" style="color: orange" />
                </span>
              </label>
            </div>
          </div>
          <!-- <v-toolbar
            flat
          >
            <v-toolbar-title>Peserta</v-toolbar-title>
            <v-divider
              class="tw-mx-4"
              inset
              vertical
            />
            <v-spacer />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
            <v-spacer />
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template #activator="{ }">
                <v-btn
                  color="primary"
                  dark
                  class="tw-mb-2"
                  @click="add()"
                >
                  Tambah Data
                </v-btn>
              </template>
            </v-dialog>
          </v-toolbar> -->
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon
            small
            @click="viewItem(item)"
          >
            mdi-eye
          </v-icon>
          <!-- <v-icon
            small
            class="tw-mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon> -->
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
    </v-card>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nama Lengkap',
        align: 'start',
        sortable: true,
        value: 'fullname'
      },
      { text: 'Email', value: 'email' },
      { text: 'Nomor Telepon', value: 'phone_no' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      fullname: '',
      phase_no: 0,
      univ_name: 0,
      tipe: ''
    },
    defaultItem: {
      fullname: '',
      phase_no: 0,
      univ_name: 0,
      tipe: ''
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
      const res = await this.$axios.$get('/registrant')
      this.users = res.data.data
    },

    // editItem (item) {
    //   this.editedIndex = this.users.indexOf(item)
    //   this.editedItem = Object.assign({}, item)
    //   this.dialog = true
    // },
    viewItem (item) {
      this.$router.push(`/dashboard/admin/registrant/view/${item.id}`)
    },
    // deleteItem (item) {
    //   this.editedIndex = this.users.indexOf(item)
    //   this.editedItem = Object.assign({}, item)
    //   this.dialogDelete = true
    // },

    // deleteItemConfirm () {
    //   this.users.splice(this.editedIndex, 1)
    //   this.closeDelete()
    // },

    // close () {
    //   this.dialog = false
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   })
    // },

    // closeDelete () {
    //   this.dialogDelete = false
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   })
    // },

    // save () {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.users[this.editedIndex], this.editedItem)
    //   } else {
    //     this.users.push(this.editedItem)
    //   }
    //   this.close()
    // },
    add () {
      this.$router.push('/dashboard/admin/registrant/add')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
