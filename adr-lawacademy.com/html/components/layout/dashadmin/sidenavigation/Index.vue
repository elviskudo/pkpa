<template>
  <div>
    <aside
      class="
      tw-scrollbar
      tw-bg-white
      tw-h-screen
      tw-overflow-y-auto
      tw-overflow-x-auto
      lg:tw-flex lg:tw-relative lg:tw-w-80 lg:tw-z-auto
    "
      :class="[
        style[mobilePosition],
        state.open ? 'tw-absolute tw-w-8/12 tw-z-40 sm:tw-w-5/12' : 'tw-hidden',
      ]"
    >
      <div class="tw-pb-32 lg:tw-pb-32">
        <sidenav-header />
        <sidenav-items />
      </div>
    </aside>
  </div>
</template>

<script>
import SidenavItems from './Items.vue'
import SidenavHeader from '~/components/layout/HeaderSideNav.vue'

export default {
  name: 'SideNavigation',
  components: { SidenavItems, SidenavHeader },
  inject: ['state'],
  props: {
    mobilePosition: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      style: {
        left: 'tw-left-0',
        right: 'tw-right-0'
      }
    }
  }
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.scrollbar {
  -ms-overflow-style: none; /* make scrollbar transparent on Firefox, IE and Edge*/
  scrollbar-width: none;
}
</style>
