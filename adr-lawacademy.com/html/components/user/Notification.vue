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
          <v-card-title class="tw-text-lg tw-font-bold">
            Notifikasi
          </v-card-title>
          <div v-for="notif in notifications" :key="notif.id" class="">
            <div class="tw-flex tw-flex-col tw-p-4 tw-justify-tw-items-start">
              <a href="#" class="tw-p-2">
                <span class="tw-text-md tw-px-4 tw-p-4">
                  {{ notif.message }}
                </span>
              </a>
              <span class="tw-text-xs tw-px-4">
                {{ $moment(notif.created_at).format('DD MMMM YYYY') }}| {{ $moment(notif.created_at).format('HH:mm:ss') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      notifications: {}
    }
  },
  async fetch () {
    const notifications = await this.$axios.$get('/notification/user')
    const newnotification = notifications.data
    this.notifications = newnotification
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
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
 ::v-deep .v-application--wrap {
    min-height: fit-content;
    // background-color: #E5E5E5;
  }
</style>
<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 1000px;
    background-color:#ffffff;
  }
</style>
