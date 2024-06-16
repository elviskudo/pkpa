<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Monitoring Peserta
        </div>
      </div>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="data"
        sort-by="calories"
        class="elevation-1"
      >
        <template #[`item.last_login`]="{ item }">
          {{
            item.last_login ? $moment(item.last_login).format('DD MMMM YYYY HH:mm:ss') : ''
          }}
        </template>
        <template #[`item.created_at`]="{ item }">
          {{
            $moment(item.created_at).format('DD MMMM YYYY HH:mm:ss')
          }}
        </template>
        <template #[`item.progress`]="{ item }">
          <div v-if="item.total > 0" class="tw-grid tw-grid-cols-3 tw-gap-2">
            <div class="tw-col-span-2 tw-mt-1.5">
              <div class="tw-bg-gray-200 tw-h-2">
                <div class="tw-bg-blue-600 tw-h-2" :style="'width: '+parseInt(item.progress, 10)/parseInt(item.total, 10)*100+'%'" />
              </div>
            </div>
            <div class="tw-col-span-1">
              {{ (parseInt(item.progress, 10)/parseInt(item.total, 10)*100).toFixed() }}%
            </div>
          </div>
          <div v-else class="tw-grid tw-grid-cols-3 tw-gap-2">
            <div class="tw-col-span-2 tw-mt-1.5">
              <div class="tw-bg-gray-200 tw-h-2">
                <div class="tw-bg-blue-600 tw-h-2" style="width: 0%" />
              </div>
            </div>
            <div class="tw-col-span-1">
              0%
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
            <v-toolbar-title>Monitoring Peserta</v-toolbar-title>
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
          </v-toolbar> -->
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon
            small
            class="tw-mr-2"
            @click="showItem(item)"
          >
            mdi-dots-horizontal
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
    headers: [
      {
        text: 'Peserta',
        align: 'start',
        sortable: true,
        value: 'fullname'
      },
      { text: 'Login Terakhir', value: 'last_login' },
      { text: 'Tanggal Daftar', value: 'created_at' },
      { text: 'Progres', value: 'progress', width: '30%' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    data: []
  }),

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const data = await this.$axios.$get('user-activity')
      this.data = data.data.data
    },
    showItem (item) {
      this.$router.push(`/dashboard/admin/manageuser/view/${item.id}`)
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
