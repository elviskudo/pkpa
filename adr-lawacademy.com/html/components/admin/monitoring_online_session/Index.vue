<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Monitoring Sesi Online
        </div>
      </div>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="data"
        sort-by="calories"
        class="elevation-1"
      >
        <template #[`item.user_ls.event_datetime`]="{ item }">
          <span>{{ $moment(item.user_ls.event_datetime).format('DD MMM YYYY HH:mm') }}</span>
        </template>
        <template #[`item.id`]="{ item }">
          {{ data.indexOf(item) + 1 }}
        </template>
        <template #top>
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-4 tw-px-3">
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
          <v-toolbar
            flat
          >
            <!-- <v-toolbar-title>Monitoring Sesi Online</v-toolbar-title>
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
            <v-spacer /> -->
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  {{ fullname }}
                </v-card-title>
                <hr>
                <v-card-text>
                  <v-container>
                    <!-- <v-row> -->
                    <v-col>
                      <v-row>
                        Universitas
                      </v-row>
                      <v-row class="tw-font-bold">
                        {{ university_name }}
                      </v-row>
                    </v-col>
                    <br>
                    <v-col>
                      <v-row>
                        Gelombang
                      </v-row>
                      <v-row class="tw-font-bold">
                        {{ phase_name }}
                      </v-row>
                    </v-col>
                    <br>
                    <v-col>
                      <v-row>
                        Waktu Sesi Online
                      </v-row>
                      <v-row class="tw-font-bold">
                        {{ $moment(showedItem.event_datetime).format('DD MMMM YYYY HH:mm') }}
                      </v-row>
                    </v-col>
                    <br>
                    <v-col>
                      <v-row>
                        Mata Kuliah
                      </v-row>
                      <v-row class="tw-font-bold">
                        {{ course_name }}
                      </v-row>
                    </v-col>
                    <br>
                    <v-col>
                      <v-row>
                        Screenshot
                      </v-row>
                      <v-row>
                        <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          max-height="150"
                          max-width="250"
                          :src="screenshot"
                          @click="goLink(screenshot)"
                        />
                      </v-row>
                    </v-col>
                    <v-col class="tw-pt-5">
                      <v-row>
                        Daftar Login
                      </v-row>
                      <v-row>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header color="grey lighten-2">
                              Daftar Login
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <br>
                              <div color="grey lighten-2" style="width: 100%">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>
                                        <span>No </span>
                                      </th>
                                      <th>
                                        <span>Tanggal Login </span>
                                      </th>
                                      <th>
                                        <span>Jam </span>
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                                <div>
                                  <table style="overflow-y:auto">
                                    <tbody>
                                      <tr v-for="(item, i) in logins" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ $moment(item.created_at).format('DD MMM YYYY') }}</td>
                                        <td>{{ $moment(item.created_at).format('HH:mm') }}</td>
                                        <v-divider />
                                      </tr>
                                      <v-divider />
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-row>
                    </v-col>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Tutup
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
            @click="viewItem(item)"
          >
            mdi-eye
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
        text: 'No',
        align: 'start',
        sortable: false,
        value: 'id'
      },
      { text: 'Waktu', value: 'user_ls.event_datetime' },
      { text: 'Nama', value: 'student.student.fullname' },
      { text: 'Mata Kuliah', value: 'user_ls.courses.name' },
      { text: 'Judul Sesi Online', value: 'user_ls.name' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    data: [],
    editedIndex: -1,
    showedItem: {},
    editedItem: {
      gelombang: '',
      periode: 0,
      universitas: 0,
      tipe: ''
    },
    defaultItem: {
      gelombang: '',
      periode: 0,
      universitas: 0,
      tipe: ''
    },
    fullname: '',
    university_name: '',
    phase_name: '',
    course_name: '',
    screenshot: '',
    logins: []
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
      const res = await this.$axios.$get('user-live-streaming')
      this.data = res.data.data
    },
    async viewItem (item) {
      this.fullname = item.student.student.fullname
      this.university_name = item.user_ls.phase.university.name
      this.phase_name = item.user_ls.phase.name
      this.course_name = item.user_ls.courses.name
      this.screenshot = item.screenshot
      this.dialog = true

      const res = await this.$axios.$get(`user-live-streaming-click/?student_id=${item.student_id}&live_streaming_id=${item.live_streaming_id}`)
      this.logins = res.data.data.map(item => ({ created_at: item.created_at }))
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

    goLink (screenshot) {
      window.open(screenshot, '_blank')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
<style scoped>
  table {
    float: left;
    width: 100%;
  }
  thead {
    background-color: #EEEEEE;
    display: block;
    float: left;
    width: 100%;
  }
  tr {
    float: left;
    width: 100%;
  }
  th, td {
    float: left;
    text-align: center;
    width: 32.6% !important;
  }
</style>
