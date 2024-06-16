<template>
  <dashboard-layout>
    <Nuxt />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/components/layout/dashadmin/Layout.vue'
export default {
  components: { DashboardLayout },
  middleware: 'issuperadmin'
}
</script>
