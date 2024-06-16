<template>
  <v-app>
    <div class="">
      <div class="">
        <div class="">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="users"
            :single-select="singleSelect"
            sort-by="peserta"
            class="elevation-1"
          >
            <template #top>
              <v-toolbar
                flat
              >
                <!-- <v-switch
                  v-model="singleSelect"
                  label="Single select"
                  class="pa-3"
                /> -->
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
                  label="Search"
                  single-line
                  hide-details
                />
                <v-spacer />
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
        </div>
      </div>
    </div>
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
        text: 'Universitas',
        align: 'start',
        sortable: false,
        value: 'univ_name'
      },
      {
        text: 'Gelombang',
        value: 'phase_name'
      },
      {
        text: 'Periode',
        value: 'periode'
      },
      { text: 'Status', value: 'status', sortable: false }
    ],
    users: []
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$axios.$get('/user-university/history-phase')
      this.users = res.data.data
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #FFFFFF !important; */
  border: none;
}
</style>

<style scoped lang="scss">
//  ::v-deep .v-application--wrap {
//     min-height: fit-content;
//   }
</style>
<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 1000px;
    // background-color:#ffffff;
  }
</style>
