<template>
  <div>
    <home-header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/layout/HomeHeader.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  components: { HomeHeader, Footer }
}
</script>
