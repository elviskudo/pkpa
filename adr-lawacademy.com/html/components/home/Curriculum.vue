<template>
  <div id="curriculum" class="tw-max-w-full tw-bg-gray-100 tw-py-10">
    <div class="tw-relative tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6">
      <div
        class="
            tw-max-w-sm
            tw-mx-auto
            tw-grid
            md:tw-grid-cols-2
            tw-items-start
            md:tw-max-w-2xl
            lg:tw-max-w-none
          "
      >
        <div class="md:tw-pr-10">
          <h2 class="tw-text-2xl tw-mb-6 tw-font-bold">
            Kurikulum
          </h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="c in homepages"
              :key="c.id"
              class="tw-rounded tw-py-4 tw-pb-4 tw-my-2"
            >
              <v-expansion-panel-header style="justify-content: space-between;">
                {{ c.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider />
                <p class="tw-text-justify tw-pt-6" v-html="c.sub_content" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- <div class="tw-relative tw-w-full tw-justify-start tw-pb-5">
            <a
              class="
                  tw-inline-flex
                  tw-h-20
                  tw-items-center
                  tw-justify-between
                  tw-w-full
                  tw-bg-white
                  tw-shadow-lg
                  tw-text-black
                  tw-rounded
                  hover:tw-bg-gray-200
                  tw-px-4
                  tw-py-3
                  tw-cursor-pointer
                  focus:tw-outline-none
                  tw-mr-2
                  tw-font-normal
                "
              @click.prevent="show = !show"
            >
              A. Materi Dasar Umum
              <svg
                class="tw-w-5 tw-h-5 tw-ml-2 -tw-mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <div v-show="show" class="tw-text-gray-700">
              <div
                id="headlessui-menu-items-117"
                class="
                    tw-w-full
                    tw-right-0
                    tw-mt-2
                    origin-top-right
                    tw-bg-white
                    border tw-border-gray-200
                    divide-y divide-gray-100
                    tw-rounded-md
                    tw-shadow-lg
                    tw-outline-none
                  "
                aria-labelledby="headlessui-menu-button-1"
                role="menu"
              >
                <div class="tw-w-full tw-px-4 tw-py-3">
                  <p class="tw-whitespace-pre-line tw-text-sm leading-5">
                    A.1. Etika dan Kode Etik Profesi Advokat
                    A.2. Sistem Peradilan di Indonesia
                    A.3. Peran dan Fungsi Organisasi Advokat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-w-full tw-justify-start tw-pb-5">
            <a
              class="
                  tw-inline-flex
                  tw-h-20
                  tw-items-center
                  tw-justify-between
                  tw-w-full
                  tw-bg-white
                  tw-shadow-lg
                  tw-text-black
                  tw-rounded
                  hover:tw-bg-gray-200
                  tw-px-4
                  tw-py-3
                  tw-cursor-pointer
                  focus:tw-outline-none
                  tw-mr-2
                  tw-font-normal
                  tw-font-sans
                "
              @click.prevent="show2 = !show2"
            >
              B. Praktik Litigasi
              <svg
                class="tw-w-5 tw-h-5 tw-ml-2 -tw-mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div v-show="show2" class="tw-text-gray-700">
              <div
                id="headlessui-menu-items-117"
                class="
                    tw-w-full
                    tw-right-0
                    tw-mt-2
                    origin-top-right
                    tw-bg-white
                    border tw-border-gray-200
                    divide-y divide-gray-100
                    tw-rounded-md
                    tw-shadow-lg
                    tw-outline-none
                  "
                aria-labelledby="headlessui-menu-button-1"
                role="menu"
              >
                <div class="tw-w-full tw-px-4 tw-py-3">
                  <p class="tw-whitespace-pre-line tw-text-sm leading-5">
                    B.1. Teori dan Praktik Peradilan Pidana
                    B.2. Teori dan Praktik Peradilan Perdata
                    B.3. Teori dan Praktik Peradilan Adm. Negara
                    B.4. Teori dan Praktik Peradilan Agama
                    B.5. Teori dan Praktik Peradilan MK & Pemilu
                    B.6. Teori dan Praktik Peradilan Persaingan Usaha
                    B.7. Teori dan Praktik Peradilan HAM
                    B.8. Teori dan Praktik Peradilan Hub. Industrial
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tw-relative tw-w-full tw-justify-start tw-pb-5">
            <a
              class="
                  tw-inline-flex
                  tw-h-20
                  tw-items-center
                  tw-justify-between
                  tw-w-full
                  tw-bg-white
                  tw-shadow-lg
                  tw-text-black
                  tw-rounded
                  hover:tw-bg-gray-200
                  tw-px-4
                  tw-py-3
                  tw-cursor-pointer
                  focus:tw-outline-none
                  tw-mr-2
                  tw-font-normal
                  tw-font-sans
                "
              @click.prevent="show3 = !show3"
            >
              C. Non Litigasi
              <svg
                class="tw-w-5 tw-h-5 tw-ml-2 -tw-mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div v-show="show3" class="tw-text-gray-700">
              <div
                id="headlessui-menu-items-117"
                class="
                    tw-w-full
                    tw-right-0
                    tw-mt-2
                    origin-top-right
                    tw-bg-white
                    border tw-border-gray-200
                    divide-y divide-gray-100
                    tw-rounded-md
                    tw-shadow-lg
                    tw-outline-none
                  "
                aria-labelledby="headlessui-menu-button-1"
                role="menu"
              >
                <div class="tw-w-full tw-px-4 tw-py-3">
                  <p class="tw-whitespace-pre-line tw-text-sm leading-5">
                    C.1. Teori dan Praktik Arbitrase
                    C.2. Teori dan Praktik Peradilan Niaga
                    C.3. Teori dan Praktik Alternatif Penyelesaian Sengketa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tw-relative tw-w-full tw-justify-start tw-pb-5">
            <a
              class="
                  tw-inline-flex
                  tw-h-20
                  tw-items-center
                  tw-justify-between
                  tw-w-full
                  tw-bg-white
                  tw-shadow-lg
                  tw-text-black
                  tw-rounded
                  hover:tw-bg-gray-200
                  tw-px-4
                  tw-py-3
                  tw-cursor-pointer
                  focus:tw-outline-none
                  tw-mr-2
                  tw-font-normal
                  tw-font-sans
                "
              @click.prevent="show4 = !show4"
            >
              D. Mata Kuliah Pendukung
              <svg
                class="tw-w-5 tw-h-5 tw-ml-2 -tw-mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <div v-show="show4" class="tw-text-gray-700">
              <div
                id="headlessui-menu-items-117"
                class="
                    tw-w-full
                    tw-right-0
                    tw-mt-2
                    origin-top-right
                    tw-bg-white
                    border tw-border-gray-200
                    divide-y divide-gray-100
                    tw-rounded-md
                    tw-shadow-lg
                    tw-outline-none
                  "
                aria-labelledby="headlessui-menu-button-1"
                role="menu"
              >
                <div class="tw-w-full tw-px-4 tw-py-3">
                  <p class="tw-whitespace-pre-line tw-text-sm leading-5">
                    D.1. Teknik Analisis Kontrak
                    D.2. Teknik Merger dan Akuisisi
                    D.3. Law & Legal Reasoning
                    D.4. Uji Kepatuhan dari segi hukum (legal due diligence)
                    D.5. Teknik Wawancara dengan Klien
                    D.6. Penelusuran Hukum dan Dokumentasi Hukum
                  </p>
                </div>
              </div>
            </div> -->
        </div>
        <div>
          <img
            id="img-kuri"
            src="~/assets/images/kurikulum.jpg"
            alt="Kualitas terbaik"
          >
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
      show: false,
      show2: false,
      show3: false,
      show4: false
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/homepage/?section_name=Kurikulum')
    this.homepages = res.data.map(obj => ({ no: obj.no, title: obj.title, sub_content: obj.sub_content, img_url: obj.img_url }))
  }
}
</script>
<style>
  @media (min-width:1280px) {
    #img-kuri {
    margin-left: 4em;
    }
  }
  @media (min-width: 640px) {
    #img-kuri {
    width: 420px;
    height: 400px;
    margin-top: 2.6em;
  }
  }
</style>
