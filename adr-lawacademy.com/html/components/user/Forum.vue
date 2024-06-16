<template>
  <v-app>
    <div class="tw-rounded-lg">
      <!-- <div class="tw-rounded-lg tw-shadow-xl tw-mx-auto"> -->
      <div
        class="tw-rounded-lg tw-py-2"
      >
        <v-tabs
          v-model="tab"
          align-with-title
          class="tw-border-bottom"
        >
          <v-tabs-slider color="#FF9900" />

          <v-tab
            v-for="item in items"
            :key="item"
            class="tw-text-black"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="pa-0">
                <new />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <followed />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <!-- </div> -->
    </div>
  </v-app>
</template>

<script>
// import Popular from '~/components/user/forum/Popular.vue'
import New from '~/components/user/forum/New.vue'
import Followed from '~/components/user/forum/Followed.vue'
// import Graduated from '~/components/user/course/Graduated.vue'

export default {
  components: { New, Followed },
  data () {
    return {
      tab: null,
      items: [
        'Baru', 'Aktivitas ku'
      ]
    }
  }
}
</script>
<style scoped>
.v-tab.v-tab {
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  color: #4A4A4A;
  text-transform: none !important;
  letter-spacing: 0px;
}

.tw-border-bottom{
  border-bottom: 1px solid #D1D5DB;
}
</style>

<style scoped lang="scss">
//  ::v-deep .v-slide-group__wrapper {
//     background-color: #E5E5E5;
//     width: 100%;
//   }
</style>
