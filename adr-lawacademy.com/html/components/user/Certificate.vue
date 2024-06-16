<template>
  <v-app>
    <div class="">
      <!-- <v-card
        class="tw-mx-auto"
        width="1000"
      > -->
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
        <!-- <v-tab-item>
          <v-card flat>
            <v-card-text>
              <certificateMatkul />
            </v-card-text>
          </v-card>
        </v-tab-item> -->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <certificatePKPA />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
// import CertificateMatkul from '~/components/user/certificate/CertificateMatkul.vue'
import CertificatePKPA from '~/components/user/certificate/CertificatePKPA.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { CertificatePKPA },
  data () {
    return {
      tab: null,
      items: [
        'Sertifikat PKPA'
      ]
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #E5E5E5 !important; */
  border: none;
}
</style>

<style scoped lang="scss">
 ::v-deep .v-slide-group__wrapper {
    // background-color: #E5E5E5;
    min-height: fit-content;
  }
</style>
<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 1000px;
    background-color:#ffffff;
  }
</style>
