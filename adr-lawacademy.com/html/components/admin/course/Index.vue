<template>
  <v-app>
    <v-card
      class="tw-mx-auto tw-w-full"
    >
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Mata Kuliah
        </div>
        <button
          class="tw-rounded tw-border-solid tw-px-3 tw-py-4 tw-border-blue-500 tw-border-2"
          @click="add()"
        >
          <span class="tw-text-blue-500 tw-font-bold">+ Tambah Mata Kuliah</span>
        </button>
      </div>
      <v-data-table
        v-model="selected"
        :search="search"
        :headers="headers"
        :items="items"
        :single-select="singleSelect"
        :sort-by="items.name"
        :item-key="items.name"
        show-select
        class="elevation-1"
      >
        <template #[`item.name`]="{ item }">
          <div class="tw-grid tw-grid-cols-7 tw-py-2 tw-gap-3 tw-items-center">
            <div class="tw-col-span-7 md:tw-col-span-2">
              <v-img :src="item.background_image" :alt="item.name" max-width="100px" />
            </div>
            <div class="tw-col-span-7 md:tw-col-span-5">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </template>
        <template #[`item.is_publish`]="{ item }">
          <v-switch
            v-model="item.is_publish"
            disabled
          />
        </template>
        <template #top>
          <!-- <v-toolbar
            flat
          > -->
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
            <div>
              <select v-model="university_id" class="tw-form-select tw-py-3 tw-w-full" :disabled="loggedInUser.university_id" @click="initialize">
                <option selected value="">
                  Pilih
                </option>
                <option v-for="unv in universities" :key="unv.id" :value="unv.id">
                  {{ unv.name }}
                </option>
              </select>
            </div>
            <!-- <div>
              <select v-model="phase_id" name="phase" class="tw-form-select tw-py-3 tw-w-full" @change="getdataPhase">
                <option selected value="">
                  Pilih
                </option>
                <option v-for="phs in phases" :key="phs.id" :value="phs.id">
                  {{ phs.name }}
                </option>
              </select>
            </div> -->
          </div>
          <!-- <v-spacer />
          <v-spacer /> -->
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
          <!-- </v-toolbar> -->
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
    no: 0,
    search: '',
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'No',
        value: 'no'
      },
      {
        text: 'Judul Mata Kuliah',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Universitas',
        value: 'universities.name'
      },
      {
        text: 'Publish',
        value: 'is_publish',
        sortable: false
      },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    items: [],
    university_id: '',
    universities: [],
    phases: [],
    phase_id: ''
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
  created () {
    this.initialize()
  },
  methods: {
    async initialize () {
      const univercities = await this.$axios.$get('university')
      this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
      if (this.loggedInUser.university_id) {
        this.university_id = this.loggedInUser.university_id
        // this.getPhaseUniversity()
        const res = await this.$axios.$get(`/bank-course/?university_id=${this.university_id}`)
        this.items = res.data.data
      } else if (this.university_id) {
        const res = await this.$axios.$get(`/bank-course/?university_id=${this.university_id}`)
        this.items = res.data.data
      // } else if (this.phase_id) {
      //   const res = await this.$axios.$get(`/bank-course/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      //   this.items = res.data.data
      } else {
        const res = await this.$axios.$get('/bank-course')
        this.items = res.data.data
      }
      const no = 1
      this.items.forEach((_, i) => (this.items[i].no = no + i))
    },
    // async getPhaseUniversity () {
    //   const resx = await this.$axios.$get(`/bank-course/?university_id=${this.university_id}`)
    //   this.items = resx.data.data

    //   const res = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
    //   this.phases = res.data.data.map(obj => ({ id: obj.id, name: obj.name, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end }))
    // },
    async getdataPhase () {
      const res = await this.$axios.$get(`/bank-course/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.items = res.data.data
    },
    viewItem (item) {
      this.$router.push(`/dashboard/admin/course/view/${item.id}`)
    },
    editItem (item) {
      this.$router.push(`/dashboard/admin/course/edit/${item.id}`)
      // this.editedIndex = this.users.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      this.items.splice(this.editedIndex, 1)
      await this.$axios.delete(`bank-course/${this.editedItem.id}`)
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
    add () {
      this.$router.push('/dashboard/admin/course/add')
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
