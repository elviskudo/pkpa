<template>
  <header class="tw-bg-body tw-h-20 tw-items-center tw-relative tw-w-full tw-z-10">
    <div class="tw-flex tw-flex-col tw-h-full tw-justify-center tw-mx-auto tw-px-3 tw-relative">
      <div
        class="
          tw-flex
          tw-items-center
          tw-pl-1
          tw-relative
          tw-w-full
          sm:tw-ml-0 sm:tw-pr-2
          lg:tw-max-w-68
        "
      >
        <div class="tw-flex tw-left-0 tw-relative tw-w-3/4">
          <div class="tw-flex tw-group tw-h-full tw-items-center tw-relative tw-w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="tw-text-4xl tw-text-white focus:tw-outline-none lg:tw-hidden"
              @click="toggle"
            >
              &#8801;
            </button>
          </div>
        </div>
        <div
          class="
            tw-flex
            tw-items-center
            tw-justify-end
            tw-ml-5
            tw-p-2
            tw-relative
            tw-w-full
            sm:tw-mr-0 sm:tw-right-auto
          "
        >
          <NuxtLink v-if="loggedInUser.status" to="/dashboard/user/myclass" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light link">
            Kelasku
          </NuxtLink>
          <!-- notification -->
          <Notification />
          <!-- notification -->
          <button
            ref="buttonZ"
            type="button"
            class="tw-py-2 tw-rounded tw-inline-flex tw-items-center"
            @click="togglex = !togglex"
          >
            <!-- ~/assets/images/users/avatar.png -->
            <div v-if="loggedInUser.image_url == null">
              <img
                src="~/assets/avatar.png"
                class="tw-h-6 tw-w-6 tw-object-cover tw-rounded-full tw-mr-1"
                loading="lazy"
              >
            </div>
            <div v-else>
              <img
                :src="loggedInUser.image_url"
                class="tw-h-6 tw-w-6 tw-object-cover tw-rounded-full tw-mr-1"
                loading="lazy"
              >
            </div>
            <p class="tw-text-sm">
              {{ loggedInUser.fullname }}
              <span><fa
                :icon="['fas', 'sort-down']"
                class="tw-text-blue-dark tw-ml-2 tw-mt-1"
              /></span>
            </p>
          </button>
        </div>
        <div
          v-show="togglex"
          id="menuHeaderId"
          v-closable="{
            exclude: ['buttonZ'],
            handler: 'onCloseZ'
          }"
          class="
        dropdown-menu
        tw-absolute
        tw-w-32
        tw-bg-white
        tw-rounded-lg
        tw-shadow-lg
        tw-top-16
        tw-justify-center
        tw-right-0
        "
        >
          <NuxtLink to="/dashboard/setting" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light tw-link hover:tw-rounded-t-lg">
            Profil
          </NuxtLink>
          <NuxtLink v-if="loggedInUser.status" to="/dashboard/user/myclass" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light link">
            Kelasku
          </NuxtLink>
          <a
            class="
                    tw-cursor-pointer
                    tw-block
                    tw-px-4
                    tw-py-2
                    link
                    hover:tw-bg-primary-light
                    button-logout
                    hover:tw-rounded-b-lg
                  "
            @click="logout"
          >Keluar</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import Notification from '~/components/Notification.vue'
// This variable will hold the reference to
// document's click handler
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
  name: 'TopNavigation',
  components: { Notification },
  inject: ['toggle'],
  data () {
    return {
      isOpen: false,
      togglex: false,
      isAdmin: false,
      drawerx: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    $route () {
      this.togglex = false
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
  mounted () {
    // console.log('img:', this.loggedInUser.image_url)
    if (this.$auth.hasScope('superadmin') || this.$auth.hasScope('admin')) {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) { this.isOpen = false }
    })
  },
  methods: {
    changeLocation (target) {
      this.$router.push('/#' + target)
    },
    drawer () {
      this.drawerx = !this.drawerx
      this.isOpen = !this.isOpen
    },
    async logout () {
      await this.$auth.logout()
    },
    onCloseZ () {
      this.togglex = false
      // this.numOfNotifications = null
    }
  }
}
</script>
