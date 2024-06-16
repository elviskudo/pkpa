/* eslint-disable vue/no-multiple-template-root */
<template>
  <v-app>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="data"
      :single-select="singleSelect"
      sort-by="peserta"
      item-key="peserta"
      class="elevation-1"
    >
      <template #[`item.complete`]="{item}">
        <v-icon v-if="item.complete" style="color: #fff !important; background: #71BC78 !important; border-radius: 50%; padding: 4px; font-size: 12px;">
          mdi-check-bold
        </v-icon>
        <v-icon v-else style="color: #fff !important; background: #CA3435 !important; border-radius: 50%; padding: 4px; font-size: 12px;">
          mdi-close-thick
        </v-icon>
      </template>
      <!-- <template #top>
        <v-toolbar
          flat
        >
          <v-spacer />
          <v-toolbar-title>Riwayat Pendaftaran</v-toolbar-title>
          <v-divider
            class="tw-mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            placeholder="Search"
            single-line
            hide-details
          />
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
                    >
                      <v-text-field>
                        <v-switch :key="editedItem.peserta" v-model="editedItem.pb" />
                      </v-text-field>
                    </v-col>
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
      </template> -->
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
    headers: [
      {
        text: 'Mata Kuliah',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Complete',
        value: 'complete'
      }
    ],
    data: [],
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
      const res = await this.$axios.$get('live-streaming/course')
      this.data = res.data
    },

    editItem (item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.data.splice(this.editedIndex, 1)
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
        Object.assign(this.data[this.editedIndex], this.editedItem)
      } else {
        this.data.push(this.editedItem)
      }
      this.close()
    },
    add () {
      this.$router.push('/dashboard/admin/add-category')
    }
  }
}
</script>

<style scoped>
.theme--light {
  background-color: #FFFFFF !important;
  border: none;
}
</style>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: fit-content;
  background-color: #E5E5E5;
}
::v-deep .v-application--wrap {
  background-color: transparent !important;
}
::v-deep .v-data-table {
  width: 100%;
  max-width: 800px;
}
@media (min-width: 1137px) {
  ::v-deep .v-data-table {
    margin: 10px 0 0 3rem;
  }
}
::v-deep .v-data-table-header {
  background-color: #FFFAF2;
}
::v-deep thead th.text-start:nth-child(2),
::v-deep tbody td.text-start:nth-child(2) {
  text-align: center !important;
}
::v-deep .v-data-table-header th span {
  font-weight: bold;
  color: #1D1D1D;
  font-size: 16px;
}
</style>

<style scoped lang="scss">
 .container {
    height: auto !important;
    width: 100% !important;
    background-color:#ffffff;
  }
</style>
