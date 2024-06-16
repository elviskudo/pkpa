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
              <profil />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <history />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <payment />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <certificate />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
import Profil from '~/components/admin/setting_univ/tabs_univercities/IdentitasUniv.vue'
import History from '~/components/admin/setting_univ/tabs_univercities/Tutor.vue'
import Payment from '~/components/admin/setting_univ/tabs_univercities/Phase.vue'
import Certificate from '~/components/admin/setting_univ/tabs_univercities/Certificate.vue'

export default {
  components: { Profil, History, Payment, Certificate },
  data () {
    return {
      tab: null,
      items: [
        'Identitas Universitas', 'Tenaga Pengajar', 'Gelombang', 'Sertifikat PKPA'
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
