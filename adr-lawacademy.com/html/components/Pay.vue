<template>
  <!-- <v-app> -->
  <div class="tw-w-full tw-bg-white tw-border-gray-200 tw-px-5 tw-py-10 tw-text-gray-800">
    <div class="tw-w-full">
      <div class="-tw-mx-3 md:tw-flex tw-items-start">
        <div class="tw-px-3 md:tw-w-2/6" />
        <div class="tw-px-3 md:tw-w-2/6">
          <div class="tw-shadow-2xl tw-border-gray-400">
            <v-list shaped style="padding-bottom: 0;">
              <div v-if="payment_type === 'ewallet'">
                <div class="tw-border-b-2 tw-border-t-2 tw-border-x-2 tw-flex tw-h-10 tw-items-center tw-justify-center tw-bg-[#F8F8F8]">
                  <p class="tw-text-sm tw-font-sans tw-py-2 tw-font-bold tw-text-[#1D1D1D]">
                    Selesaikan pembayaran dalam
                  </p>
                </div>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-4 tw-border-b-2 tw-border-x-2">
                  <p class="tw-font-sans tw-font-bold tw-text-[#FF9900] tw-text-[20px] tw-leading-[1.7rem]">
                    {{ $moment(expiredate).format('HH:MM:SS') }}
                  </p>
                  <p class="tw-text-sm tw-font-sans tw-text-[#858585]">
                    Batas Akhir Pembayaran
                  </p>
                  <p class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#4A4A4A]">
                    {{ $moment(expiredate).format('dddd, DD MMMM YYYY') }}
                  </p>
                </div>
                <div class="tw-bg-[#F8F8F8] tw-border-b-2 tw-border-x-2">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row tw-py-2 tw-px-4">
                      <div class="tw-flex tw-justify-between tw-w-full md:tw-w-1/2 md:tw-justify md:tw-items-start">
                        <label class="tw-text-sm tw-font-sans tw-text-[#4A4A4A] tw-p-[4px_12px]" style="display: inline-block;">Status Pembayaran</label>
                      </div>
                      <div class="tw-w-full md:tw-w-1/2 tw-text-center lg:tw-text-right">
                        <label class="tw-text-sm tw-font-sans tw-text-[#CF7C00] tw-bg-[#FFF5E6]" style="border: 1px solid #FFC266; border-radius: 4px; padding: 4px 12px; display: inline-block;">
                          Menunggu pembayaran
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-py-2">
                  <p class="tw-text-sm tw-font-sans tw-px-4">
                    E-Wallet
                  </p>
                  <div class="tw-col-span-3 tw-px-4">
                    <div class="tw-flex tw-flex-row">
                      <div class="tw-flex tw-justify-between md:tw-w-4/5 md:tw-justify md:tw-items-start tw-mt-4">
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-py-[13px] sm:tw-py-0 sm:tw-leading-[35px] tw-text-[#1D1D1D]">{{ bank }}</label>
                      </div>
                      <div class="md:tw-w-1/6 tw-mt-0">
                        <img
                          :src="image_url"
                          alt="Logo PSHK"
                          class="tw-ml-auto"
                          style="height: 70px;"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="tw-px-4">
                    <div class="tw-text-[#4A4A4A] tw-bg-[#F5F5F5] tw-rounded-[4px]">
                      <div class="tw-col-span-3 tw-py-2">
                        <div class="tw-flex tw-flex-row tw-px-4 tw-justify-between">
                          <div class="md:tw-w-4/5 md:tw-justify md:tw-items-start">
                            <label class="tw-text-sm tw-font-sans">Tagihan</label>
                          </div>
                          <div class="md:tw-w-4/5 lg:tw-text-right">
                            <label class="tw-text-sm tw-font-sans tw-font-bold"> {{ amount }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tw-px-5">
                    <p class="tw-text-sm tw-font-sans tw-mt-5 tw-mb-3">
                      Cara Pembayaran melalui <b>Aplikasi {{ bank }}</b>
                    </p>
                    <div class="tw-py-4 tw-px-9 tw-bg-[#F5F5F5] tw-text-[#4A4A4A] tw-rounded-[4px]">
                      <ul class="tw-list-disc">
                        <li class="tw-text-sm tw-font-sans tw-py-1">
                          Cek Aplikasi Ovomu
                        </li>
                        <li class="tw-text-sm tw-font-sans tw-py-1">
                          Lakukan pembayaran sesuai dengan tagihan
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tw-flex tw-items-center tw-justify-center tw-p-4 tw-border-b-2 tw-border-x-2">
                  <v-btn
                    style="background: #146EB4; color: #fff;"
                    class="tw-w-full"
                    @click="$router.push('/')"
                  >
                    Kembali ke Home
                  </v-btn>
                </div>
              </div><!--wallet-->
              <div v-if="payment_type === 'va'" class="container-payment">
                <div class="tw-border-b-2 tw-border-t-2 tw-border-x-2 tw-flex tw-bg-gray-c2 tw-h-10 tw-items-center tw-justify-center tw-bg-[#F8F8F8]">
                  <p class="tw-text-sm tw-font-sans tw-py-2 tw-font-bold tw-text-[#1D1D1D]">
                    Selesaikan pembayaran dalam
                  </p>
                </div>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-4 tw-border-b-2 tw-border-x-2">
                  <client-only>
                    <p id="countdownVA" class="tw-font-sans tw-font-bold tw-text-[#FF9900] tw-text-[20px] tw-leading-[1.7rem]">
                      <!-- {{ $moment(expiredate).format('HH:MM:SS') }} -->
                      00:00:00
                    </p>
                  </client-only>
                  <p class="tw-text-sm tw-font-sans tw-text-[#858585]">
                    Batas Akhir Pembayaran
                  </p>
                  <p class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#4A4A4A]">
                    {{ $moment(expiredate).format('dddd, DD MMMM YYYY') }}
                  </p>
                </div>
                <div class="tw-bg-[#F8F8F8] tw-border-b-2 tw-border-x-2">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row tw-py-2 tw-px-4">
                      <div class="tw-flex tw-justify-between tw-w-full md:tw-w-1/2 md:tw-justify md:tw-items-start">
                        <label class="tw-text-sm tw-font-sans tw-text-[#4A4A4A] tw-p-[4px_12px]" style="display: inline-block;">Status Pembayaran</label>
                      </div>
                      <div class="tw-w-full md:tw-w-1/2 tw-text-center lg:tw-text-right">
                        <label class="tw-text-sm tw-font-sans tw-text-[#CF7C00] tw-bg-[#FFF5E6]" style="border: 1px solid #FFC266; border-radius: 4px; padding: 4px 12px; display: inline-block;">
                          Menunggu pembayaran
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-py-2 tw-border-x-2">
                  <p class="tw-text-sm tw-font-sans tw-px-4">
                    Virtual Account
                  </p>
                  <div class="tw-col-span-3 tw-px-4">
                    <div class="tw-flex tw-flex-row">
                      <div class="tw-flex tw-justify-between md:tw-w-4/5 md:tw-justify md:tw-items-start tw-mt-4">
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-py-[13px] sm:tw-py-0 sm:tw-leading-[35px] tw-text-[#1D1D1D]">{{ bank }} Virtual Account</label>
                      </div>
                      <div class="md:tw-w-1/6 tw-mt-0">
                        <img
                          :src="image_url"
                          alt="Logo PSHK"
                          class="tw-ml-auto"
                          style="height: 70px;"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="tw-px-4">
                    <div class="tw-text-[#4A4A4A] tw-bg-[#F5F5F5] tw-rounded-[4px]">
                      <div class="tw-col-span-3 tw-mb-2 tw-pt-2">
                        <div class="tw-flex tw-flex-row tw-px-4 tw-justify-between">
                          <div class="md:tw-w-4/5 md:tw-justify md:tw-items-start">
                            <label class="tw-text-sm tw-font-sans">Tagihan</label>
                          </div>
                          <div class="md:tw-w-4/5 lg:tw-text-right">
                            <label class="tw-text-sm tw-font-sans tw-font-bold"> {{ amount }}</label>
                          </div>
                        </div>
                      </div>
                      <div class="tw-col-span-3 tw-mb-2 tw-pb-2" style="border-top: 1px solid #E9E9E9;">
                        <div class="tw-flex tw-flex-row tw-px-4 tw-justify-between">
                          <div class="md:tw-w-4/5 md:tw-justify md:tw-items-start">
                            <label class="tw-text-sm tw-font-sans">Nomor Virtual Account</label>
                          </div>
                          <div class="md:tw-w-4/5 lg:tw-text-right">
                            <label class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#146EB4]"> {{ accnumber }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="tw-text-sm tw-font-sans tw-px-4 tw-text-[#4A4A4A]">
                    Cara Pembayaran
                  </p>
                  <!-- <v-card-text class="tw-px-4">
                    <span v-html="via_internet_banking" />
                    <p>. Mandiri Internet Banking/ Livin By Mandiri</p>
                  </v-card-text>-->
                  <!-- <v-card>
                    <v-toolbar
                      color="primary"
                    >
                      <v-toolbar-title>Cara Pembayaran</v-toolbar-title> -->
                  <!-- </v-toolbar> -->

                  <div class="tw-px-4">
                    <v-expansion-panels
                      v-model="panel"
                      class="tw-mt-2 tw-shadow-none"
                    >
                      <v-expansion-panel class="tw-rounded tw-mb-2">
                        <v-expansion-panel-header class="tw-font-bold" style="justify-content: space-between;">
                          ATM
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <span style="font-size: 14px;" v-html="via_atm" />
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel class="tw-rounded tw-mb-2">
                        <v-expansion-panel-header class="tw-font-bold" style="justify-content: space-between;">
                          Internet Banking
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <span style="font-size: 14px;" v-html="via_internet_banking" />
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel class="tw-rounded tw-mb-2">
                        <v-expansion-panel-header class="tw-font-bold" style="justify-content: space-between;">
                          Mobile Banking
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <span style="font-size: 14px;" v-html="via_mobile_banking" />
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                  <!-- </v-card> -->
                </div>
                <!-- <div class="tw-flex tw-items-center tw-justify-center tw-p-4 tw-border-b-2 tw-border-x-2">
                  <v-btn style="background: #146EB4; color: #fff;" class="tw-w-full">
                    Bayar
                  </v-btn>
                </div> -->
              </div>
              <div v-if="payment_type === 'cc'">
                <p>Credit Card</p>
              </div>
            </v-list>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </v-app> -->
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: false,
      loading: false,
      selection: 1,
      pay: [],
      bank: '',
      amount: '',
      accnumber: '',
      expiredate: '',
      payment_type: '',
      image_url: '',
      via_atm: '',
      via_internet_banking: '',
      via_mobile_banking: '',
      panel: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  beforeMount () {
    // socket.on('payment', (arg) => {
    //   console.log('haloooo from socket 2', arg)
    // })
    this.$socket.main.on('check-payment', (args) => {
      if (this.isAuthenticated && this.loggedInUser.id === args.user_id) {
        if (args.success) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Pembayaran berhasil'
          })
          this.$router.push('/')
        } else {
          this.$swal('Pembayaran gagal')
        }
      }
      // console.log('haloooo from socket', args)
      // this.notifications.push(ip)
    })
  },
  async mounted () {
    const pays = await this.$axios.$get(`/payment-trx/${this.$route.params.id}`)
    // console.log(pays)
    this.pay = pays.data
    this.bank = pays.data.bank.name
    this.amount = pays.data.amount
    this.accnumber = pays.data.account_number
    this.expiredate = pays.data.expiration_date
    this.payment_type = pays.data.bank.type
    this.image_url = pays.data.bank.image_url
    this.via_atm = pays.data.bank.via_atm
    this.via_internet_banking = pays.data.bank.via_internet_banking
    this.via_mobile_banking = pays.data.bank.via_mobile_banking

    // Set the date we're counting down to
    const countDownDate = new Date(this.$moment(this.expiredate).format('dddd, DD MMMM YYYY')).getTime()

    // Update the count down every 1 second
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // add 0 when number one char
      // const hari = (parseInt(days) < 10) ? '0' + parseInt(days) : parseInt(days)
      const jam = (parseInt(hours) < 10) ? '0' + parseInt(hours) : parseInt(hours)
      const menit = (parseInt(minutes) < 10) ? '0' + parseInt(minutes) : parseInt(minutes)
      const detik = (parseInt(seconds) < 10) ? '0' + parseInt(seconds) : parseInt(seconds)

      // Output the result in an element with id="countdownVA"
      document.getElementById('countdownVA').innerHTML = jam + ':' + menit + ':' + detik

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x)
        document.getElementById('countdownVA').innerHTML = 'EXPIRED'
      }
    }, 1000)
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
