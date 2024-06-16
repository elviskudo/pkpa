<template>
  <v-app>
    <div class="">
      <v-tabs
        v-model="tab"
        align-with-title
      >
        <v-tabs-slider color="yellow" />
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <logo-univ />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <about-us />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <our-advantage />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <flow-registration />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <curriculum />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
import LogoUniv from '~/components/admin/setting_page/tab_setting_page/LogoUniv.vue'
import AboutUs from '~/components/admin/setting_page/tab_setting_page/AboutUs.vue'
import OurAdvantage from '~/components/admin/setting_page/tab_setting_page/OurAdvantage.vue'
import FlowRegistration from '~/components/admin/setting_page/tab_setting_page/FlowRegistration.vue'
import Curriculum from '~/components/admin/setting_page/tab_setting_page/Curriculum.vue'

export default {
  components: { LogoUniv, AboutUs, OurAdvantage, FlowRegistration, Curriculum },
  data () {
    return {
      tab: null,
      items: [
        'Logo Universitas', 'Tentang Kami', 'Keunggulan PKPA ADR', 'Alur Pendaftaran', 'Kurikulum'
      ]
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #E5E5E5 !important; */
  border: none;
  /* width: 100%; */
}
</style>

<style scoped lang="scss">
//  ::v-deep .v-slide-group__wrapper {
//     background-color: #E5E5E5;
//     width: 100%;
//   }
</style>
