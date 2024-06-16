<template>
  <div class="tw-h-screen tw-m-auto">
    <div class="tw-flex tw-flex-row tw-justify-center tw-items-center">
      <v-app>
        <v-card tile width="300">
          <v-card-title>
            <div class="tw-flex tw-flex-col tw-justify-center">
              <v-icon size="64" :color="color">
                {{ icon }}
              </v-icon>
              <p class="tw-text-center tw-mt-2">
                {{ title }}
              </p>
            </div>
          </v-card-title>
          <v-card-text class="tw-text-center" v-html="text" />
          <v-card-actions v-if="verified">
            <a class="tw-flex tw-justify-center tw-py-2 tw-w-1/4 tw-mb-10 tw-bg-transparent hover:tw-bg-gray-500 tw-text-black-700 tw-font-semibold hover:tw-text-white tw-px-4 tw-border-2 tw-border-black-33 hover:tw-border-transparent tw-rounded tw-cursor-pointer" @click="$router.back()">
              {{ cancel }}
            </a>
            <v-spacer />
            <nuxt-link :to="to" style="color:white" class="tw-flex tw-justify-center tw-rounded tw-bg-orange-500 tw-py-2 tw-w-1/4 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold">
              {{ oke }}
            </nuxt-link>
          </v-card-actions>
          <v-card-actions v-else>
            <nuxt-link :to="to" style="color:white" class="tw-flex tw-justify-center tw-items-center tw-w-10 tw-rounded tw-bg-orange-500 tw-py-2 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold">
              {{ oke }}
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: '',
      text: '',
      icon: '',
      to: '',
      color: '',
      cancel: '',
      oke: '',
      verified: false
    }
  },
  async fetch () {
    const response = await this.$axios.$get(`/question/answer/score/${this.$auth.$storage.getLocalStorage('remidialExamPMB')}`)

    this.$axios.$put('/user/remidial', { remidial_to: this.$auth.$storage.getLocalStorage('remidialExamPMB'), pass_exam_pmb: response.data.status })
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  mounted () {
    if (this.isAuthenticated) {
      this.icon = 'mdi-alert-circle-outline'
      this.title = 'Oopps..!!'
      this.text = 'Waktu Anda telah habis'
      this.to = '/exam-pmb/result'
      this.color = 'blue'
      this.oke = 'OK'
    } else {
      this.icon = 'mdi-alert-circle-outline'
      this.title = 'Belum login?'
      this.text = 'Silakan login terlebih dahulu'
      this.to = '/login'
      this.color = 'red'
      this.oke = 'OK'
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
