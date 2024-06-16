<template>
  <div id="about-us">
    <div v-for="(item) in homepages" :key="item.id">
      <div class="tw-flex tw-justify-center lg:tw-items-center tw-mt-10 tw-mb-8">
        <p class="tw-text-2xl tw-font-bold">
            {{ item.section_name }}
        </p>
      </div>
      <div class="tw-max-w-6xl tw-mx-auto tw-flex tw-flex-row">
        <div class="tw-flex tw-flex-col tw-text-center tw-gap-3 md:tw-flex-row">
          <div
            class="
            tw-flex tw-flex-col
            tw-w-full
            md:tw-pr-10
          "
          >
            <p
              class="
            tw-text-orange-500
              tw-text-2xl
              tw-uppercase
              tw-font-bold
            "
            >
            </p>
            <p
              class="
              tw-text-lg
              tw-font-bold
            "
            >
              {{ item.title }}
            </p>
            <div class="tw-w-full tw-rounded-lg tw-py-3">
              <img
                :src="item.img_url"
                class="tw-w-full"
                alt="About"
              >
            </div>
          </div>
          <div
            class="
            tw-w-full
            md:tw-pl-10
          "
          >
            <p class="tw-text-justify tw-pt-6" v-html="item.sub_content" />
            <!-- <p class="tw-text-justify tw-pt-6">
              <strong>ADR LAW ACADEMY</strong>, merupakan lembaga yang fokus dalam
              bidang pendidikan dan pelatihan hukum online dalam segala aspeknya
              bagi kaum muda dalam meningkatkan profesionalitas dan kualitas
              sumber daya manusia terutama dalam profesi advokat dalam menghadapi
              dinamisnya tantangan hukum di era globalisasi dan digitalisasi.
            </p>
            <p class="tw-text-justify tw-pt-6">
              ADR LAW ACADEMY didirikan oleh
              <strong>Prof. Dr. Romli Atmasasmita, SH., LL.M. Romli Atmasasmita</strong>
              adalah Profesor Hukum Pidana Internasional di Universitas
              Padjajaran, mendapat gelar master dari University of California
              Berkeley (1981) dan gelar doctor dari Universitas Gadjah Mada
              (1996).
            </p>
            <p class="tw-text-justify tw-pt-6">
              Bersama rekannya
              <strong>Dr. Dodi S. Abdulkadir, B.Sc., SE., SH. MH.</strong>
              Dodi S. Abdulkadir memegang gelar PhD di bidang hukum bisnis, dan
              seorang pengacara yang telah mewakili klien terkenal & berprofil
              tinggi di Indonesia. Mengkhususkan diri dalam Fraud and White-Collar
              Crime.
            </p>
            <p class="tw-text-justify tw-pt-6">
              ADR LAW ACADEMY berkeinginan menjadi pelopor dan wadah dalam
              pengembangan dan pemasyarakatan hukum di Indonesia, dengan
              menyelenggarakan kegiatan pendidikan dan pelatihan, serta kegiatan
              diskusi dan seminar tingkat nasional dan internasional.
            </p> -->
            <p
              class="
              tw-w-full
              tw-m-0
              tw-pt-6
              tw-text-center
              md:tw-text-left
            "
            >
              <v-btn
                id="textcolor"
                class="
                tw-h-12
                tw-text-white
                tw-rounded
                tw-font-bold
                sm:tw-w-52
                tw-mb-4
              "
                color="#FF9900"
                @click="fdetailabout()"
              >
                Read More
              </v-btn>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data () {
    return {
      homepages: {}
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/homepage/?section_name=Tentang Kami')
    this.homepages = res.data
  },
  methods: {
    fdetailabout () {
      this.$router.push('/detail-about')
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

.texts {
  font-family: 'Quicksand', sans-serif;
}
#textcolor {
  color: #fff;
}

@media (max-width:650px) {
  .txt1{
    letter-spacing: -0.50px;
  }
  .txt2{
    letter-spacing: -0.50px;
  }
  .txt3{
    letter-spacing: -0.50px;
  }
  .txt4{
    letter-spacing: -1px;
  }
}
</style>
