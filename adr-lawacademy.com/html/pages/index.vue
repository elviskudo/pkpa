<template>
  <Home />
</template>

<script>
import Home from '~/components/Home.vue'
export default {
  components: { Home },
  mounted () {
    this.$auth.$storage.removeLocalStorage('countExamPMB')
    this.$auth.$storage.removeLocalStorage('remidialExamPMB')
  }
}
</script>
