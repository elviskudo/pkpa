<template>
  <payment />
</template>

<script>
import Payment from '~/components/Payment.vue'
export default {
  components: { Payment },
  layout: 'empty',
  middleware: 'auth'
}
</script>
