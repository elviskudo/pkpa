<template>
  <div class="tw-bg-white tw-w-full tw-h-full tw-rounded-xl tw-p-5">
    <!-- kembali ke history -->
    <div class="tw-flex tw-justify-evenly my-10 tw-mx-24">
      <div class="tw-flex tw-flex-nowrap tw-justify-start tw-items-center">
        <nuxt-link to="/dashboard/user/certificate">
          <h5 class="" style=" color: #FF9900;">
            <i class="fa fa-angle-left tw-w-4 tw-h-4" />
            Kembali ke Histori Transaksi
          </h5>
        </nuxt-link>
      </div>
      <!-- Download sertifikat -->
      <div class="tw-flex tw-flex-nowrap tw-justify-end">
        <a :href="require(`~/assets/images/sertifikat-2.jpg`)" download>
          <button
            style="color: #ff9900;
          border: 2px solid #ff9900;
          align: right;"
            class="tw-py-2 tw-px-4 tw-rounded tw-bg-transparent"
          >
            <bold>
              Download Sertifikat
            </bold>
          </button>
        </a>
      </div>
    </div>
    <!-- </a> -->
    <div class="tw-justify-tw-items-center ">
      <div class="tw-justify-start tw-mx-11 tw-px-11">
        <h3>Tanda Selesai Mata Kuliah</h3>
      </div>
      <center>
        <img src="~assets/images/sertifikat-2.jpg" class="align-center tw-m-10 tw-max-w- tw-max-h-80">
      </center>
    </div>
  </div>
</template>

<script>
// import certificate from 'pages/dashboard/user/certificate.vue'
export default {
  components: { }
}
</script>

<style>

</style>
