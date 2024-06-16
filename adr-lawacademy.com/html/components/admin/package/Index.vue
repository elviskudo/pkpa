<template>
  <v-app>
    <v-card>
      <!-- <div class="tw-w-full tw-flex tw-flex-row tw-px-4">
        <div class="tw-w-1/3">
          <div class="tw-col-span-2">
            <select v-model="university_id" class="tw-w-2/3 tw-form-select" :disabled="loggedInUser.university_id" @change="getPhaseUniversity">
              <option selected value="">
                Pilih
              </option>
              <option v-for="unv in universities" :key="unv.id" :value="unv.id">
                {{ unv.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="tw-w-1/3">
          <div class="tw-col-span-2">
            <select v-model="phase_id" name="phase" class="tw-form-select tw-w-2/3" @change="getdataPhase">
              <option selected value="">
                Pilih
              </option>
              <option v-for="phs in phases" :key="phs.id" :value="phs.id">
                {{ phs.name }}
              </option>
            </select>
          </div>
        </div>
      </div> -->
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Mata Kuliah
        </div>
        <button
          class="tw-rounded tw-border-solid tw-px-3 tw-py-4 tw-border-blue-500 tw-border-2"
          @click="add()"
        >
          <span class="tw-text-blue-500 tw-font-bold">+ Tambah Data</span>
        </button>
      </div>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="users"
        class="elevation-1"
      >
        <template #[`item.is_publish`]="{ item }">
          <v-switch
            v-model="item.is_publish"
            disabled
          />
        </template>
        <template #[`item.phase_no`]="{ item }">
          {{ zeroPad(item.phase_no, 2) }}
        </template>
        <template #top>
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-10 tw-px-3">
            <div class="tw-w-full">
              <div class="tw-mx-3 md:tw-flex tw-items-start">
                <div class="tw-px-3 md:tw-w-2/5">
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
                <div class="tw-px-3 md:tw-w-2/5">
                  <select v-model="university_id" class="tw-form-select" :disabled="loggedInUser.university_id" @change="getPhaseUniversity">
                    <option selected value="">
                      Pilih
                    </option>
                    <option v-for="unv in universities" :key="unv.id" :value="unv.id">
                      {{ unv.name }}
                    </option>
                  </select>
                </div>
                <div class="tw-px-3 md:tw-w-2/5">
                  <select v-model="phase_id" name="phase" class="tw-form-select" @change="getdataPhase">
                    <option selected value="">
                      Pilih
                    </option>
                    <option v-for="phs in phases" :key="phs.id" :value="phs.id">
                      {{ phs.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- <v-toolbar
            flat
          >
            <v-toolbar-title>Mata Kuliah</v-toolbar-title>
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
          </v-toolbar> -->
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
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    university_id: '',
    universities: [],
    phases: [],
    phase_id: '',
    headers: [
      {
        text: 'No',
        align: 'start',
        sortable: false,
        value: 'no'
      },
      { text: 'Judul Mata Kuliah', value: 'course_name' },
      { text: 'Universitas', value: 'university_name' },
      { text: 'Gelombang', value: 'phase_no' },
      { text: 'Publish', value: 'is_publish' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    users: [],
    editedIndex: -1
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  // created () {
  //   this.initialize()
  // },

  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      this.getPhaseUniversity()
      const res = await this.$axios.$get(`/course/superadmin/?university_id=${this.university_id}`)
      this.users = res.data
    } else {
      const res = await this.$axios.$get('/course/superadmin')
      this.users = res.data
    }
  },

  methods: {
    async initialize () {
      const res = await this.$axios.$get('/course/superadmin')
      this.users = res.data
    },
    async getPhaseUniversity () {
      const resx = await this.$axios.$get(`/course/superadmin/?university_id=${this.university_id}`)
      this.users = resx.data

      const res = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
      this.phases = res.data.data.map(obj => ({ id: obj.id, name: obj.name, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end }))
      const arrPhase = []
      this.phases.forEach((element, index) => {
        if (element.status === 'Daftar') {
          arrPhase.unshift(element)
        } else if (element.status == 'Ditutup') {
          arrPhase.splice(index, 1)
        } else {
          arrPhase.push(element)
        }
      })
      this.phases = arrPhase
    },
    async getdataPhase () {
      const res = await this.$axios.$get(`/course/superadmin/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.users = res.data
    },
    editItem (item) {
      this.$router.push(`/dashboard/admin/package/edit/${item.id}`)
    },
    viewItem (item) {
      this.$router.push(`/dashboard/admin/package/view/${item.id}`)
    },
    add () {
      this.$router.push('/dashboard/admin/package/add')
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
    zeroPad (num, places) {
      return String(num).padStart(places, '0')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
