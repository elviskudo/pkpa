<template>
  <v-app>
    <div class="tw-flex tw-flex-col tw-text-black space-y-2 tw-items-center tw-py-4">
      <div class="tw-shadow-2xl tw-w-3/4 tw-items-center tw-px-16">
        <div class="-tw-mx-3 md:tw-flex tw-items-start tw-px-4">
          <div id="invoice" class="tw-px-3 md:tw-w-4/5 lg:tw-pr-10">
            <div class="tw-w-full tw-mx-auto tw-text-gray-800 tw-font-light tw-mb-6 tw-border-b tw-border-gray-200 tw-pb-2 tw-px-4">
              <div class="tw-w-full tw-flex tw-items-center">
                <div class="tw-flex-grow tw-pl-3">
                  <h6 class="tw-font-semibold tw-uppercase tw-px-4">
                    Invoice
                  </h6>
                </div>
                <div>
                  <img
                    src="~/assets/images/logo/logo-pkpa.png"
                    style="width: 100px"
                    alt="Logo PKPA"
                  >
                </div>
              </div>
            </div>
            <div v-for="(item, index) in trxDetail" :key="index">
              <div class="tw-mb-6 tw-pb-6 tw-border-b tw-border-gray-200 tw-text-gray-800 tw-px-4">
                <div class="tw-w-full tw-flex tw-mb-3 tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Invoice Kepada</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-normal">{{ item.fullname }}</span>
                  </div>
                </div>
                <div class="tw-w-full tw-flex tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Nomor Invoice</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-normal"> <div>{{ item.invoice }}</div></span>
                  </div>
                </div>
              </div>
              <div class="tw-mb-6 tw-pb-6 tw-border-b tw-border-gray-200 tw-text-gray-800 tw-px-4">
                <div class="tw-w-full tw-flex tw-mb-3 tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Detail Tagihan</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-normal">Biaya {{ item.nama_program }}</span>
                  </div>
                </div>
                <div class="tw-w-full tw-flex tw-mb-3 tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Biaya</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-normal">{{ item.amount }}</span>
                  </div>
                </div>
                <div class="tw-w-full tw-flex tw-mb-3 tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Tanggal</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-normal">{{ $moment(item.created_at).format('DD MMMM YYYY') }}</span>
                  </div>
                </div>
              </div>
              <div class="tw-mb-6 tw-pb-6 tw-border-b tw-border-gray-200 md:tw-border-none tw-text-gray-800 tw-text-xl tw-px-4">
                <div class="tw-w-full tw-flex tw-items-center tw-px-4">
                  <div class="tw-flex-grow">
                    <span class="tw-text-gray-600">Total</span>
                  </div>
                  <div class="tw-pl-3">
                    <span class="tw-font-semibold tw-text-gray-400 tw-text-sm">Rp.</span> <span class="tw-font-semibold">{{ item.amount }}</span>
                  </div>
                </div>
              </div>
              <div class="tw-flex tw-flex-row tw-py-4 tw-items-center tw-justify-center" data-html2canvas-ignore="true">
                <v-btn
                  class="tw-px-4 tw-py-4 tw-w-2/5 left-1/3"
                  color="#61A4BC"
                  @click="downloadInvoice"
                >
                  Download
                </v-btn>
              </div>
            </div>
          </div> <!--xxx-->
        </div>
      </div>
    </div>
    <div class="tw-flex tw-flex-row tw-py-4 tw-items-center tw-justify-center">
      <v-btn
        type="submit"
        class="tw-px-4 tw-py-4 tw-w-2/5 left-1/4"
        color="#C2C2C2"
        @click="back()"
      >
        Tutup
      </v-btn>
    </div>
  </v-app>
</template>
<script>
/* eslint-disable */
// import { defineComponent } from '@vue/composition-api'
import html2canvas from 'html2canvas'

export default {
  data () {
    return {
      trxDetail: {}
    }
  },
  async mounted () {
    const res = await this.$axios.$get(`/user/user-trx-detail/${this.$route.params.id}`)
    this.trxDetail = res.data
    // console.log(this.trxDetail)
  },
  methods: {
    back () {
      this.$router.push('/dashboard/admin/manage-trx')
    },
    downloadInvoice() {
      const invoiceElement = document.getElementById('invoice');
      html2canvas(invoiceElement).then(canvas => {
        const image = canvas.toDataURL('image/jpeg');

        // script for open new tab to view and download it
        const newTab = window.open();
        newTab.document.write(`<a href="${image}" download="Invoice - ${this.trxDetail?.[0]?.fullname}.jpg"><img src="${image}" style="max-width: 100%;"></a>`);

        // script for download without preview
        // const link = document.createElement('a');
        // link.download = `Invoice - ${this.trxDetail?.[0]?.fullname}.jpg`;
        // link.href = image;
        // link.click();
      });
    },
  }
}
</script>
<style>
/*
module.exports = {
    plugins: [require('@tailwindcss/forms'),]
};
*/
.form-radio {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: tw-border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>
