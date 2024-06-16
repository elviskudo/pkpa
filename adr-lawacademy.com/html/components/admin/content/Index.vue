<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Konten
        </div>
        <button
          class="tw-rounded tw-border-solid tw-px-3 tw-py-4 tw-border-blue-500 tw-border-2"
          @click="add()"
        >
          <span class="tw-text-blue-500 tw-font-bold">+ Tambah Konten</span>
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
          <div class="tw-flex tw-flex-col">
            <div class="tw-font-bold">
              {{ item.name }}
            </div>
            <div class="tw-text-sm">
              {{ item.topic.name }}
            </div>
          </div>
        </template>
        <template #[`item.type`]="{ item }">
          <div v-if="item.type.name === 'video'" class="tw-text-white tw-text-center tw-rounded-md tw-bg-blue-400 tw-inline-block tw-px-2 tw-py-2 tw-font-bold tw-text-xs tw-leading-tight tw-uppercase">
            {{ item.type.name }}
          </div>
          <div v-else class="tw-text-white tw-text-center tw-rounded-md tw-bg-pink-200 tw-inline-block tw-px-2 tw-py-2 tw-font-bold tw-text-xs tw-leading-tight tw-uppercase">
            {{ item.type.name }}
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
          </div>
          <v-dialog v-model="dialogDelete" max-width="515px">
            <v-card class="tw-rounded-md">
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
    search: '',
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'Judul Konten',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Tipe Konten',
        value: 'type'
      },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    items: [],
    university_id: '',
    universities: []
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
      let res = null
      const univercities = await this.$axios.$get('university')
      this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
      if (this.loggedInUser.university_id) {
        this.university_id = this.loggedInUser.university_id
        res = await this.$axios.$get('bank-content-topic')
      } else if (this.university_id) {
        res = await this.$axios.$get(`bank-content-topic/?university_id=${this.university_id}`)
      } else {
        res = await this.$axios.$get('bank-content-topic')
      }
      this.items = res.data.data
    },

    viewItem (item) {
      this.$router.push(`/dashboard/admin/content/view/${item.id}`)
    },
    editItem (item) {
      this.$router.push(`/dashboard/admin/content/edit/${item.id}`)
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
      await this.$axios.delete(`bank-content-topic/${this.editedItem.id}`)
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
      this.$router.push('/dashboard/admin/content/add')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
