<template>
  <!-- <v-app> -->
  <div class="tw-w-full tw-bg-white tw-border-gray-200 tw-px-3 tw-py-10 tw-text-gray-800">
    <div class="tw-w-full">
      <div class="-tw-mx-3 md:tw-flex tw-items-start">
        <div class="tw-px-3 xl:tw-w-2/6 tw-mx-auto">
          <div class="tw-shadow-2xl tw-border-gray-400">
            <v-list shaped style="padding-bottom: 0;">
              <div v-if="methodPay.type == 'ewallet'">
                <div class="tw-border-b-2 tw-border-t-2 tw-border-x-2 md:tw-flex tw-justify-between tw-px-3 tw-pt-2 tw-bg-[#F8F8F8]">
                  <p
                    class="tw-text-sm tw-font-sans tw-font-bold tw-py-2"
                  >
                    <span>
                      <a
                        class="tw-cursor-pointer"
                        @click="$router.go(-1)"
                      >
                        <v-icon class="tw-pb-1">
                          mdi-chevron-left
                        </v-icon>
                      </a>
                      {{ methodPay.name }}
                    </span>
                  </p>
                  <!-- <p class="tw-text-[#1D1D1D] tw-text-sm tw-font-sans tw-font-bold tw-p-2 tw-text-right">
                    Order ID: XXXXXXXXXXXX
                  </p> -->
                </div>
                <!-- <v-divider class="tw-mt-2" /> -->
                <div class="tw-text-lg tw-py-3 tw-px-4 tw-border-b-2 tw-border-x-2">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row">
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-w-2/6 md:tw-justify md:tw-items-start"
                      >
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#858585]">Amount</label>
                      </div>
                      <div class="tw-w-full md:tw-w-4/6 tw-text-right">
                        <label class="tw-right-9 tw-font-sans tw-text-3xl tw-font-bold tw-text-[#1D1D1D]">Rp.6.000.000</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-border-x-2 tw-pb-20">
                  <div class="tw-flex tw-flex-col tw-px-4">
                    <div
                      class="tw-flex tw-items-center tw-justify-center tw-py-2"
                    >
                      <p class="">
                        Lakukan pembayaran dengan ovo ?
                      </p>
                    </div>
                    <div class="tw-flex tw-items-center tw-justify-center">
                      <img
                        :src="methodPay.image_url"
                        width="100"
                        height="100"
                        alt="Logo PSHK"
                      >
                    </div>
                  </div>
                </div>
                <div class="tw-flex tw-items-center tw-justify-center tw-p-4 tw-border-b-2 tw-border-x-2">
                  <v-btn
                    style="background: #146EB4; color: #fff;"
                    class="tw-w-full"
                    @click="fsubmit_ewallet()"
                  >
                    Bayar
                  </v-btn>
                </div>
              </div> <!--ewallet-->
              <div v-if="methodPay.type == 'cc'">
                <div class="tw-border-b-2 tw-border-t-2 tw-border-x-2 md:tw-flex tw-justify-between tw-px-3 tw-pt-2 tw-bg-[#F8F8F8]">
                  <p
                    class="tw-text-sm tw-font-sans tw-font-bold tw-py-2"
                  >
                    <span>
                      <a
                        class="tw-cursor-pointer"
                        @click="$router.go(-1)"
                      >
                        <v-icon class="tw-pb-1">
                          mdi-chevron-left
                        </v-icon>
                      </a>
                      {{ methodPay.name }}
                    </span>
                  </p>
                  <!-- <p class="tw-text-[#1D1D1D] tw-text-sm tw-font-sans tw-font-bold tw-p-2 tw-text-right">
                    Order ID: XXXXXXXXXXXX
                  </p> -->
                </div>
                <div class="tw-text-lg tw-py-3 tw-px-4 tw-border-b-2 tw-border-x-2">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row">
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-w-2/6 md:tw-justify md:tw-items-start"
                      >
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#858585]">Amount</label>
                      </div>
                      <div class="tw-w-full md:tw-w-4/6 tw-text-right">
                        <label class="tw-right-9 tw-font-sans tw-text-3xl tw-font-bold tw-text-[#1D1D1D]">Rp.6.000.000</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-border-x-2 tw-pb-20">
                  <v-form
                    ref="form"
                  >
                    <div class="tw-flex tw-flex-col tw-py-4 tw-px-6">
                      <label class="tw-text-sm">Nomor Kartu</label>
                      <input
                        v-model="cardNo"
                        type="number"
                        placeholder="Contoh: 123124324"
                        class="tw-form-input tw-rounded-[3px]"
                        value=""
                      >
                      <span class="tw-text-red-700 tw-text-sm">{{ errCardNo }}</span>
                    </div>
                    <div class="tw-flex tw-flex-row">
                      <div class="tw-flex tw-flex-col tw-mb-4 tw-px-6">
                        <label class="tw-text-sm">Masa Berlaku</label>
                        <div class="tw-flex tw-flex-row">
                          <div class="tw-flex tw-flex-col">
                            <input
                              v-model="expiryMonth"
                              type="number"
                              placeholder="mm"
                              class="tw-form-input tw-w-[60px] tw-text-center tw-rounded-[3px]"
                              value=""
                            >
                            <span class="tw-text-red-700 tw-text-sm">{{ errExpiryMonth }}</span>
                          </div>
                          &nbsp;
                          <div class="tw-flex tw-flex-col">
                            <input
                              v-model="expiryYear"
                              type="number"
                              placeholder="yy"
                              class="tw-form-input tw-w-[60px] tw-text-center tw-rounded-[3px]"
                              value=""
                            >
                            <span class="tw-text-red-700 tw-text-sm">{{ errExpiryYear }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="tw-flex tw-flex-col tw-mb-4 tw-px-6 tw-ml-auto">
                        <label class="tw-text-sm">CVV</label>
                        <div class="tw-relative tw-w-full">
                          <div class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2">
                            <input class="tw-hidden" type="checkbox">
                            <label v-if="visibility =='password'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchhide"><i class="mdi mdi-eye-off" aria-hidden="true" /></label>
                            <label v-if="visibility =='text'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchshow"><i class="mdi mdi-eye" aria-hidden="true" /></label>
                          </div>
                          <input
                            v-model="cvv"
                            class="tw-form-input tw-w-full tw-rounded-[3px]"
                            :type="visibility"
                            placeholder="123"
                            required
                            autocomplete="off"
                            value=""
                          >
                        </div>
                        <span class="tw-text-red-700 tw-text-sm">{{ errCvv }}</span>
                      </div>
                    </div>
                  </v-form>
                </div>
                <div class="tw-flex tw-items-center tw-justify-center tw-p-4 tw-border-b-2 tw-border-x-2">
                  <v-btn
                    style="background: #146EB4; color: #fff;"
                    class="tw-w-full"
                    @click="fsubmitCC()"
                  >
                    Bayar
                  </v-btn>
                </div>
              </div> <!--cc-->
              <div v-if="methodPay.type == 'va'">
                <div class="tw-border-b-2 tw-border-t-2 tw-border-x-2 md:tw-flex tw-justify-between tw-px-3 tw-pt-2 tw-bg-[#F8F8F8]">
                  <p
                    class="tw-text-sm tw-font-sans tw-font-bold tw-py-2"
                  >
                    <span>
                      <a
                        class="tw-cursor-pointer"
                        @click="$router.go(-1)"
                      >
                        <v-icon class="tw-pb-1">
                          mdi-chevron-left
                        </v-icon>
                      </a>
                      {{ methodPay.name }}
                    </span>
                  </p>
                  <!-- <p class="tw-text-[#1D1D1D] tw-text-sm tw-font-sans tw-font-bold tw-p-2 tw-text-right">
                    Order ID: XXXXXXXXXXXX
                  </p> -->
                </div>
                <div class="tw-text-lg tw-py-3 tw-px-4 tw-border-b-2 tw-border-x-2">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row">
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-w-2/6 md:tw-justify md:tw-items-start"
                      >
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#858585]">Amount</label>
                      </div>
                      <div class="tw-w-full md:tw-w-4/6 tw-text-right">
                        <label class="tw-right-9 tw-font-sans tw-text-3xl tw-font-bold tw-text-[#1D1D1D]">Rp.6.000.000</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-border-x-2 tw-pb-20">
                  <div class="tw-col-span-3">
                    <div class="tw-flex tw-flex-row tw-px-4">
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-justify md:tw-items-start"
                      >
                        <label class="tw-text-sm tw-font-sans tw-font-bold tw-py-[25px] sm:tw-py-0 sm:tw-leading-[70px]">{{ methodPay.name }} Virtual Account</label>
                      </div>
                      <div class="tw-w-full">
                        <img
                          :src="methodPay.image_url"
                          alt="Logo PSHK"
                          class="tw-ml-auto"
                          style="height: 70px;"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="tw-px-5">
                    <div class="tw-py-4 tw-px-9 tw-bg-[#F5F5F5] tw-text-[#4A4A4A] tw-rounded-[4px]">
                      <ul class="tw-list-disc">
                        <li class="tw-text-sm tw-font-sans tw-py-1">
                          Transaksi ini akan otomatis menggantikan tagihan {{ methodPay.name }} Virtual Account yang belum dibayar.
                        </li>
                        <li class="tw-text-sm tw-font-sans tw-py-1">
                          Dapatkan <b>Kode pembayaran</b> setelah klik “Bayar”
                        </li>
                        <li class="tw-text-sm tw-font-sans tw-py-1">
                          <b>Tidak disarankan</b> bayar melalui bank lain agar transaksi dapat diproses tanpa kendala
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tw-flex tw-items-center tw-justify-center tw-p-4 tw-border-b-2 tw-border-x-2">
                  <v-btn
                    style="background: #146EB4; color: #fff;"
                    class="tw-w-full"
                    @click="fsubmit_va()"
                  >
                    Bayar
                  </v-btn>
                </div>
              </div> <!--va-->
            </v-list>
          </div>
        </div>
      </div>
    </div>
    <div v-show="overlay" class="overlay" />
    <div v-show="threeDSContainer" id="three-ds-container">
      <iframe id="sample-inline-frame" height="450" width="550" name="sample-inline-frame" />
    </div>
  </div>
  <!-- </v-app> -->
</template>
<script>
import { Xendit } from 'xendit-node'
const xenditClient = new Xendit({
  secretKey: 'eG5kX2RldmVsb3BtZW50X1A0cURmT3NzME9DcGw4UnRLclJPSGphUVlOQ2s5ZE41bFNmaytSMWw5V2JlK3JTaUN3WjNqdz09Og==',
})

export default {
  data () {
    return {
      overlay: false,
      threeDSContainer: false,
      methodPay: {},
      cardNo: '',
      errCardNo: '',
      expiryMonth: '',
      errExpiryMonth: '',
      expiryYear: '',
      errExpiryYear: '',
      cvv: '',
      errCvv: '',
      fullname: '',
      xenditToken: '',
      showVA: false,
      showDirectDebit: false,
      selectedItem: 0,
      debit: true,
      wallet: false,
      virtual: false,
      visibility: 'password'
    }
  },
  async fetch () {
    const virtulaAccounties = await this.$axios.$get(`/bank/${this.$route.query.bankId}`)
    this.methodPay = virtulaAccounties.data
  },
  methods: {
    async fsubmitCC () {
      const response = await this.$axios.$post('https://api.xendit.co/v2/payment_methods', {
        "type": "CARD",
        "card": {
          "currency": "IDR",
          "channel_properties": {
            "success_return_url": "https://redirect.me/goodstuff",
            "failure_return_url": "https://redirect.me/badstuff"
          },
          "card_information": {
            "card_number": "4000000000001091",
            "expiry_month": "12",
            "expiry_year": "2027",
            "cvv": "123",
            "cardholder_name": "John Doe"
          }
        },
        "reusability": "ONE_TIME_USE",
        "description": "This is a description.",
        "metadata": {
          "foo": "bar"
        }
      })

      console.log('response xendit')
      console.log(response)
      // let countError = 0
      // // eslint-disable-next-line no-undef
      // console.log('config', this.$config)
      // Xendit.setPublishableKey(this.$config.xenditPublicKey)
      // console.log('xendit public key', this.$config.xenditPublicKey)
      // console.log('card no', this.cardNo)
      // console.log('expiry month', this.expiryMonth)
      // console.log('expiry year', this.expiryYear)
      // console.log('cvv', this.cvv)
      // // eslint-disable-next-line no-undef
      // const statusCardNo = Xendit.card.validateCardNumber(this.cardNo)
      // console.log('status card no', statusCardNo)
      // // eslint-disable-next-line no-undef
      // const statusExpiryMonth = Xendit.card.validateExpiry(this.expiryMonth, '2022')
      // console.log('status expiry month', statusExpiryMonth)
      // // eslint-disable-next-line no-undef
      // const statusExpiryYear = Xendit.card.validateExpiry('01', this.expiryYear)
      // console.log('status expiry year', statusExpiryYear)
      // // eslint-disable-next-line no-undef
      // const statusCvv = Xendit.card.validateCvn(this.cvv)
      // console.log('status cvv', statusCvv)

      // if (!statusCardNo) {
      //   countError = countError + 1
      //   this.errCardNo = 'Nomor kartu kredit tidak valid'
      // }

      // if (!statusExpiryMonth) {
      //   countError = countError + 1
      //   this.errExpiryMonth = 'Bulan tidak valid'
      // }

      // if (!statusExpiryYear) {
      //   countError = countError + 1
      //   this.errExpiryYear = 'Tahun tidak valid'
      // }

      // if (!statusCvv) {
      //   countError = countError + 1
      //   this.errCvv = 'CVV tidak valid'
      // }

      // if (countError === 0) {
      //   // eslint-disable-next-line no-undef
      //   console.log('xendit amount', this.$config.xenditAmount)
      //   const xendit_body = {
      //     amount: parseInt(this.$config.xenditAmount, 10),
      //     card_data: {
      //       account_number: this.cardNo,
      //       exp_month: this.expiryMonth,
      //       exp_year: this.expiryYear
      //     },
      //     //card_number: this.cardNo,
      //     //card_exp_month: this.expiryMonth,
      //     //card_exp_year: this.expiryYear,
      //     card_cvn: this.cvv,
      //     is_multiple_use: false,
      //     should_authenticate: true
      //   }
      //   console.log('body xendit', xendit_body)

      //   Xendit.card.createToken({
      //     amount: parseInt(this.$config.xenditAmount, 10),
      //     card_data: {
	    //       account_number: this.cardNo,
      //       exp_month: this.expiryMonth,
      //       exp_year: this.expiryYear
	    //     },
      //     card_cvn: this.cvv,
      //     is_multiple_use: false,
      //     should_authenticate: true
      //   }, this.xenditResponseHandler)
      // }
    },
    async xenditResponseHandler (err, creditCardToken) {
      this.errCardNo = ''
      this.errExpiryMonth = ''
      this.errExpiryYear = ''
      this.errCvv = ''
      console.log('card token: ', creditCardToken)
      // creditCardToken.status = 'IN_REVIEW'
      if (err) {
        this.overlay = false
        this.threeDSContainer = false
	console.log('card token ERROR')
        // document.getElementById('three-ds-container').style.visibility = 'hidden'
        this.$swal(err.message)
        return
      }

      if (creditCardToken.status === 'VERIFIED') {
        this.overlay = false
        this.threeDSContainer = false
	console.log('card token VERIFIED')
        try {
          creditCardToken.phase_university_id = this.$route.query.phaseId // this.$auth.$storage.getLocalStorage('c_phase_univ')
          creditCardToken.card_cvn = this.cvv
	  console.log('phase id', this.$route.query.phaseId)
	  console.log('phase_university_id', creditCardToken.phase_university_id)
          const c = await this.$axios.$post('payment-user/card', creditCardToken)
          if (c.error) {
            this.$swal('Upss... error!!')
          } else {
            this.$swal({
              title: 'Sukses melakukan pembayaran',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push('/')
              }
            })
          }
        } catch (error) {
          this.$swal('Upss... error!!')
          console.log(error)
        }
      } else if (creditCardToken.status === 'IN_REVIEW') {
        window.open(creditCardToken.payer_authentication_url, 'sample-inline-frame')
        this.overlay = true
        this.threeDSContainer = true
	console.log('card token IN REVIEW')
	this.$swal('in review')
        // $('.overlay').show()
        // $('#three-ds-container').show()
        // $('#three-ds-container').show()
      } else if (creditCardToken.status === 'FAILED') {
        this.overlay = false
        this.threeDSContainer = false
	console.log('card token FAILED')
        this.$swal(creditCardToken.failure_reason)
      }
    },
    async fsubmit_va () {
      try {
        const params = { bank_id: this.$route.query.bankId, phase_university_id: this.$route.query.phaseId }
        console.log(params)
        const result = await this.$axios.$post('/payment-user/va', params)
        this.$router.push('/pay/' + result.data.id)
      } catch (e) {
        // console.log(e)
      }
    },
    async fsubmit_ewallet () {
      try {
        const params = { bank_id: this.$route.query.bankId, phase_university_id: this.$route.query.phaseId }
        const result = await this.$axios.$post('/payment-user/ewallet', params)
        // console.log(result.data)
        this.e_wallet = parseInt(this.$route.query.bankId)
        console.log(this.e_wallet)
        if (this.e_wallet === 9) {
          if (!result.error) {
            // this.$swal({
            //   icon: 'success',
            //   title: 'Sedikit lagi!',
            //   imageUrl: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/bank/1642675137985_image_url',
            //   imageWidth: 200,
            //   imageHeight: 200,
            //   text: 'Cek aplikasi OVO kamu dan segera lakukan pembayaran'
            // })
            // this.$router.push('/')
            this.$router.push('/pay/' + result.data.id)
          } else {
            this.$swal({
              icon: 'error',
              title: 'Oopss...!',
              text: 'Sepertinya ada kendala, silakan ulangi lagi'
            })
          }
        } else if (!result.error) {
          window.location = result.data.actions.desktop_web_checkout_url
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oopss...!',
            text: 'Sepertinya ada kendala, silakan ulangi lagi'
          })
        }

        if (result.code === 500) {
          this.$swal({
            icon: 'error',
            title: 'Oopss...!',
            text: result.message
          })
        }
      } catch (e) {
        console.log(e)
        this.$swal({
          icon: 'error',
          title: 'Oopss...!',
          text: e.message
        })
      }
    },
    switchhide () {
      this.visibility = 'text'
    },
    switchshow () {
      this.visibility = 'password'
    }
  }
}
</script>
<style scoped>
  input[type="radio"]:checked + label{
    color: #3490DC;
  }
  .menu:focus {
    background-color: yellow;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
  }

  #three-ds-container {
    width: 550px;
    height: 450px;
    line-height: 200px;
    position: fixed;
    top: 25%;
    left: 40%;
    margin-top: -100px;
    margin-left: -150px;
    background-color: #ffffff;
    tw-border-radius: 5px;
    text-align: center;
    z-index: 11; /* 1px higher than the overlay layer */
  }
</style>

<style lang="scss">
  body{
  margin:0;
  padding: 0;
  font-family: sans-serif;
  }

  input[type="radio"] + label span {
      transition: background .2s,
        transform .2s;
  }

  input[type="radio"] + label span:hover,
  input[type="radio"] + label:hover span{
    transform: scale(1.2);
  }

  input[type="radio"]:checked + label span {
    background-color: #FF9900; //tw-bg-blue
    box-shadow: 0px 0px 0px 2px white inset;
  }

  input[type="radio"]:checked + label{
    color: #FF9900; //tw-text-blue
  }

</style>
