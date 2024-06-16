<template>
  <div>
    <hero />
    <div class="tw-max-w-screen-lg tw-mx-auto">
      <div class="tw-mx-auto tw-px-4">
        <!-- Universitas -->
        <university />
      </div>
      <div class="tw-mx-auto tw-px-4 tw-mt-20">
        <!-- Tentang kami -->
        <about-us />
      </div>
      <div class="tw-mx-auto tw-px-10">
        <advantage />
      </div>
      <div class="tw-mx-auto tw-px-4 tw-pb-10">
        <!-- End -->
        <flow-registration />
      </div>

      <div class="tw-px-4">
        <!-- Kurikulum -->
        <curriculum />
      <!-- End Kurikulum -->
      </div>
      <div class="tw-px-4">
        <!-- Biaya -->
        <charge />
      <!-- End Biaya -->
      </div>
      <div class="tw-px-10 tw-py-10">
        <testimoni />
      </div>
    </div>
  </div>
</template>

<script>
import University from '~/components/home/University.vue'
import AboutUs from '~/components/home/AboutUs.vue'
import Advantage from '~/components/home/Advantage.vue'
import FlowRegistration from '~/components/home/FlowRegistration.vue'
import Curriculum from '~/components/home/Curriculum.vue'
import Charge from '~/components/home/Charge.vue'
import Testimoni from '~/components/home/Testimoni.vue'
import Hero from '~/components/home/Hero.vue'

export default {
  components: { AboutUs, Advantage, University, FlowRegistration, Curriculum, Charge, Testimoni, Hero },
  data () {
    return {
    }
  },
  methods: {
    flinkregister () {
      this.$router.push('/register')
    }
  }
}
</script>
