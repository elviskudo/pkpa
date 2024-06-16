<template>
  <v-app>
    <div class="min-tw-h-screen tw-mx-auto">
      <div class="tw-h-64 tw-grid tw-grid-cols-4 tw-gap-5">
        <div class="tw-col-span-3 tw-rounded tw-shadow-xl tw-w-full tw-p-4 tw-border-4 tw-bg-white">
          <p class="tw-mb-5">
            Ujian PKPA
          </p>
          <hr>
          <div id="warning" />
          <p class="tw-mt-2 tw-mb-2">
            {{ questionType }}
          </p>
          <hr>
          <p class="tw-mt-5">
            {{ questionName }}
          </p>

          <v-radio-group v-model="value_answer">
            <v-radio
              v-for="opt in options"
              :key="opt._id"
              :label="opt.option"
              :value="opt.id"
            />
          </v-radio-group>
          <div class="tw-flex tw-flex-col tw-mt-5">
            <div id="exam" />
            <div class="tw-flex tw-items-center tw-justify-center tw-mt-10">
              <button id="prevId" type="submit" class="tw-border-2 tw-p-2 tw-rounded tw-bg-gray-500 tw-text-white tw-mr-3" @click="prevBtn">
                Sebelumnya
              </button>
              <button
                v-if="statusBtnNext"
                id="nextId"
                type="submit"
                class="tw-border-2 tw-p-2 tw-rounded tw-bg-primary hover:tw-bg-orange-600"
                @click="nextBtn"
              >
                <span class="tw-text-white">Selanjutnya</span>
              </button>
              <button v-else id="finishId" class="tw-border-2 tw-p-2 tw-rounded tw-bg-primary hover:tw-bg-orange-600" @click="finishBtn">
                <span class="tw-text-white">Selesai</span>
              </button>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col">
          <div class="tw-rounded tw-shadow-xl tw-p-4 tw-border-4 tw-bg-white">
            <div class="tw-flex tw-justify-center tw-items-center">
              <img src="~assets/images/icon/clock.png">
              <p id="clock" class="tw-ml-3" />
            </div>
            <br>
            <hr>
            <p class="tw-mt-5 tw-mb-2">
              Nomor soal
            </p>
            <div class="tw-w-full tw-grid tw-grid-cols-5 tw-gap-3 tw-justify-center">
              <div v-for="q in questions" :key="q.id">
                <NuxtLink v-if="q.id==$route.params.index" :to="`/exam-pmb/${q.id}`" style="color:white" class="tw-flex tw-rounded-lg tw-text-white tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-bg-purple-700">
                  {{ q.id }}
                </NuxtLink>
                <button v-else-if="q.answer > 0" style="color:white" class="tw-flex tw-rounded-lg tw-bg-purple-300 tw-h-12 tw-w-12 tw-items-center tw-justify-center hover:tw-bg-purple-700" @click="f_index(index)">
                  {{ q.id }}
                </button>
                <button v-else class="tw-flex tw-rounded-lg tw-bg-gray-300 tw-h-12 tw-w-12 tw-items-center tw-justify-center hover:tw-bg-purple-700" @click="f_index(q.id)">
                  {{ q.id }}
                </button>
              </div>
            </div>
          </div>
          <div class="tw-flex tw-mt-3">
            <button class="tw-flex tw-justify-center tw-items-center tw-w-full tw-text-white tw-rounded tw-bg-orange-500 tw-py-2 tw-mb-10 hover:tw-bg-orange-600 tw-font-semibold" @click="finishBtn">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      questionType: '',
      questionName: '',
      options: [],
      statusBtnNext: true,
      total: 0,
      value_answer: 0,
      questions: [],
      remidialTo: 0
    }
  },
  async fetch () {
    try {
      const responseRemidial = await this.$axios.$get('/question/answer/remidial')
      this.remidialTo = responseRemidial.data.remidial_to === 'null' || responseRemidial.data.remidial_to === 0 ? 1 : responseRemidial.data.remidial_to + 1
      console.log(this.remidialTo)
      if (this.remidialTo > 3) {
        // this.$auth.$storage.removeLocalStorage('remidialExamPMB')
        this.$router.push('/exam-pmb/result')
      } else {
        this.$auth.$storage.setLocalStorage('remidialExamPMB', this.remidialTo)
      }
      // console.log(this.remidialTo)
      const responseAnswer = await this.$axios.$get(`/question/answer/${this.remidialTo}`)
      this.questions = responseAnswer.data.map(obj => ({ id: obj.id, answer: obj.result_score.length > 0 ? obj.result_score[0].value_answer : 0 }))

      const response = await this.$axios.$get(`/question/${this.remidialTo}`, { params: { id: this.$route.params.index } })
      this.questionType = response.data.result.question_type.name
      this.questionName = response.data.result.name
      this.questionId = response.data.result.id
      this.total = response.data.total
      this.options = response.data.result.options.map(obj => ({ id: obj.id, option: obj.abjad + '. ' + obj.option }))
      if ((response.data.result.result_score.length > 0) && (response.data.result.result_score[0].value_answer !== 0)) {
        this.value_answer = response.data.result.result_score[0].value_answer
      }
    } catch (err) {
      const elWarning = document.getElementById('warning')
      elWarning.innerHTML = 'Silakan Cek kembali jawaban Anda'
      this.statusBtnNext = false
      this.$auth.$storage.removeLocalStorage('countExamPMB')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  mounted () {
    if (this.status === true) {
      this.$router.push('/exam-pmb/result')
    }
  },
  // mounted () {
  //   const x = setInterval(function () {
  //     const distance = localStorage.getItem('countdown-exam-pmb')
  //     console.log(localStorage.getItem('countdown-exam-pmb'))

  //     // Time calculations for days, hours, minutes and seconds
  //     // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  //     // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //     // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //     // Output the result in an element with id="demo"
  //     // document.getElementById('clock').innerHTML = hours + 'h ' +
  //     //     minutes + 'm ' + seconds + 's '
  //     if (seconds < 0) {
  //       document.getElementById('clock').innerHTML = 'EXPIRED'
  //     } else {
  //       document.getElementById('clock').innerHTML = seconds + 's '
  //     }
  //     // If the count down is over, write some text
  //     if (distance < 1) {
  //       clearInterval(x)
  //       window.location.href = 'http://localhost:3000/exam-pmb/timeout' // 'https://www.example.com'
  //     }
  //   }, 1000)
  // },
  methods: {
    async nextBtn () {
      try {
        const data = {
          question_pmb_id: this.$auth.$storage.getLocalStorage('countExamPMB') ?? this.$route.params.index,
          value_answer: this.value_answer,
          remidial_no: this.remidialTo
        }
        await this.$axios.$post('/question/answer', data)
        // await delay(1000)
      } catch (error) {
        console.log('failed')
      }
      // eslint-disable-next-line promise/param-names
      // const delay = time => new Promise(res => setTimeout(res, time))
      if (this.$auth.$storage.getLocalStorage('countExamPMB') > 0) {
        this.$auth.$storage.setLocalStorage('countExamPMB', this.$auth.$storage.getLocalStorage('countExamPMB') + 1)
      } else {
        this.$auth.$storage.setLocalStorage('countExamPMB', 2)
      }
      this.$router.push(`/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`)
    },
    prevBtn () {
      if (this.$auth.$storage.getLocalStorage('countExamPMB') > 1) {
        this.$auth.$storage.setLocalStorage('countExamPMB', this.$auth.$storage.getLocalStorage('countExamPMB') - 1)
      } else {
        this.$auth.$storage.setLocalStorage('countExamPMB', 1)
      }
      this.$router.push(`/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`)
    },
    finishBtn () {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await this.$axios.$get(`/question/answer/score/${this.$auth.$storage.getLocalStorage('remidialExamPMB')}`)

          this.$axios.$put('/user/remidial', { remidial_to: this.$auth.$storage.getLocalStorage('remidialExamPMB'), pass_exam_pmb: response.data.status })
          this.$router.push('/exam-pmb/result')
          // this.$swal(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
        }
      })
    },
    // updateRemidial () {
    //   this.$axios.$post('/user/remidial', {remidial_to: this.remidialTo, pass_exam_pmb: })
    // },
    f_index (index) {
      this.$auth.$storage.setLocalStorage('countExamPMB', index)
      this.$router.push(`/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`)
    },
    tes () {
      this.$swal(
        'Oops...',
        'Something went wrong!',
        'error'
      )
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
