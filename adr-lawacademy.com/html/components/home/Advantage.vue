<template>
  <div class="tw-bg-white">
    <div class="tw-flex tw-justify-center tw-my-10">
      <p
        class="
          tw-text-2xl
          tw-font-bold
        "
      >
        Keunggulan PKPA ADR Law Academy
      </p>
    </div>

    <!-- carousel -->
    <div class="md:tw-container tw-mx-auto">
      <VueSlickCarousel v-if="homepages.length" v-bind="settings" class="lg:tw-px-10 tw-mb-10">
        <div v-for="(item) in homepages" :key="item.id">
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-border-gray-400 tw-h-[22rem] tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-5 tw-py-2">
                  <img :src="item.img_url" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    {{ item.title }}
                  </p>
                  <div class="tw-text-1xl tw-text--primary" v-html="item.sub_content" />
                </v-card-text>
              </div>
            </v-card>
          </div>
        </div>
      </vueslickcarousel>
      <!-- <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-5 tw-py-2">
                  <img src="~/assets/images/icon/icon-pkpa/Kurikulum-Standar-Dikti.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Metode Pembelajaran Komprehensif
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    ADR Law Academy dengan kombinasi berbagai macam metode pembelajaran menyajikan metode pembelajaran yang komprehensif
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-5 tw-py-2">
                  <img src="~/assets/images/icon/icon-pkpa/Ragam-Pelatihan-PKPA.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Ragam Pelatihan PKPA
                  </p>
                  <p class="tw-text-sm tw-text--primary tw-justify-items-stretch">
                    ADR Law Academy berkerja sama dengan universitas terkemuka di Indonesia untuk menjadi sarana pendidikan bagi sarjana hukum yang bercita-cita menjadi advokat
                    terkait.
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3">
                  <img src="~/assets/images/icon/icon-pkpa/Alur-Belajar-Terbaik.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Alur Belajar Terbaik
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    ADR Law Academy dengan struktur yang sistematis dan terintegrasi secara online dapat di akses dimana saja dan kapan saja. <br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3">
                  <img src="~/assets/images/icon/icon-pkpa/Platrform-LMS-Handal.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Platform LMS Handal
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    ADR Law Academy memudahkan pengguna untuk akses materi pelatihan dari perangkat yang kompatibel di waktu luang. <br><br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3">
                  <img src="~/assets/images/icon/icon-pkpa/ADR-Kollabs.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    ADR Kollabs
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    ADR Kollabs, memungkinkan terjadinya kolaborasi diskusi antar pengguna dan para pengajar agar efektif dan efisien. <br><br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3.5">
                  <img src="~/assets/images/icon/icon-pkpa/CBT.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    CBT (Computer Based Test)
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    Metode CBT (Computer Based Test), memudahkan berbagai pihak dalam mengevaluasi penilaian dan kinerja <br><br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3">
                  <img src="~/assets/images/icon/icon-pkpa/ADR-Connect.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    ADR ConnecT
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    ADR ConnecT memudahkan interaksi secara realtime antara pengguna dan pengajar untuk meningkatkan efektifitas pembelajaran<br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3.5">
                  <img src="~/assets/images/icon/icon-pkpa/Sertifikasi-Online.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Sertifikasi Online
                  </p>
                  <p class="tw-text-1xl tw-text--primary">
                    Sertifikasi Online dari universitas yang dipilih, bagi pengguna yang selesai rangkaian materi dan proses penilaian<br><br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div>
          <div class="tw-p-4">
            <v-card class="tw-mb-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-justify-center tw-border-gray-400 tw-h-72 tw-p-2 tw-bg-white">
                <div class="tw-flex tw-px-4 tw-py-3.5">
                  <img src="~/assets/images/icon/icon-pkpa/Performance-Tracking.png" height="50" width="50" class="contain">
                </div>
                <v-card-text>
                  <p class="tw-text-sm tw-font-bold">
                    Performance Tracking
                  </p>
                  <p class="tw-text-1xl tw-text--primary" style="margin-bottom: 26px;padding-bottom: 8px;">
                    Pengguna ADR Law Academy dapat selalu memonitor dan terhubung dengan progres performa pelatihan <br><br><br>
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </div> -->
      <!-- </VueSlickCarousel> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Testimoni',
  components: { VueSlickCarousel },
  data () {
    return {
      homepages: {},
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/homepage/?section_name=Keunggulan PKPA ADR')
    this.homepages = res.data.map(obj => ({ title: obj.title, sub_content: obj.sub_content, img_url: obj.img_url }))
    // console.log(this.homepages)
  }
}
</script>
