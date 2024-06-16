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
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <all />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <inprogress />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <done />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <graduated />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
import All from '~/components/user/course/All.vue'
// import Inprogress from '~/components/user/course/Inprogress.vue'
// import Done from '~/components/user/course/Done.vue'
// import Graduated from '~/components/user/course/Graduated.vue'

export default {
  // components: { All, Inprogress, Done, Graduated },
  components: { All },
  data () {
    return {
      tab: null,
      items: [
        'Semua'
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
    // background-color:#ffffff;
  }
</style>
