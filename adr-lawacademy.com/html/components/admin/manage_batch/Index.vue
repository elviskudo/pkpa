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
          Manajemen Gelombang
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
        :items="data"
        sort-by="calories"
        class="elevation-1"
      >
        <template #[`item.learning_period_start`]="{ item }">
          <span>{{ $moment(item.learning_period_start).format('DD MMM') }} - {{ $moment(item.learning_period_end).format('DD MMM YYYY') }}</span>
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
                <div class="md:tw-w-2/5">
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
            <v-toolbar-title>Manajemen Gelombang</v-toolbar-title>
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
      { text: 'Universitas', value: 'university_name' },
      { text: 'Gelombang', value: 'name' },
      { text: 'Periode Pembelajaran', value: 'learning_period_start' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    data: [],
    editedIndex: -1,
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
    }
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
  async mounted () {
    // const res = await this.$axios.$get('show-course')
    // this.data = res.data.data

    const univercities = await this.$axios.$get('university')
    this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      this.getPhaseUniversity()
      const res = await this.$axios.$get(`show-course/?university_id=${this.university_id}`)
      this.data = res.data.data
    } else {
      const res = await this.$axios.$get('show-course')
      this.data = res.data.data
    }
  },

  // created () {
  //   this.initialize()
  // },

  methods: {
    async initialize () {
      const res = await this.$axios.$get('show-course')
      this.data = res.data.data
    },
    async getPhaseUniversity () {
      const resx = await this.$axios.$get(`show-course/?university_id=${this.university_id}`)
      this.data = resx.data.data

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
      const res = await this.$axios.$get(`show-course/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.data = res.data.data
    },
    viewItem (item) {
      this.$router.push(`/dashboard/admin/manage-batch/view/${item.id}`)
    },
    editItem (item) {
      this.$router.push(`/dashboard/admin/manage-batch/edit/${item.id}`)
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
      this.$router.push('/dashboard/admin/manage-batch/add')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
