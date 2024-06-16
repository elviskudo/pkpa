<template>
  <div class="tw-h-screen tw-m-auto">
    <div class="tw-flex tw-flex-row tw-justify-center tw-items-center">
      <v-app>
        <v-card tile max-width="500" width="100%">
          <div class="tw-w-11/12 mx-auto" style="font-family: 'Open Sans';">
            <v-card-title class="p-0">
              <div class="tw-flex tw-flex-col tw-justify-center">
                <v-icon size="64" :color="color">
                  {{ icon }}
                </v-icon>
                <p class="tw-text-center tw-mt-2 tw-font-bold" style="font-family: 'Raleway';">
                  {{ title }}
                </p>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <p class="mb-0">
                {{ subtitle }}
              </p>
            </v-card-subtitle>
            <v-divider class="tw-w-11/12 mx-auto" />
            <v-card-text v-if="statusExam || loggedInUser.pass_exam_pmb">
              <div class="tw-flex">
                <table>
                  <tbody>
                    <tr>
                      <td class="tw-w-40 tw-align-text-top">
                        Gelombang
                      </td>
                      <td class="tw-align-text-top tw-px-3">
                        :
                      </td>
                      <td class="tw-text-xs tw-font-bold" style="color: #1D1D1D;">
                        {{ phaseNo }}
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-align-text-top">
                        Periode Pendaftaran
                      </td>
                      <td class="tw-align-text-top tw-px-3">
                        :
                      </td>
                      <td class="tw-text-xs tw-font-bold" style="color: #1D1D1D;">
                        {{ $moment(registerPeriodStart).format('DD MMMM YYYY') }} - {{ $moment(registerPeriodEnd).format('DD MMMM YYYY') }}
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-align-text-top">
                        Periode Permbelajaran
                      </td>
                      <td class="tw-align-text-top tw-px-3">
                        :
                      </td>
                      <td class="tw-text-xs tw-font-bold" style="color: #1D1D1D;">
                        {{ $moment(learningPeriodStart).format('DD MMMM YYYY') }} - {{ $moment(learningPeriodEnd).format('DD MMMM YYYY') }}
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-align-text-top">
                        Sistem Kuliah
                      </td>
                      <td class="tw-align-text-top tw-px-3">
                        :
                      </td>
                      <td class="tw-text-xs tw-font-bold" style="color: #1D1D1D;">
                        {{ system }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tw-flex tw-justify-center tw-items-center tw-text-center tw-font-bold border tw-h-24 tw-w-full tw-mt-3" style="background-color: #FFFAF2; border: 1px solid #FF9900; border-radius: 6px;">
                <div style="font-family: 'Raleway';">
                  <span class="tw-block">Biaya Perkuliahan</span>
                  <span class="tw-block tw-text-3xl" style="color: #FF9900;">Rp6.000.000</span>
                </div>
              </div>
            </v-card-text>
            <v-card-text v-else v-html="text" />
            <v-card-actions v-if="verified">
              <a class="tw-flex tw-justify-center tw-py-2 tw-w-1/4 tw-mb-10 tw-bg-transparent hover:tw-bg-gray-500 tw-text-black-700 tw-font-semibold hover:tw-text-white tw-px-4 tw-border-2 tw-border-black-33 hover:tw-border-transparent rounded tw-cursor-pointer" @click="$router.back()">
                {{ cancel }}
              </a>
              <v-spacer />
              <nuxt-link :to="to" style="color:white" class="tw-flex tw-justify-center rounded tw-bg-orange-500 tw-py-2 tw-w-1/4 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold">
                {{ oke }}
              </nuxt-link>
            </v-card-actions>
            <v-card-actions v-else class="px-4">
              <nuxt-link :to="to" style="color: #fff; background-color: #FF9900;" class="tw-flex tw-justify-center tw-items-center tw-w-full tw-mx-auto rounded tw-py-2 tw-mb-5 hover:tw-bg-orange-600 tw-font-semibold">
                {{ oke }}
              </nuxt-link>
            </v-card-actions>
          </div>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Xendit } from 'xendit-node'
const xenditClient = new Xendit({
  secretKey: 'xnd_development_BXOckhMBo8NBr8YvR49hhmNlymxVVygZyp9wZU0esUzDhhCbGOnYt1yR2gOJEf',
})

export default {
  data () {
    return {
      title: '',
      subtitle: '',
      text: '',
      icon: '',
      to: '',
      color: '',
      cancel: '',
      oke: '',
      verified: false,
      statusExam: false,
      phaseNo: '',
      registerPeriodStart: '',
      registerPeriodEnd: '',
      learningPeriodStart: '',
      learningPeriodEnd: '',
      system: ''
    }
  },
  async fetch () {
    const phaseUniv = this.$route.query.phaseId
    try {
      const responsePhaseUniv = await this.$axios.$get(`/user-university/${phaseUniv}`)
      this.phaseNo = responsePhaseUniv.data.phase_university.phase_no
      this.registerPeriodStart = responsePhaseUniv.data.phase_university.register_period_start
      this.learningPeriodStart = responsePhaseUniv.data.phase_university.learning_period_start
      this.registerPeriodEnd = responsePhaseUniv.data.phase_university.register_period_end
      this.learningPeriodEnd = responsePhaseUniv.data.phase_university.learning_period_end
      this.system = responsePhaseUniv.data.phase_university.system
    } catch (error) {
      console.log(error)
    }
    // const responseRemidial = await this.$axios.$get('/question/answer/remidial')
    this.statusExam = true // responseRemidial.data.pass_exam_pmb
    if (this.isAuthenticated) {
      if (this.loggedInUser.status) {
        this.icon = ''
        this.title = 'Terdaftar'
        this.subtitle = 'Anda telah terdaftar sebagai Siswa di Pendidikan Khusus Profesi Advocat - Online Atmasasmita, Dodi & Rekan Law Firm'
        this.to = '/dashboard/user/myclass'
        this.color = 'blue'
        this.oke = 'OK'
      } else { // (this.statusExam || this.loggedInUser.pass_exam_pmb) {
        this.icon = ''
        this.title = 'Selamat Bergabung!'
        this.subtitle = 'Sebagai Siswa di Pendidikan Khusus Profesi Advocat - Online Atmasasmita, Dodi & Rekan Law Firm'
        // this.to = `/payment/?phaseId=${phaseUniv}`
        const response = await this.$axios.$post('/payment/cb/invoice', {
          email: 'elviskudo@gmail.com',
          amount: 10000,
          description: 'Coba transfer ke xendit'
        })
        console.log('response api xendit')
        console.log(response)
        console.log('response data api xendit')
        console.log(response.data)
        this.to = response.data.invoice_url
        // this.to = reponse.data.invoice_url
        this.color = 'blue'
        this.oke = 'Bayar Sekarang'
      }
      // else if (!this.statusExam || !this.loggedInUser.pass_exam_pmb) {
      //   this.icon = 'mdi-close-circle-outline'
      //   this.title = 'Maaf :('
      //   this.text = 'Maaf, Anda masih belum lulus ujian masuk PKPA. Ambil kesempatan remedial?'
      //   this.to = '/status-registration'
      //   this.color = 'red'
      //   this.oke = 'Remidi'
      // }
    } else {
      this.icon = 'mdi-alert-circle-outline'
      this.title = 'Belum login?'
      this.text = 'Silakan login terlebih dahulu'
      this.to = '/login'
      this.color = 'red'
      this.oke = 'OK'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
