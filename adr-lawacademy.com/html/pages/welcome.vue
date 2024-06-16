<template>
  <div class="tw-mt-10">
    <welcome />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
export default {
  components: { Welcome },
  layout: 'empty',
  middleware: 'auth'
}
</script>
