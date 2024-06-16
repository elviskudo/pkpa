<template>
  <div class="tw-h-screen">
    <div class="tw-flex tw-flex-row tw-justify-center tw-items-center cei-center-up-element cei-small-shadow">
      <v-app>
        <v-card tile width="300">
          <v-card-title>
            <div class="tw-flex tw-flex-col tw-justify-center tw-mx-auto cei-container-header-alert">
              <v-icon size="64" :color="color">
                {{ icon }}
              </v-icon>
              <p class="tw-text-center tw-mt-1 mb-0 cei-title-alert">
                {{ title }}
              </p>
            </div>
          </v-card-title>
          <v-card-text class="tw-text-center" v-html="text" />
          <div v-if="verified">
            <a class="tw-flex tw-justify-center tw-py-2 tw-w-1/4 tw-mb-10 tw-bg-transparent hover:tw-bg-gray-500 tw-text-black-700 tw-font-semibold hover:tw-text-white tw-px-4 tw-border-2 tw-border-black-33 hover:tw-border-transparent tw-rounded tw-cursor-pointer" @click="$router.back()">
              {{ cancel }}
            </a>
            <v-spacer />
            <nuxt-link :to="to" style="color:white" class="tw-flex tw-justify-center tw-rounded tw-bg-orange-500 tw-py-2 tw-w-1/4 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold">
              {{ oke }}
            </nuxt-link>
          </div>
          <div v-else>
            <!-- <nuxt-link :to="to" style="color:white" class="tw-flex tw-justify-center tw-items-center tw-w-10 tw-rounded tw-bg-orange-500 tw-py-2 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold">
              {{ oke }}
            </nuxt-link> -->
            <a style="color:white" class="tw-flex tw-justify-center tw-items-center tw-w-100 tw-rounded tw-bg-orange-500 tw-py-2 hover:tw-bg-orange-600 tw-font-semibold cei-button-alert" @click="$router.go(-1)">{{ oke }}</a>
          </div>
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
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    let response
    try {
      response = await this.$axios.$get('/user/verify-file')
    } catch (err) {
      // console.log(err)
    }
    if (this.isAuthenticated) {
      this.icon = 'mdi-alert-circle-outline'
      if (response.data.status_file === 'verified') {
        const id = this.$route.query.phaseId // this.$auth.$storage.getLocalStorage('c_phase_univ')
        const userUniv = await this.$axios.$get(`/user-university/${id}`)

        // console.log(userUniv)
        if (userUniv.data == null) {
          await this.$axios.$post('/user-university', { phase_university_id: id, status: 'pending' })
        }
        this.$router.push(`/welcome/?phaseId=${id}`)
        // this.verified = true
        // this.$auth.$storage.setLocalStorage('countExamPMB', 1)
        // this.title = 'Mulai Ujian?'
        // this.text = 'Ujian ini hanya bisa diakses 1x24 jam <br/> setelah proses pembayaran terverifikasi'
        // this.to = `/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`
        // this.color = 'blue'
        // this.cancel = 'Batal'
        // this.oke = 'Mulai'
        // this.setTimer()
      } else {
        this.title = 'Mohon tunggu'
        this.text = 'Berkas anda sedang diverifikasi'
        // this.to = history.back()
        this.color = 'blue'
        this.oke = 'OK'
      }
    } else {
      this.icon = 'mdi-alert-circle-outline'
      this.title = 'Belum login?'
      this.text = 'Silakan login terlebih dahulu'
      this.to = '/login'
      this.color = 'red'
      this.oke = 'OK'
    }
  },
  // mounted () {
  //   if (this.status === true) {
  //     this.$router.push('/exam-pmb/result')
  //   }
  // },
  methods: {
    setTimer () {
      localStorage.removeItem('countdown-exam-pmb')
      const dt = new Date()
      // dt.setHours(dt.getHours() + 2)
      dt.setSeconds(dt.getSeconds() + 60)

      // Update the count down every 1 second
      setInterval(function () {
      // Get today's date and time
        const now = new Date().getTime()

        // Find the distance between now and the count down date
        const distance = dt - now
        localStorage.setItem('countdown-exam-pmb', distance)
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
