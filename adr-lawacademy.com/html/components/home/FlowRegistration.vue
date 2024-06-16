<template>
  <div id="flow-registration" class="">
    <div class="tw-max-w-screen-xl tw-mx-auto tw-px-4 tw-pt-7 md:tw-pt-10">
      <div class="tw-flex tw-justify-center lg:tw-items-center tw-mt-10 tw-mb-8">
        <p
          class="
            tw-text-2xl
            tw-font-bold
          "
        >
          <span>Alur Pendaftaran</span>
        </p>
      </div>
    </div>
    <div class="tw-flex tw-flex-row tw-justify-center">
      <div class="tw-flex tw-flex-col md:tw-flex-row">
        <div class="tw-flex tw-flex-col tw-w-full lg:tw-w-2/4 tw-justify tw-items-start tw-text-justify lg:tw-px-12 tw-pt-8 tw-pb-8 tw-z-10">
          <div v-for="(item) in homepages" :key="item.id">
            <a href="#flow-regis" class="tw-cursor-pointer tw-w-full">
              <div class="tw-cursor-pointer tw-w-full" @click="fChooseFlowRegis(item.title)">
                <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
                  {{ `0${item.no}` }}
                </p>
                <p class="tw-pb-2 tw-text-lg tw-font-semibold tw-text-black">
                  {{ item.title }}
                </p>
                <hr class="tw-w-full" width="230px">
              </div>
            </a>
          </div>
          <!-- <a href="#flow-regis" class="tw-cursor-pointer tw-w-full">
            <div class="tw-cursor-pointer tw-w-full" @click="fFillForm()">
              <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
                02
              </p>
              <p class="tw-pb-2 tw-text-lg tw-font-semibold tw-text-black">
                Isi Formulir
              </p>
              <hr class="tw-w-full" width="230px">
            </div>
          </a>
          <a href="#flow-regis" class="tw-cursor-pointer tw-w-full">
            <div class="tw-cursor-pointer tw-w-full" @click="fValidateAdmin()">
              <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
                03
              </p>
              <p class="tw-pb-2 tw-text-lg tw-font-semibold tw-text-black">
                Validasi Admin
              </p>
              <hr class="tw-w-full" width="230px">
            </div>
          </a>
          <div class="tw-cursor-pointer" @click="fExamEnter()">
            <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
              04
            </p>
            <p class="tw-pb-5 tw-text-xl tw-font-semibold">
              Tes Masuk
            </p>
            <hr>
          </div>
          <a href="#flow-regis" class="tw-cursor-pointer tw-w-full">
            <div class="tw-cursor-pointer tw-w-full" @click="fPayFee()">
              <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
                04
              </p>
              <p class="tw-pb-2 tw-text-lg tw-font-semibold tw-text-black">
                Bayar Biaya PKPA
              </p>
              <hr class="tw-w-full" width="230px">
            </div>
          </a>
          <a href="#flow-regis" class="tw-cursor-pointer tw-w-full">
            <div class="tw-cursor-pointer tw-w-full" @click="fUserEnter()">
              <p class="tw-text-orange-500 tw-text-2xl tw-font-bold tw-pt-8">
                05
              </p>
              <p class="tw-pb-2 tw-text-lg tw-font-semibold tw-text-black">
                Pengguna Masuk LMS
              </p>
              <hr class="tw-w-full" width="230px">
            </div>
          </a> -->
        </div>
        <div id="flow-regis" class="tw-w-full tw-py-8 sm:tw-text-justify">
          <div class="tw-w-full tw-h-full tw-relative tw-z-0">
            <img
              :src="imgUrl"
              class="tw-object-cover"
              alt="Alur pendaftaran"
              style="width: 40rem; height: 38rem"
            >
            <div class="tw-p-2 sm:tw-p-3 tw-absolute tw-inset-0 tw-z-10 lg:tw-w-96 tw-w-full tw-bg-black-33 tw-bg-opacity-50 sm:tw-px-8 tw-pt-1 sm:tw-pt-8 tw-overflow-auto">
              <p class="tw-text-xs sm:tw-text-xl md:tw-text-xl lg:tw-text-3xl tw-font-bold tw-text-white tw-mt-5 nomor">
                <!-- <div v-html="nomor" /> -->
                {{ nomor }}
              </p>
              <p class="tw-text-xs sm:tw-text-xl md:tw-text-xl tw-font-bold tw-text-white sm:tw-pb-3">
                {{ title }}
              </p>
              <p class="tw-text-white tw-text-sm" v-html="txtImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homepages: {},
      txtImage: '',
      nomor: '',
      title: '',
      imgUrl: ''
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/homepage/?section_name=Alur Pendaftaran')
    this.homepages = res.data.map(obj => ({ no: obj.no, title: obj.title, sub_content: obj.sub_content, img_url: obj.img_url })).sort((a, b) => a - b)
    this.fChooseFlowRegis('Pilih Universitas')
  },
  methods: {
    fChooseFlowRegis (title) {
      const changeFilter = this.homepages.filter(item => item.title === title)
      // console.log(changeFilter)
      this.nomor = `0${changeFilter[0].no}`
      this.title = changeFilter[0].title
      this.txtImage = changeFilter[0].sub_content
      this.imgUrl = changeFilter[0].img_url
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.nomor {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
</style>
