<template>
  <RegisterTabs />
</template>

<script>
import RegisterTabs from '~/components/RegisterTabs.vue'
export default {
  components: { RegisterTabs },
  middleware: 'guest'
}
</script>
