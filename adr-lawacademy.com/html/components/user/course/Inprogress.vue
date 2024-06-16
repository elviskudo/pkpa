<template>
  <div class="tw-max-w-screen-xl tw-mx-auto md:tw-px-12 tw-px-4 tw-flex tw-items-center tw-flex-col min-tw-h-screen">
    <div class="tw-flex tw-w-full">
      <div class="tw-flex tw-flex-col lg:tw-w-9/12 tw-w-full self-start">
        <div v-if="kelas.length>0" class="tw-flex md:-tw-mx-6 -tw-mx-2 tw-mt-4 tw-flex-wrap">
          <!-- @foreach($courses as $course) -->

          <div
            class="lg:tw-w-4/12 tw-w-6/12 md:tw-px-6 tw-px-2 md:my-8 my-4"
          >
            <div class="tw-flex tw-flex-col tw-w-full card-course tw-p-2 md:tw-p-0 tw-bg-white md:tw-bg-transparent tw-rounded-lg md:tw-rounded-none tw-shadow-md md:tw-shadow-none">
              <a href="#">
                <div class="tw-w-full tw-mb-4 ">
                  <img src="~assets/images/kelas/kelas-3.png" alt="Bahasa Korea Percakapan Sehari - Hari" class="tw-rounded img-course img-course md:tw-h-40 tw-h-24 tw-object-cover tw-w-full">
                </div>
                <h4 class="md:tw-text-lg two-line tw-mb-2 tw-text-black">Audio Engineering - Beginner ke Mahir</h4>
              </a>
              <a href="#slug" class="tw-flex tw-items-center">
                <p class="tw-text-sm tw-ml-2 one-line md:tw-ml-4 tw-text-black-33">Maya Narzalina, SH., MH</p>
              </a>
              <div class="tw-flex tw-bg-gray-f5 tw-w-full tw-h-0.5 tw-rounded-md tw-mt-4 tw-mb-2">
                <div class="tw-flex tw-bg-blue-dark tw-h-0.5 tw-rounded-md" style="width: 10%;" />
              </div>
              <p class="tw-text-sm leading-4">
                10 %
              </p>
            </div>
          </div>
        </div>
        <!-- @endforeach
          @if(count($courses) == 0) -->
        <div v-else class="tw-m-auto tw-py-8">
          <img src="" width="100" class="tw-m-auto tw-mb-4">
          <p class="tw-text-center tw-text-sm">
            Kelas tidak ditemukan
          </p>
        </div>
        <!-- @endif -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kelas: ['tes']
    }
  }
}
</script>
