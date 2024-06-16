<template>
  <certificate />
</template>

<script>
import Certificate from '~/components/user/Certificate.vue'

export default {
  components: { Certificate },
  layout: 'useractive'
}
</script>
<style scoped>
.theme--light {
  background-color: #E5E5E5 !important;
  border: none;
}
</style>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
