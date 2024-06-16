<template>
  <div class="tw-bg-white">
    <div class="tw-flex tw-justify-center tw-my-10">
      <p
        class="
          tw-text-3xl
          tw-font-bold
        "
      >
        Testimoni
      </p>
    </div>

    <!-- carousel -->
    <div class="md:tw-container tw-mx-auto">
      <VueSlickCarousel v-bind="settings" v-if="testimonials.length" class="lg:tw-px-10 tw-mb-10">
        <div v-for="(item) in testimonials" :key="item.id">
          <div class="tw-p-4">
            <v-card class="tw-m-2 tw-flex col">
              <div class="tw-flex tw-flex-col tw-border-gray-400 tw-h-72 tw-p-4 tw-bg-white">
                <span class="tw-pb-4 tw-text-sm md:left-4">
		              {{ item.content }}
                </span>
                <div class="tw-flex tw-flex-row md:left-4">
                  <!-- <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="Jackson"
                      class="tw-justify-start"
                    >
                  </v-avatar> -->
                  <div class="tw-flex tw-flex-col">
                    <span class="tw-px-4 tw-font-bold tw-text-black">{{ item.user_name }}</span>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </VueSlickCarousel>
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
      testimonials: {},
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
    const res = await this.$axios.$get('/homepage/?section_name=Testimonials')
    this.testimonials = res.data.map(obj => ({ content: obj.content, user_name: obj.author_name }))
  }
}
</script>
