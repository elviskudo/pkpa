<template>
  <nav
    class="
      tw-bg-white
      tw-h-20
      tw-w-full
      tw-border-b
      tw-animated
      tw-z-20
      tw-p-6
      tw-top-0
      tw-fixed
      tw-flex
      tw-items-center"
  >
    <div class="tw-w-full tw-flex tw-items-center tw-justify-between">
      <client-only>
        <!-- Header logo -->
        <div class="tw-flex tw-items-center">
<!--          <div class="cei-corner-ribbon top-left sticky orange-500 shadow">
            development
          </div> -->
          <nuxt-link to="/">
            <img
              src="~/assets/images/logo/logo-pkpa.png"
              style="width: 100px"
              alt="Logo PKPA"
            >
          </nuxt-link>
          <nuxt-link to="/">
            <img
              src="~/assets/images/logo/logo-pshk.png"
              style="width: 100px"
              alt="Logo PSHK"
            >
          </nuxt-link>
        </div>

        <div class="tw-flex tw-items-center">
    <div v-if="isAuthenticated">
      <div v-if="loggedInUser.status">
        <NuxtLink v-if="loggedInUser.status" to="/dashboard/user/myclass" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light link">
                Kelasku
              </NuxtLink>
      </div>
    </div>

          <!-- notification -->
          <Notification />
          <!-- notification -->

          <!-- Drawer Menu -->
          <aside v-show="isOpen" class="tw-p-5 tw-transform tw-top-0 tw-left-0 tw-w-64 tw-bg-white tw-fixed tw-h-full tw-overflow-auto tw-ease-in-out tw-transition-all tw-duration-300 tw-z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
            <button class="tw-absolute tw-top-0 tw-right-0 tw-mt-4 tw-mr-4" @click="isOpen = false">
              <svg
                class="tw-w-6 tw-h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div v-if="isAuthenticated" @click="isOpen = false">
              <ul class="tw-divide-y tw-font-sans">
                <li>
                  <NuxtLink to="/dashboard/setting" class="tw-my-4 tw-inline-block">
                    Profil
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink v-if="isAdmin" to="/dashboard/admin/user" class="tw-my-4 tw-inline-block">
                    Dashboard
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink v-if="loggedInUser.status" to="/dashboard/user/myclass" class="tw-my-4 tw-inline-block">
                    Kelasku
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="tw-my-4 tw-inline-block tw-cursor-pointer hover:tw-rounded-b-lg"
                    @click="logout"
                  >Keluar</a>
                </li>
              </ul>
            </div>
            <div v-else @click="isOpen = false">
              <ul class="tw-divide-y tw-font-sans">
                <li>
                  <a
                    class="tw-my-4 tw-inline-block"
                    @click="changeLocation('university')"
                  >Universitas</a>
                </li>
                <li>
                  <a
                    class="tw-my-4 tw-inline-block"
                    @click="changeLocation('about-us')"
                  >Tentang Kami</a>
                </li>
                <li>
                  <a
                    class="tw-my-4 tw-inline-block"
                    @click="changeLocation('flow-registration')"
                  >Alur Daftar</a>
                </li>
                <li>
                  <a
                    class="tw-my-4 tw-inline-block"
                    @click="changeLocation('curriculum')"
                  >Kurikulum</a>
                </li>
                <li>
                  <nuxt-link
                    class="tw-my-4 tw-inline-block"
                    to="/login"
                  >
                    Masuk
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="tw-my-4 tw-inline-block"
                    to="/register"
                  >
                    Daftar
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </aside>
          <!-- end of drawer -->
          <!-- Navbar -->
          <div v-if="isAuthenticated">
            <div class="tw-block">
              <div class="tw-flex tw-items-center">
                <button
                  ref="clikbtnuser"
                  type="button"
                  class="tw-py-2 tw-rounded tw-inline-flex tw-items-center btn"
                  @click="toggle = !toggle"
                >
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
                <div
                  v-show="toggle"
                  id="menuHeaderId"
                  v-closable="{
                    exclude: ['clikbtnuser'],
                    handler: 'onClose'
                  }"
                  class="
                    tw-z-10
                    dropdown-menu
                    tw-absolute
                    tw-w-32
                    tw-bg-white
                    tw-rounded-lg
                    tw-top-16
                    tw-shadow-md
                    tw-justify-center
                  "
                >
                  <NuxtLink to="/dashboard/setting" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light tw-link hover:tw-rounded-t-lg">
                    Profil
                  </NuxtLink>
                  <NuxtLink v-if="isAdmin" to="/dashboard/admin" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light tw-link">
                    Dashboard
                  </NuxtLink>
                  <NuxtLink v-if="loggedInUser.status" to="/dashboard/user/myclass" class="tw-block tw-px-4 tw-py-2 hover:tw-bg-primary-light tw-link">
                    Kelasku
                  </NuxtLink>
                  <a
                    class="
                      tw-cursor-pointer
                      tw-block
                      tw-px-4
                      tw-py-2
                      tw-link
                      hover:tw-bg-primary-light
                      button-logout
                      hover:tw-rounded-b-lg
                    "
                    @click="logout"
                  >Keluar</a>
                </div>
              </div>
            </div>
          </div>
          <!--div else-->
          <div v-else>
            <div class="tw-hidden lg:tw-block">
              <ul class="tw-flex xl:tw-space-x-8 lg:tw-space-x-2 tw-text-sm tw-right-11 tw-px-28 tw-font-sans" style="color:#4A4A4A;">
                <li>
                  <a
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-1
                    tw-text-sm
                    tw-font-normal
                    hover:tw-text-orange-500
                    tw-cursor-pointer
                  "
                    @click="changeLocation('university')"
                  >Universitas</a>
                </li>
                <li>
                  <a
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-1
                    tw-font-normal
                    hover:tw-text-orange-500
                    tw-text-sm
                    tw-cursor-pointer
                  "
                    @click="changeLocation('about-us')"
                  >Tentang Kami</a>
                </li>
                <li>
                  <a
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-1
                    tw-font-normal
                    hover:tw-text-orange-500
                    tw-text-sm
                    tw-cursor-pointer
                  "
                    @click="changeLocation('flow-registration')"
                  >Alur Daftar</a>
                </li>
                <li>
                  <a
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-1
                    tw-font-normal
                    hover:tw-text-orange-500
                    tw-text-sm
                    tw-cursor-pointer
                  "
                    @click="changeLocation('curriculum')"
                  >Kurikulum</a>
                </li>
                <v-divider
                  class="d-none d-sm-block"
                  vertical
                />
                <li>
                  <nuxt-link
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-1
                    tw-font-normal
                    hover:tw-text-orange-500
                    tw-text-sm
                    tw-cursor-pointer
                  "
                    to="/login"
                  >
                    Masuk
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    class="
                    tw-whitespace-nowrap
                    tw-py-2
                    tw-px-6
                    btn
                    tw-bg-white
                    tw-text-gray-500
                    tw-font-normal
                    tw-border-2
                    hover:tw-bg-orange-500
                    hover:tw-text-white
                    hover:tw-border-white
                    tw-bg-opacity-0
                    tw-rounded
                    tw-text-sm
                  "
                    to="/register"
                    style="border: 1px solid #858585;"
                  >
                    Daftar
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Dark Background Transition -->
          <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
          >
            <div v-show="isOpen" class="tw-z-10 tw-fixed tw-inset-0 tw-transition-opacity" @keydown.esc="isOpen = false">
              <div class="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50" tabindex="0" @click="isOpen = false" />
            </div>
          </transition>

          <!-- Mobile toggle -->
          <div v-if="!isAuthenticated">
            <div class="lg:tw-hidden">
              <button @click="drawer">
                <svg
                  class="tw-h-8 tw-w-8 tw-fill-current tw-text-black"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </nav>
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
  components: { Notification },
  data () {
    return {
      isOpen: false,
      toggle: false,
      isAdmin: false,
      isTutor: false,
      drawerx: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    $route () {
      this.toggle = false
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
    if (this.$auth.hasScope('superadmin') || this.$auth.hasScope('admin') || this.$auth.hasScope('tutor')) {
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
      this.$router.push(`/#${target}`)
    },
    drawer () {
      this.drawerx = !this.drawerx
      this.isOpen = !this.isOpen
    },
    async logout () {
      await this.$auth.logout()
    },
    onClose () {
      this.toggle = false
    }
  }
}
</script>
<style lang="scss">
.theme--light.v-divider {
    border-color: rgba(0,0,0,0.12) !important;
}
</style>
