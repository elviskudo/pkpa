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
        <v-tabs-slider color="#146EB4" />

        <v-tab
          v-for="item in items"
          :key="item"
          style="font-weight: bold; color: #1D1D1D; text-transform:capitalize;"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <matakuliah />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <online-session />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <final-exam />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
import Matakuliah from '~/components/user/peformabelajar/Matakuliah.vue'
import OnlineSession from '~/components/user/peformabelajar/OnlineSession.vue'
// import FinalExam from '~/components/user/peformabelajar/FinalExam.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  // components: { Matakuliah, OnlineSession, FinalExam },
  components: { Matakuliah, OnlineSession },
  data () {
    return {
      tab: null,
      items: [
        // 'Mata Kuliah', 'Sesi Online', 'Ujian Akhir'
        'Mata Kuliah', 'Sesi Online'
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
    height: auto !important;
    width: 100% !important;
    background-color:#ffffff;
  }
</style>
