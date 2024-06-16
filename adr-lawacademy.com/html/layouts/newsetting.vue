<template>
  <dashboard-layout>
    <Nuxt />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/components/layout/dashsetting/Layout.vue'
export default {
  components: { DashboardLayout },
  middleware: ['auth']
}
</script>
