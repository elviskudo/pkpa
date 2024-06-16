<template>
  <div class="lg:tw-w-60% md:tw-w-4/12 tw-w-full tw-p-4 tw-m-auto">
    <div class="tw-flex tw-items-center tw-px-10 tw-pl-24">
      <a href="#home" class="hidden lg:tw-flex">
        <img
          src="~/assets/images/logo/logo-pkpa.png"
          class="tw-w-25 tw-mr-8"
          alt="Logo PKPA"
        >
      </a>
      <a href="#home" class="hidden lg:tw-flex">
        <img
          src="~/assets/images/logo/logo-pshk.png"
          class="tw-w-22 tw-mr-8"
          alt="Logo PSHK"
        >
      </a>
    </div>
    <div class="tw-shadow-2xl tw-rounded tw-px-10 tw-py-10">
      <p class="tw-text-lg tw-text-24 tw-font-bold tw-text-center tw-mb-4">
        Silahkan Pilih Universitas
      </p>
      <div v-for="unv in universities" :key="unv._id" class="">
        <div class="tw-w-full tw-mb-4">
          <label class="tw-inline-flex tw-items-center">
            <input type="radio" class="tw-form-radio" name="radio" value="1">
            <img
              :src="unv.img_url"
              class="tw-w-5 tw-ml-1"
              alt="Logo UI"
            >
            <span class="tw-ml-2">{{ unv.name }}</span>
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-brand tw-w-full tw-h-full tw-text-2xl tw-mx-50 tw-text-left md:tw-text-center tw-text-white tw-bg-yellow-500 tw-rounded">
        Pilih Universitas
      </button>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      universities: {}
    }
  },
  async fetch () {
    const universities = await this.$axios.$get('university')
    const newUnv = universities.data.universities.map(obj => ({ id: obj.id, name: obj.name, img_url: obj.image_url, slug: obj.slug }))
    this.universities = newUnv
  }
})
</script>
