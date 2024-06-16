<template>
  <div v-if="isAuthenticated">
    <button ref="btnclick" class="tw-py-4 tw-px-1 tw-mr-3 tw-relative tw-border-2 tw-text-gray-800" aria-label="Notifikasi" @click="toggleNotif = !toggleNotif">
      <v-icon>
        mdi-bell-badge
      </v-icon>
      <span class="tw-absolute tw-inset-0 tw-object-tw-right-top -tw-mr-6">
        <div class="tw-inline-flex tw-items-center tw-px-1.5 tw-py-0.5 tw-border-2 tw-border-white tw-rounded-full tw-text-xs tw-font-semibold tw-leading-4 tw-bg-red-500 tw-text-white">
          {{ numOfNotifications }}
        </div>
      </span>
    </button>

    <div
      v-show="toggleNotif"
      id="notification"
      ref="notification"
      v-closable="{
        exclude: ['btnclick'],
        handler: 'onClose'
      }"
    >
      <div
        class="
                  tw-bg-white
                  tw-mt-0
                  tw-z-10
                  tw-w-2/3
                  md:tw-w-4/12
                  tw-max-h-72
                  tw-overflow-y-auto
                  tw-my-2
                  tw-px-0
                  tw-py-2
                  tw-absolute
                  tw-right-20
                  tw-rounded
                  lg:tw-right-40
                  cei-notification
                "
        style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 25px rgba(0, 0, 0, 0.15);"
      >
        <div v-if="notifications.length == 0">
          <div class="tw-px-5">
            <div
              class="tw-w-full tw-p-3 tw-mt-4 tw-bg-white tw-rounded tw-shadow tw-flex tw-flex-shrink-0 tw-text-center"
            >
              <div class="tw-pl-3">
                <p tabindex="0" class="focus:tw-outline-none tw-text-sm tw-leading-none">
                  <!-- <span class="tw-text-indigo-700">{{ fullname }}</span> Status {{ status }}
                          <span class="tw-text-indigo-700">{{ timelogin }}</span> -->
                </p>
                <p
                  tabindex="0"
                >
                  Tidak ada notifikasi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-for="notif in notifications.slice().reverse()" :key="notif._id">
          <a :href="notif.url">
            <div class="tw-w-full tw-py-2 tw-px-3 tw-bg-[#E8F1F8] tw-border-r-4 tw-border-[#146EB4]">
              <div class="tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between">
                <div class="tw-flex tw-items-center">
                  <div class="tw-mr-1">
                    <img
                      src="https://pkpa.s3.ap-southeast-1.amazonaws.com/128/user-registration/1655698324937_photo-1509988892867-8bf3ee9e3afa.jpg"
                      style="width: 30px; height: 30px;"
                      class="tw-object-cover tw-rounded-full tw-mr-3"
                      alt="Logo PKPA"
                    >
                  </div>
                  <div>
                    <div class="focus:tw-outline-none tw-text-sm tw-leading-3 tw-text-[#1D1D1D]]">
                      {{ notif.message }}
                    </div>
                    <div class="focus:tw-outline-none tw-text-xs tw-leading-3 tw-text-[#146EB4] tw-mt-2">
                      <!-- {{ $moment(notif.created_at).format('DD MMMM YYYY, HH:mm:ss') }} -->
                      2 menit yang lalu
                    </div>
                  </div>
                </div>
                <div class="tw-pl-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#146EB4" />
                    <path d="M9.59961 11.9999C9.59961 11.1162 10.316 10.3999 11.1996 10.3999H16.7996C17.6833 10.3999 18.3996 11.1162 18.3996 11.9999V15.1999C18.3996 16.0836 17.6833 16.7999 16.7996 16.7999H15.1996L12.7996 19.1999V16.7999H11.1996C10.316 16.7999 9.59961 16.0836 9.59961 15.1999V11.9999Z" fill="white" />
                    <path d="M19.9996 13.5999V14.3999C19.9996 16.609 18.2087 18.3999 15.9996 18.3999H15.8623L14.449 19.8133C14.6728 19.9324 14.9283 19.9999 15.1996 19.9999H16.7996L19.1996 22.3999V19.9999H20.7996C21.6833 19.9999 22.3996 19.2836 22.3996 18.3999V15.1999C22.3996 14.3162 21.6833 13.5999 20.7996 13.5999H19.9996Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
// import socket from '~/plugins/socket.io'

let handleOutsideClick
Vue.directive('closable', {
  bind (el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = (e) => {
      e.stopPropagation()
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value
      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      exclude.forEach((refName) => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName]
          // See if this excluded element
          // is the same element the user just clicked on
          if (excludedEl) {
            clickedOnExcludedEl = excludedEl.contains(e.target)
          }
        }
      })
      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]()
      }
    }
    // Register click/touchstart event listeners on the whole page
    document.body.addEventListener('click', handleOutsideClick)
    document.body.addEventListener('touchstart', handleOutsideClick)
  },
  unbind () {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.body.removeEventListener('click', handleOutsideClick)
    document.body.removeEventListener('touchstart', handleOutsideClick)
  }
})
export default {
  name: 'Notification',
  data () {
    return {
      // toggle: false,
      toggleNotif: false,
      notifications: [],
      numOfNotifications: 0
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    $route () {
      // this.toggle = false
      this.toggleNotif = false
    },
    isOpen: {
      immediate: true,
      handler (isOpen) {
        // this.drawerx = false
        if (process.client) {
          if (isOpen) { document.body.style.setProperty('overflow', 'hidden') } else { document.body.style.removeProperty('overflow') }
        }
      }
    }
  },
  beforeMount () {
    this.$socket.main.on('check-payment', (args) => {
      if (this.isAuthenticated && this.loggedInUser.id === args.user_id) {
        if (args.success) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Pembayaran berhasil'
          })
          this.$router.push('/')
        } else {
          this.$swal('Pembayaran gagal')
        }
      }
      // console.log('haloooo from socket', args)
      // this.notifications.push(ip)
    })
  },
  mounted () {
    // this.socket = this.$nuxtSocket({
    //   reconnection: false
    // })
    // socket.emit('tester', { data: 'connect' })
    // this.socket.on('user', (arg) => {
    //   if (this.loggedInUser && (arg.id === this.loggedInUser.id)) {
    //     this.numOfNotifications++
    //     this.notifications.push(arg)
    //   }
    // })
  },
  methods: {
    onClose () {
      this.toggleNotif = false
    }
    // bindBroadCastingData (data) {
    //   console.log('Broad Casting Recieve : ', data)
    // },
    // connectToSocket () {
    //   this.$socket.main.on('payment', 'this.bindBroadCastingData')
    // }
  }
}
</script>
