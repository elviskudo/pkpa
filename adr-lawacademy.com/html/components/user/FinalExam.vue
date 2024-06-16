/* eslint-disable vue/no-multiple-template-root */
<template>
  <v-app>
    <div class="">
      <!-- <h1>
        <a href="#" class="tw-p-4 tw-text-lg">Session Online</a>
      </h1> -->
      <div class="">
        <div
          class=""
        >
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            :hide-default-footer="true"
            sort-by="peserta"
            item-key="peserta"
            class="elevation-1"
          >
            <template #top>
              <v-toolbar
                flat
              >
                <v-spacer />
                <v-toolbar-title>Ujian Akhir</v-toolbar-title>
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

                    <!-- <v-card-actions>
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
                    </v-card-actions> -->
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="tw-text-h5 tw-justify-center tw-font-bold">
                      Konfirmasi Pengajuan
                    </v-card-title>
                    <span class="tw-text-md tw-justify-tw-items-center tw-px-12">
                      Apakah anda akan mengajukan permohonan untuk
                    </span>
                    <span class="tw-text-md tw-px-12">
                      mengikuti ujian akhir
                    </span>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn color="blue darken-1" text @click="closeDelete">
                        Tidak
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                        Ya
                      </v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template #[`item.actions`]="{ item }">
              <!-- <v-icon
                small
                class="tw-mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon> -->
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-arrow-left-bold-circle-outline
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
        </div>
      </div>
    </div>
    <!--modal-->
    <div class="tw-text-center">
      <v-dialog
        v-model="dialogOnlinesession"
        persistent
        width="500"
      >
        <v-card>
          <!-- <v-card-title class="tw-text-h5 grey lighten-2">
            Konfirmasi
          </v-card-title> -->

          <v-card-text style="text-align: center;font-size: 30px;padding: 40px;">
            Coming Soon..!
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="closeDialog"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialogOnlinesession: true,
    search: '',
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'Judul Sesi online',
        align: 'start',
        sortable: false,
        value: 'judul'
      },
      {
        text: 'Tanggal',
        value: 'tanggal'
      },
      {
        text: 'Waktu',
        value: 'waktu'
      },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      judul: '',
      tanggal: '',
      waktu: '',
      jam: ''
    },
    defaultItem: {
      judul: '',
      tanggal: '',
      waktu: '',
      jam: ''
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
    initialize () {
      this.desserts = [
        {
          judul: 'Ujian Akhir PKPA',
          tanggal: '20 April 2021',
          waktu: '13.00'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      // this.desserts.splice(this.editedIndex, 1)
      // this.closeDelete()
      this.$router.push('/dashboard/user/detail-final-exam')
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    add () {
      this.$router.push('/dashboard/admin/add-category')
    },
    closeDialog () {
      // dialogOnlinesession = false
      this.$router.push('/dashboard/user/myclass')
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
</style>
<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 1000px;
    background-color:#ffffff;
  }
</style>
