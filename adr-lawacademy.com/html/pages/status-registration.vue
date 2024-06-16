<template>
  <div class="tw-mt-24">
    <status-registration />
  </div>
</template>

<script>
import StatusRegistration from '~/components/StatusRegistration.vue'
export default {
  components: { StatusRegistration },
  layout: 'empty',
  middleware: 'auth'
}
</script>
