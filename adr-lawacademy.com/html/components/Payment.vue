/* eslint-disable no-unused-vars */
<template>
  <div class="tw-w-full tw-bg-white tw-border-gray-200 tw-px-5 tw-py-10 tw-text-gray-800">
    <div class="tw-w-full">
      <div class="-tw-mx-3 md:tw-flex tw-items-start">
        <div class="tw-px-3 xl:tw-w-2/6 tw-mx-auto">
          <div class="tw-shadow-2xl tw-border-gray-400">
            <v-list shaped style="padding-bottom: 0;">
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
                    Metode Pembayaran
                  </span>
                </p>
                <!-- <p class="tw-text-sm tw-font-sans tw-font-bold tw-p-2 tw-text-right tw-text-[#1D1D1D]">
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
              <div class="tw-text-lg tw-border-b-2 tw-border-x-2 tw-p-3 tw-bg-[#F8F8F8]">
                <p
                  class="tw-text-sm tw-font-sans tw-font-bold tw-text-[#858585]"
                >
                  Pilih metode pembayaran
                </p>
              </div>
              <div class="tw-h-96 tw-overflow-auto">
                <div class="tw-text-lg tw-border-x-2 tw-border-b-2">
                  <p
                    class="tw-text-sm tw-font-sans tw-py-2 tw-px-4 tw-font-bold tw-text-[#4A4A4A]"
                  >
                    E-wallet
                  </p>
                  <div v-for="wlt in ewallet" :key="wlt.id" class="">
                    <div
                      class="tw-flex tw-flex-row tw-px-4 tw-cursor-pointer"
                      @click="fbtnovo(wlt.id)"
                    >
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-w-1/6 md:tw-justify md:tw-items-start tw-py-2 tw-mt-7"
                      >
                        <label :for="'radio'+wlt.id" class="tw-text-sm">{{ wlt.name }}</label>
                      </div>
                      <div class="md:tw-w-3/6">
                        <!-- <input type="text" :value="wlt.id"> -->
                        <img
                          :src="wlt.image_url"
                          width="100"
                          height="100"
                          alt="Logo PSHK"
                        >
                      </div>
                      <div class="md:tw-w-2/6 tw-align-middle tw-text-right tw-mt-7">
                        <v-icon>mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-text-lg tw-border-x-2 tw-border-b-2">
                  <p
                    class="tw-text-sm tw-font-sans tw-py-2 tw-px-4 tw-font-bold tw-text-[#4A4A4A]"
                  >
                    Credit Card
                  </p>
                  <!-- <div v-for="crd in creditCards" :key="crd.id" class=""> -->
                  <div
                    class="tw-flex tw-flex-row tw-px-4 tw-cursor-pointer"
                    @click="fbtcc(16)"
                  >
                    <div
                      class="tw-flex tw-justify-between tw-w-full md:tw-w-1/6 md:tw-justify md:tw-items-start tw-py-4 tw-mt-7"
                    >
                      <label class="tw-text-sm">Credit Card</label>
                    </div>
                    <div class="md:tw-w-3/6 tw-py-4">
                      <img
                        src="~/assets/images/icon/credit-card.png"
                        width="100"
                        height="100"
                        alt="Logo PSHK"
                      >
                    </div>
                    <div class="md:tw-w-2/6 tw-align-middle tw-text-right tw-mt-7">
                      <v-icon>mdi-chevron-right</v-icon>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
                <div class="tw-text-lg tw-border-x-2 tw-border-b-2 tw-pl-4">
                  <p
                    class="tw-text-sm tw-font-sans tw-py-2 tw-font-bold tw-text-[#4A4A4A]"
                  >
                    Virtual Account
                  </p>
                  <div v-for="bank in virtulaAccount" :key="bank.id" class="">
                    <div
                      class="tw-flex tw-flex-row tw-border-b-2 tw-cursor-pointer"
                      @click="fbtnovo(bank.id)"
                    >
                      <div
                        class="tw-flex tw-justify-between tw-w-full md:tw-w-1/6 md:tw-justify md:tw-items-start tw-py-4 tw-mt-7"
                      >
                        <label :for="'radio'+bank.id" class="tw-text-sm">{{ bank.name }}</label>
                      </div>
                      <div class="md:tw-w-3/6">
                        <img
                          :src="bank.image_url"
                          width="100"
                          height="100"
                          alt="Logo PSHK"
                        >
                      </div>
                      <div class="md:tw-w-2/6 tw-align-middle tw-text-right tw-mt-7 tw-pr-4">
                        <v-icon>mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-list>
          </div>
        </div>
      </div>
    </div>
    <div v-show="threeDSContainer" id="three-ds-container">
      <iframe id="sample-inline-frame" height="450" width="550" name="sample-inline-frame" />
    </div>
  </div>
</template>

<script>
import { Xendit } from 'xendit-node'
const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_PUBLIC_KEY,
})

export default {
  data () {
    return {
      overlay: false,
      threeDSContainer: false,
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
      virtulaAccount: {},
      ewallet: {},
      creditCards: {},
      e_wallet: '',
      bank_id: '',
      wallet_id: '',
      items: [
        { text: 'Kartu Kredit', icon: 'mdi-clock' },
        { text: 'Virtual Account', icon: 'mdi-account' },
        { text: 'E-Wallet', icon: 'mdi-flag' }
      ]
    }
  },
  async fetch () {
    const virtulaAccounties = await this.$axios.$get('/bank')
    // console.log(virtulaAccounties)
    const newvirtualaccount = virtulaAccounties.data.data.filter(x => x.type === 'va').map(obj => ({ id: obj.id, type: obj.type, name: obj.name, bank_code: obj.bank_code, va_code: obj.va_code, image_url: obj.image_url }))
    this.virtulaAccount = newvirtualaccount

    const ewalleties = await this.$axios.$get('/bank')
    // console.log(virtulaAccounties)
    const newewalleties = ewalleties.data.data.filter(x => x.type === 'ewallet').map(obj => ({ id: obj.id, type: obj.type, name: obj.name, bank_code: obj.bank_code, va_code: obj.va_code, image_url: obj.image_url }))
    this.ewallet = newewalleties

    const creditcard = await this.$axios.$get('/bank')
    const credits = creditcard.data.data.filter(x => x.type === 'cc').map(obj => ({ id: obj.id, type: obj.type, name: obj.name, bank_code: obj.bank_code, va_code: obj.va_code, image_url: obj.image_url }))
    this.creditCards = credits
  },
  mounted () {
    // const script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = 'https://js.xendit.co/v1/xendit.min.js'
    // document.body.appendChild(script)
  },
  methods: {
    fbtnovo (id) {
      this.$router.push(`/confirm-pay/?phaseId=${this.$route.query.phaseId}&bankId=${id}`)
    },
    fbtvirtual (id) {
      this.$router.push(`/confirm-pay/?phaseId=${this.$route.query.phaseId}&bankId=${id}`)
    },
    fbtcc (id) {
      this.$router.push(`/confirm-pay/?phaseId=${this.$route.query.phaseId}&bankId=${id}`)
    },
    fdirectdebit () {
      this.debit = true
      this.virtual = false
      this.wallet = false
    },
    fvirtualaccount () {
      this.debit = false
      this.virtual = true
      this.wallet = false
    },
    fwallet () {
      this.debit = false
      this.virtual = false
      this.wallet = true
    },
    async fsubmitCC () {
      // eslint-disable-next-line no-undef
      // Xendit.setPublishableKey(this.$config.xenditPublicKey)
      // // eslint-disable-next-line no-undef
      // const statusCardNo = Xendit.card.validateCardNumber(this.cardNo)
      // // eslint-disable-next-line no-undef
      // const statusExpiryMonth = Xendit.card.validateExpiry(this.expiryMonth, '2022')
      // // eslint-disable-next-line no-undef
      // const statusExpiryYear = Xendit.card.validateExpiry('01', this.expiryYear)
      // // eslint-disable-next-line no-undef
      // const statusCvv = Xendit.card.validateCvn(this.cvv)
      // let countError = 0
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
        // eslint-disable-next-line no-undef
        // Xendit.card.createToken({
        //   amount: parseInt(this.$config.xenditAmount, 10),
        //   card_number: this.cardNo,
        //   card_exp_month: this.expiryMonth,
        //   card_exp_year: this.expiryYear,
        //   card_cvn: this.cvv,
        //   is_multiple_use: false,
        //   should_authenticate: true
        // }, this.xenditResponseHandler)

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
      // }
    },
    async xenditResponseHandler (err, creditCardToken) {
      this.errCardNo = ''
      this.errExpiryMonth = ''
      this.errExpiryYear = ''
      this.errCvv = ''
      // creditCardToken.status = 'IN_REVIEW'
      if (err) {
        this.overlay = false
        this.threeDSContainer = false
        // document.getElementById('three-ds-container').style.visibility = 'hidden'
        this.$swal(err.message)
        return
      }

      if (creditCardToken.status === 'VERIFIED') {
        this.overlay = false
        this.threeDSContainer = false
        try {
          creditCardToken.phase_university_id = this.$route.query.phaseId // this.$auth.$storage.getLocalStorage('c_phase_univ')
          creditCardToken.card_cvn = this.cvv
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
          // console.log(error)
        }
      } else if (creditCardToken.status === 'IN_REVIEW') {
        window.open(creditCardToken.payer_authentication_url, 'sample-inline-frame')
        this.overlay = true
        this.threeDSContainer = true
        // $('.overlay').show()
        // $('#three-ds-container').show()
        // $('#three-ds-container').show()
      } else if (creditCardToken.status === 'FAILED') {
        this.overlay = false
        this.threeDSContainer = false
        this.$swal(creditCardToken.failure_reason)
      }
    },
    async fsubmit_va () {
      try {
        const params = { bank_id: this.bank_id, phase_university_id: this.$route.query.phaseId }
        // console.log(params)
        const result = await this.$axios.$post('/payment-user/va', params)
        this.$router.push('/pay/' + result.data.id)
      } catch (e) {
        // console.log(e)
      }
    },
    async fsubmit_ewallet () {
      try {
        const params = { bank_id: this.e_wallet, phase_university_id: this.$route.query.phaseId }
        const result = await this.$axios.$post('/payment-user/ewallet', params)
        if (this.e_wallet === 9) {
          if (!result.error) {
            this.$swal({
              icon: 'success',
              title: 'Sedikit lagi!',
              imageUrl: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/bank/1642675137985_image_url',
              imageWidth: 200,
              imageHeight: 200,
              text: 'Cek aplikasi OVO kamu dan segera lakukan pembayaran'
            })
            this.$router.push('/')
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
        // console.log(e)
        this.$swal({
          icon: 'error',
          title: 'Oopss...!',
          text: e.message
        })
      }
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
    border-radius: 5px;
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
    background-color: #FF9900; //bg-blue
    box-shadow: 0px 0px 0px 2px white inset;
  }

  input[type="radio"]:checked + label{
    color: #FF9900; //text-blue
  }

  i.v-icon::before {
    color: #111827 !important;
}

</style>
