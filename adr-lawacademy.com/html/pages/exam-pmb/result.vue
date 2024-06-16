<template>
  <div class="tw-mt-10">
    <ResultExamPMB />
  </div>
</template>

<script>
import ResultExamPMB from '~/components/ResultExamPMB.vue'
export default {
  components: { ResultExamPMB },
  layout: 'empty',
  middleware: 'auth'
}
</script>
