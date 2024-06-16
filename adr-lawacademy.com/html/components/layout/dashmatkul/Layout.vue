<template>
  <dashboard-provider>
    <div class="tw-h-screen tw-overflow-hidden tw-relative">
      <div class="tw-flex tw-items-start">
        <Overlay />
        <side-navigation mobile-position="right" />
        <div class="tw-bg-body tw-flex tw-flex-col tw-h-screen tw-pl-0 tw-w-full lg:tw-w-99">
          <TopNavigation />
          <main
            class="
              tw-bg-gray-100
              tw-h-screen
              tw-overflow-auto
              tw-pb-36
              tw-pt-6
              tw-px-2
              md:tw-pb-8 md:tw-px-4
              lg:tw-px-6 lg:tw-rounded-sm
            "
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </dashboard-provider>
</template>

<script>
import SideNavigation from './sidenavigation/Index.vue'
import TopNavigation from '~/components/layout/topnavigation/Index.vue'
import DashboardProvider from '~/components/layout/provider/Provider.vue'
import Overlay from '~/components/layout/provider/Overlay.vue'

export default {
  name: 'DashboardLayout',
  components: { DashboardProvider, Overlay, SideNavigation, TopNavigation },
  data () {
    return {
    }
  }
}
</script>
