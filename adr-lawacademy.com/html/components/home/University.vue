<template>
  <div id="university">
    <div class="tw-max-w-screen-xl tw-mx-auto tw-px-4 lg:tw-px-12 md:tw-pt-4">
      <div class="tw-flex tw-justify-center lg:tw-items-center tw-mt-10 tw-mb-8">
        <p
          class="
                tw-text-2xl
                tw-font-bold
              "
        >
          Penyelenggara
        </p>
      </div>
      <div class="tw-flex tw-justify-center lg:tw-items-center tw-mt-10 tw-mb-8">
        PKPA ADR Law Academy bekerjasama dengan Fakultas Hukum Universitas Pasundan
      </div>
    </div>
    <!-- <div v-if="universities.length">
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4">
        <div v-for="(unv) in universities" :key="unv._id" class="tw-mb-3 tw-w-full md:tw-text-center tw-cursor-pointer">
          <VueSlickCarousel v-if="universities.length" v-bind="settings">
            <v-img
              contain
              :lazy-src="unv.logo_url"
              :src="unv.logo_url"
              :alt="unv.name"
              height="100"
              width="350"
              class=""
              @click="univPage(unv.slug)"
            />
          </VueSlickCarousel>
          <span
            class="tw-flex tw-items-center tw-justify-center tw-my-5"
            @click="univPage(unv.slug)"
          >{{ unv.name }}</span>
        </div>
      </div>
    </div>
    <div v-else> -->
      <div :class="`tw-grid tw-grid-cols-1 md:tw-grid-cols-${universities.length}`">
        <div v-for="(unv) in universities" :key="unv._id" class="tw-mb-3 tw-w-full md:tw-text-center tw-cursor-pointer">
          <VueSlickCarousel v-if="universities.length" v-bind="settings">
            <v-img
              contain
              :lazy-src="unv.logo_url"
              :src="unv.logo_url"
              :alt="unv.name"
              height="100"
              width="350"
              class=""
              @click="univPage(unv.slug)"
            />
          </VueSlickCarousel>
          <span
            class="tw-flex tw-items-center tw-justify-center tw-my-5"
            @click="univPage(unv.slug)"
          >{{ unv.name }}</span>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'University',
  components: { VueSlickCarousel },
  data () {
    return {
      universities: {},
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        rows: 1,
        centerMode: true,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 340,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  async mounted () {
    const universities = await this.$axios.$get('university')
    const newUnv = universities.data.universities.filter(item => item.is_active === true).map(obj => ({ id: obj.id, name: obj.name, img_url: obj.image_url, slug: obj.slug, logo_url: obj.logo_url }))
    this.universities = newUnv
  },
  methods: {
    univPage (slug) {
      this.$router.push(`/university/${slug}`)
    }
  }
}
</script>
