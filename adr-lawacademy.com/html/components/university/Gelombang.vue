<template>
  <div class="tw-px-10 tw-pt-14">
    <div class="tw-mx-auto tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-gap-3 tw-mb-10">
      <div class="tw-col-span-1">
        <div class="tw-flex tw-flex-col tw-w-full tw-items-start tw-justify-center">
          <p class="tw-uppercase tw-tracking-loose tw-w-full tw-font-bold tw-mb-4 tw-text-lg">
            Gelombang Pendaftaran
          </p>
          <p class="leading-snug tw-mb-8 tw-justify-start">
            Pilih gelombang pendaftaran yang tersedia lalu klik "Daftar" pada gelombang yang tersedia
          </p>
        </div>
      </div>
      <div class="tw-col-span-2">
        <VueSlickCarousel v-if="phaseuniversities.length" v-bind="settings" ref="carousel" class="tw-mb-10">
          <div v-for="unv in phaseuniversities" :key="unv.id">
            <div class="tw-m-2">
              <div class="tw-flex tw-shadow tw-border-gray-400 tw-px-4 tw-py-5 tw-mb-5 tw-h-72 tw-bg-white tw-rounded" style="box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.07)">
                <div class="tw-flex tw-flex-col tw-text-black space-y-2">
                  <p class="tw-pb-3 tw-font-bold">
                    {{ unv.name }}
                  </p>
                  <p class="tw-text-sm tw-text-gray-500">
                    Periode Pendaftaran
                  </p>
                  <p class="tw-pb-3 tw-text-xs tw-font-semibold">
                    {{ $moment(unv.register_period_start).format('DD MMMM YYYY') }} - {{ $moment(unv.register_period_end).format('DD MMMM YYYY') }}
                  </p>
                  <p class="tw-text-sm tw-text-gray-500">
                    Periode Pembelajaran
                    {{ unv.system }}
                  </p>
                  <p class="tw-pb-5 tw-text-xs tw-font-semibold">
                    {{ $moment(unv.learning_period_start).format('DD MMMM YYYY') }} - {{ $moment(unv.learning_period_end).format('DD MMMM YYYY') }}
                  </p>
                  <button v-if="unv.status === 'Daftar'" class="tw-flex tw-justify-center tw-bg-orange-500 tw-w-2/3 tw-py-2 tw-rounded tw-text-sm tw-text-white" @click="choosePhase(unv.id)">
                    {{ unv.status }}
                  </button>
                  <button v-else class="tw-flex tw-justify-center tw-bg-gray-500 tw-w-2/3 tw-py-2 tw-rounded tw-text-sm tw-text-white tw-cursor-not-allowed">
                    {{ unv.status }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Gelombang',
  components: { VueSlickCarousel },
  data () {
    return {
      phaseuniversities: {},
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
            breakpoint: 915,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  async fetch () {
    const universities = await this.$axios.$get(`/university/?slug=${this.$route.params.slug}`)
    const universityId = universities.data.universities[0].id

    const phaseuniversities = await this.$axios.$get(`phase-university/?university_id=${universityId}`)
    this.phaseuniversities = phaseuniversities.data.data.map(obj => ({ id: obj.id, university_id: obj.university_id, name: obj.name, phase_no: obj.phase_no, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end, system: obj.system, slug: obj.slug, is_active: obj.is_active, status: obj.status }))

    const arrUniv = []
    this.phaseuniversities.forEach((element, index) => {
      if (element.status === 'Daftar') {
        arrUniv.unshift(element)
      } else if (element.status == 'Ditutup') {
	      arrUniv.splice(index, 1)
      } else {
        arrUniv.push(element)
      }
    })
    this.phaseuniversities = arrUniv
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    choosePhase (id) {
      if (this.isAuthenticated) {
        try {
          // this.$auth.$storage.setLocalStorage('c_phase_univ', id)

          // console.log(this.loggedInUser.phase)
          // const statusCheck = this.loggedInUser.phase.map(item => ({ phase_university_id: item.phase_university_id, status: item.status })).filter(item => item.phase_university_id === parseInt(id, 10))
          // console.log(statusCheck)
          // if (statusCheck.length > 0) {
          //   this.$swal('Anda sudah terdaftar di gelombang ini')
          // } else {
          //   this.$router.push('/status-registration')
          // }

          // await this.$axios.$post('/user-university', { phase_university_id: id, status: 'pending' })
          // if (this.loggedInUser.pass_exam_pmb === true) {
          //   this.$router.push('/welcome')
          if (this.loggedInUser.status === true) {
            this.$swal('Anda sudah terdaftar di gelombang lain')
          } else {
            this.$router.push(`/status-registration/?phaseId=${id}`)
          }
        } catch (error) {
          this.$swal('Anda sudah memilih gelombang ini')
        }
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
