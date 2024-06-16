<template>
  <div class="tw-max-w-full tw-mx-auto tw-mt-10">
    <div class="tw-flex tw-flex-row my-12 tw-rounded-xl" style="background-color: #146eb4">
      <div
        class="
            lg:tw-w-1/2
            tw-flex
            lg:tw-flex-row
            tw-h-full
            lg:tw-pl-5
            sm:tw-pt-5
            md:tw-pt-5
            lg:tw-pt-5
            xl:tw-pt-5
            tw-pt-2
            tw-pb-10
            tw-items-center
          "
      >
        <!-- lg:tw-pl-10 -->
        <div class="tw-flex tw-flex-col tw-py-3">
          <img
            src="~/assets/images/logo/logo-pkpa-line-white.png"
            class="tw-h-10 tw-w-28 tw-mt-8 tw-mb-6 tw-m-auto lg:tw-mx-0"
            alt="Kualitas terbaik"
          >
          <div
            class="tw-ml-6 tw-flex tw-items-center tw-text-white tw-text-2xl sm:tw-text-4xl tw-font-sans tw-font-extrabold tw-m-auto lg:tw-mx-0"
          >
            <p>Biaya PKPA</p>
          </div>
          <div class="tw-ml-6 tw-flex tw-items-center tw-text-white tw-text-xl tw-m-auto lg:tw-mx-0">
            Biaya pendidikan PKPA sebesar
          </div>
          <p class="tw-ml-6 tw-text-white tw-font-bold tw-text-xl tw-font-sans tw-m-auto lg:tw-mx-0">
            Rp 2.500.000,-
          </p>
          <div class="tw-mt-6 tw-mb-8 tw-m-auto lg:tw-mx-0">
            <a
              class="
                  md:tw-py-2
                  tw-py-3
                  tw-px-11
                  <!-- md:tw-px-6 -->
                  tw-border-white
                  tw-border-2
                  tw-rounded-lg
                  tw-bg-white
                "
              @click="flinkregister()"
            >
              <span class="tw-text-blue-500 tw-font-sans tw-font-medium">Daftar Sekarang</span>
            </a>
            <!-- <nuxt-link
              class=" tw-text-blue-500"
              to="/register"
            >
              Daftar Sekarang
            </nuxt-link> -->
          </div>
        </div>
      </div>
      <div class="tw-w-9/12 lg:tw-flex lg:tw-items-center md:tw-mt-20 md:tw-block tw-hidden">
        <img
          src="~/assets/images/biaya-pkpa.png"
          class="tw-w-11/12 tw-h-11/12 md:tw-mt-20"
          alt="Kualitas terbaik"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    flinkregister () {
      this.$router.push('/register')
    }
  }
}
</script>
