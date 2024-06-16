<template>
  <div class="tw-pt-20">
    <ExamPMB />
  </div>
</template>

<script>
import ExamPMB from '~/components/ExamPMB.vue'
export default {
  components: { ExamPMB },
  middleware: 'auth'
}
</script>
