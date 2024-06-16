<template>
  <dashboard-layout>
    <Nuxt />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/components/layout/dashuser/Layout.vue'
export default {
  components: { DashboardLayout },
  middleware: 'isuseractive'
}
</script>
