<template>
  <v-app>
    <v-toolbar
      flat
    >
      <!-- <v-spacer /> -->
      <v-toolbar-title style="color: #1D1D1D; font-weight: bold;">
        Sesi Online
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
      <v-dialog
        v-model="dialog"
        max-width="700px"
      >
        <v-card>
          <v-card-title>
            <span class="tw-text-h5">{{ showedItem.name }}</span>
          </v-card-title>
          <hr>
          <v-card-text>
            <v-container>
              <v-col>
                <v-row>
                  Deskripsi
                </v-row>
                <v-row class="tw-font-bold">
                  {{ showedItem.description }}
                </v-row>
              </v-col>
              <br>
              <v-col>
                <v-row>
                  Waktu Sesi Online
                </v-row>
                <v-row class="tw-font-bold">
                  {{ $moment(showedItem.event_datetime).format('dddd, DD MMMM YYYY') }} <br>
                  Pukul {{ $moment(showedItem.event_datetime).format('h:mm') }}
                </v-row>
              </v-col>
              <br>
              <v-col>
                <v-row>
                  Streaming
                </v-row>
                <v-row class="tw-font-bold">
                  <a @click="goLink">{{ showedItem.link }}</a>
                </v-row>
              </v-col>
              <br>
              <v-col>
                <v-row>
                  Upload Screenshot
                </v-row>
                <v-row>
                  <v-file-input
                    v-model="screenshot"
                    color="deep-purple accent-4"
                    counter
                    label="File input"
                    placeholder="Select your files"
                    prepend-icon="mdi-paperclip"
                    outlined
                    :show-size="1000"
                  />
                </v-row>
              </v-col>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              style="border: 1px solid #C2C2C2; border-radius: 3px; background: #FFFFFF; padding: 10px 20px; font-weight: bold;"
              text
              @click="close"
            >
              Batal
            </v-btn>
            <v-btn
              style="border: 1px solid #C2C2C2; border-radius: 3px; background: #FFFFFF; padding: 10px 20px; font-weight: bold;"
              text
              @click="save"
            >
              Simpan
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
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="data"
      :single-select="singleSelect"
      :search="search"
      sort-by="peserta"
      item-key="peserta"
      class="elevation-1"
    >
      <template #[`item.event_date`]="{ item }">
        <div class="">
          {{ $moment(item.event_datetime).format('DD MMM YYYY') }}
        </div>
      </template>
      <template #[`item.event_time`]="{ item }">
        <div class="">
          {{ $moment(item.event_datetime).format('HH:mm') }}
        </div>
      </template>
      <template #[`item.link`]="{ item }">
        <div class="tw-text-yellow-600">
          <a :href="item.link" target="_blank">{{ item.link }}</a>
        </div>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon
          small
          class="tw-mr-2"
          @click="editItem(item)"
        >
          mdi-hand-back-right-outline
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
    screenshot: null,
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'Mata Kuliah',
        value: 'courses.name'
      },
      {
        text: 'Judul Sesi Online',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Tanggal',
        value: 'event_date'
      },
      {
        text: 'Waktu Acara',
        value: 'event_time'
      },
      {
        text: 'Link',
        value: 'link'
      },
      { text: 'Aksi', value: 'actions', sortable: false }
    ],
    data: [],
    editedIndex: -1,
    editedItem: {
      universitas: '',
      gelombang: false
    },
    showedItem: {},
    defaultItem: {
      universitas: '',
      gelombang: false
    }
  }),

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
      const res = await this.$axios.$get('live-streaming/user?type=online_session')
      this.data = res.data.data
    },

    detailItem (item) {
      this.$router.push(`/dashboard/user/online-session/detail/${item.id}`)
    },

    editItem (item) {
      this.showedItem = Object.assign({}, item)
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

    async save () {
      const formData = new FormData()
      formData.append('live_streaming_id', this.showedItem.id)
      formData.append('screenshot', this.screenshot)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('user-live-streaming', formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.dialog = false
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: res.message
          })
        }
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      }
    },
    async goLink () {
      const data = {
        live_streaming_id: this.showedItem.id
      }
      const res = await this.$axios.$post('user-live-streaming-click', data)
      if (!res.error) {
        window.open(this.showedItem.link, '_blank')
      } else {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Mohon maaf ada kendala jaringan'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
    // background-color: #E5E5E5;
  }
</style>
<style scoped lang="scss">
::v-deep .container {
  height: auto !important;
  width: 100% !important;
  background-color:#ffffff;
}
::v-deep .v-data-table-header {
  background-color: #FFFAF2;
}
@media (min-width: 800px) {
  ::v-deep .v-application--wrap {
    margin: 20px 80px;
  }
}
</style>
