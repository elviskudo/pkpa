<template>
  <v-app>
    <div class="tw-p-4 tw-bg-white-500 tw-rounded-md tw-shadow-md">
      <div class="tw-flex tw-flex-col">
        <div class="tw-flex tw-justify-between">
          <a href="#"><span class="tw-text-1xl tw-text-black tw-font-semibold tw-tracking-wider tw-uppercase left-0">{{ content.name }}</span></a>
          <!-- <a href="#"><span class="tw-text-1xl tw-text-black tw-font-semibold tw-tracking-wider tw-uppercase tw-right-0">{{ timeConvert(content.duration) }}</span></a> -->
          <a href="#"><span id="countdownQuiz" class="tw-text-1xl tw-text-black tw-font-semibold tw-tracking-wider tw-uppercase tw-right-0">00:00:00</span></a>
        </div>
      </div>
    </div>
    <div class="tw-grid tw-grid-cols-12 tw-items-center tw-justify-center tw-pt-4">
      <div class="tw-col-span-11 tw-px-4 tw-duration-150" :style="{ width: `${progressQuestions}%` }">
        <div class="tw-flex tw-bg-[#146EB4] tw-h-3 tw-rounded" />
      </div>
      <!-- <div class="tw-text-sm leading-4 tw-pr-4">
        {{ progressQuestions }}%
      </div> -->
    </div>
    <div class="tw-px-8 quiz-container tw-mt-5">
      <div class="tw-text-lg tw-font-bold tw-pb-3">
        Soal {{ currentSlide + 1 }}
      </div>
      <div id="quiz" />
    </div>

    <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-px-12 tw-gap-3 tw-mt-5">
      <!-- <a href="#" class="tw-mr-4">Reset Jawaban</a> -->
      <v-btn
        id="previous"
        width="200px"
        style="color: #FF9900; border: 1px solid #FF9900; border-radius: 3px; background: #fff;"
        class="tw-mr-2"
        @click="showSlide(currentSlide - 1)"
      >
        Sebelumnya
      </v-btn>
      <v-btn
        id="next"
        color="#FF9900"
        style="color: #fff; border-radius: 3px;"
        width="200px"
        class="tw-mr-2"
        @click="showSlide(currentSlide + 1)"
      >
        Berikutnya
      </v-btn>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            id="submit"
            color="#FF9900"
            style="color: #fff; border-radius: 3px;"
            width="200px"
            class="tw-mr-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Submit
          </v-btn>
        </template>
        <v-card class="tw-text-center" style="color: #1D1D1D;">
          <v-card-title style="display: block; font-weight: bold;">
            Konfirmasi Jawaban
          </v-card-title>
          <v-card-text>Apakah Anda yakin untuk menyelesaikan "{{ content.name }}" ?</v-card-text>
          <v-card-actions style="display: block;">
            <v-spacer />
            <v-btn
              style="color: #858585; border: 1px solid #858585; border-radius: 3px; background: #fff;"
              @click="dialog = false"
            >
              Tidak
            </v-btn>
            <v-btn
              color="#FF9900"
              style="color: #fff; border-radius: 3px;"
              @click="submit"
            >
              Ya
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div id="results" />
    <!-- <v-divider class="tw-mb-2" /> -->
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      content: {},
      ex7: 'red',
      ex8: 'primary',
      dialog: false,
      questions: [],
      currentSlide: 0,
      progressQuestions: 0,
      distance: 0
    }
  },
  async mounted () {
    // once reload for refresh countdown
    // if (!window.location.hash) {
    //   window.location = window.location + '#loaded'
    //   window.location.reload()
    // }

    // console.log('test : ' + this.$route.fullPath.includes('quiz'))

    const res = await this.$axios.$get(`/bank-content-topic/${this.$route.params.id}`)
    this.content = res.data
    // console.log(this.questions)
    // console.log(`this.content.duration : ${this.content.duration}`)

    const res2 = await this.$axios.$get(`/bank-content-question/?content_topic_id=${this.$route.params.id}`)
    this.questions = res2.data.data
    // console.log(this.questions)
    this.buildQuiz()
    this.showSlide(this.currentSlide)

    // Set the date we're counting down to
    let countDownTime = new Date()
    countDownTime.setMinutes(countDownTime.getMinutes() + this.content.duration)
    countDownTime = countDownTime.getTime()
    // console.log(`countDownTime: ${countDownTime}`)

    // Update the count down every 1 second
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    const self = this
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      this.distance = countDownTime - now

      // Time calculations for days, hours, minutes and seconds
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((this.distance % (1000 * 60)) / 1000)

      // add 0 when number one char
      // const hari = (parseInt(days) < 10) ? '0' + parseInt(days) : parseInt(days)
      const jam = (parseInt(hours) < 10) ? '0' + parseInt(hours) : parseInt(hours)
      const menit = (parseInt(minutes) < 10) ? '0' + parseInt(minutes) : parseInt(minutes)
      const detik = (parseInt(seconds) < 10) ? '0' + parseInt(seconds) : parseInt(seconds)

      // Output the result in an element with id="countdownQuiz"
      document.getElementById('countdownQuiz').innerHTML = jam + ':' + menit + ':' + detik

      // If the count down is over, write some text
      if (this.distance < 0) {
        clearInterval(x)
        document.getElementById('countdownQuiz').innerHTML = 'WAKTU HABIS'
        // history.go(-2)
        self.goToResultPage()
      }
    }, 1000)

    document.getElementById('submit').addEventListener('click', () => {
      const elOverlayScrim = document.querySelector('.v-overlay__scrim')
      const elDialogContentActive = document.querySelector('.v-dialog__content.v-dialog__content--active')
      const elBody = document.querySelector('.tw-bg-body.tw-flex.tw-flex-col.tw-h-screen')
      const elAside = document.querySelector('aside')

      // console.log(elOverlayScrim)
      // console.log(elDialogContentActive)
      // console.log(elBody)

      elBody.appendChild(elOverlayScrim).style.display = 'block'
      elBody.appendChild(elDialogContentActive)
      elBody.querySelector('header').classList.remove('tw-z-10')

      elDialogContentActive.querySelectorAll('button')[0].addEventListener('click', () => {
        elAside.appendChild(elOverlayScrim).style.display = 'none'
        elAside.appendChild(elDialogContentActive)
        elBody.querySelector('header').classList.add('tw-z-10')
      })
      elDialogContentActive.querySelectorAll('button')[1].addEventListener('click', () => {
        elAside.appendChild(elOverlayScrim).style.display = 'none'
        elAside.appendChild(elDialogContentActive)
        elBody.querySelector('header').classList.add('tw-z-10')
      })
    })
  },
  methods: {
    timeConvert (n) {
      const num = n
      const hours = (num / 60)
      const rhours = Math.floor(hours)
      const minutes = (hours - rhours) * 60
      const rminutes = Math.round(minutes)
      return ('0' + rhours).slice(-2) + ':' + ('0' + rminutes).slice(-2) + ':00'
    },
    buildQuiz () {
      // variable to store the HTML output
      const quizContainer = document.getElementById('quiz')
      const output = []
      console.log(this.questions)
      // for each question...
      this.questions.forEach(
        (currentQuestion) => {
          // variable to store the list of possible answers
          const answers = []

          // and for each available answer...
          for (const letter in currentQuestion.option_content_question) {
            // ...add an HTML radio button
            answers.push(
            `<div class="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-py-2">
              <input style="border-width:5px;" class="tw-form-radio tw-cursor-pointer" type="radio" id="${currentQuestion.option_content_question[letter].id}" name="question${currentQuestion.id}" value="${currentQuestion.option_content_question[letter].id}">
              <label for="${currentQuestion.option_content_question[letter].id}" class="tw-cursor-pointer">${currentQuestion.option_content_question[letter].option}</label>
            </div>`
            )
          }

          // add this question and its answers to the output
          let imgQuestion = ''
          if (currentQuestion.url_question != null) {
            if (currentQuestion.content_type_id === 11) {
              imgQuestion = `<audio controls><source src="${currentQuestion.url_question}" type="audio/mpeg"></audio>`
            } else {
              imgQuestion = `<img src="${currentQuestion.url_question}" alt="Trulli" width="500" height="333">`
            }
          }
          output.push(
          `<div class="slide tw-absolute tw-opacity-0">
            <div class="img">${imgQuestion}</div>
            <div class="question"> ${currentQuestion.name} </div>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
          )
        }
      )

      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('')
      // console.log(explainContainer)
    },
    showSlide (n) {
      const slides = document.querySelectorAll('.slide')
      const previousButton = document.getElementById('previous')
      const nextButton = document.getElementById('next')
      const submitButton = document.getElementById('submit')
      // let currentSlide = 0
      // console.log('show slide: ' + n)
      // console.log(slides)
      slides[this.currentSlide].setAttribute('class', 'slide tw-hidden tw-absolute tw-z-10')
      // slides[currentSlide].classList.add('opacity-0')
      // slides[currentSlide].classList.add('z-20')
      slides[n].setAttribute('class', 'slide tw-opacity-1 tw-z-20')
      this.currentSlide = n
      if (this.currentSlide === 0) {
        previousButton.style.display = 'none'
      } else {
        previousButton.style.display = 'inline-block'
      }
      if (this.currentSlide === slides.length - 1) {
        nextButton.style.display = 'none'
        submitButton.style.display = 'inline-block'
      } else {
        nextButton.style.display = 'inline-block'
        submitButton.style.display = 'none'
      }

      // create progress bar value
      // console.log(`rafa this.currentSlide : ${this.currentSlide + 1}`)
      // console.log(`rafa length slides : ${slides.length}`)
      this.progressQuestions = (this.currentSlide + 1) / slides.length * 100
      // console.log(`progressQuestions: ${this.progressQuestions}`)
    },
    async submit () {
      this.dialog = false
      const quizContainer = document.getElementById('quiz')
      console.log(quizContainer)
      const data = []
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers')

      // keep track of user's answers
      // let numCorrect = 0

      // for each question...
      this.questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer

        const answerContainer = answerContainers[questionNumber]
        const selector = `input[name=question${currentQuestion.id}]:checked`
        const userAnswer = (answerContainer.querySelector(selector) || {}).value
        const item = {
          question: currentQuestion.id,
          answer: userAnswer
        }
        data.push(item)
        // if answer is correct
        // console.log(userAnswer)
        // if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        // numCorrect++

        // color the answers green
        // answerContainers[questionNumber].style.color = 'lightgreen'
        // eslint-disable-next-line brace-style
        // }
        // if answer is wrong or blank
        // else {
        // color the answers red
        // answerContainers[questionNumber].style.color = 'red'
        // }
      })
      try {
        const objData = { data, content_topic_id: this.$route.params.id }
        const res = await this.$axios.$post('answer', objData)
        console.log(res)
        this.goToResultPage()
      } catch (err) {
        console.log(err)
      }

      // show number of correct answers out of total
      // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
    },
    goToResultPage() {
      const url = this.$route.path
      const newUrl = url.replace('quiz', 'result')
      this.$router.push(newUrl)
    },
  }
  // plugins: [
  //   require('@tailwindcss/aspect-ratio')
  //   // ...
  // ]
}
</script>
<style scoped>

h1{
  font-weight: 300;
  margin: 0px;
  padding: 10px;
  font-size: 20px;
  background-color: #444;
  color: #fff;
}
.question{
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
}
.answers {
  margin-bottom: 20px;
  text-align: left;
  display: inline-block;
}
.answers label{
  display: block;
  margin-bottom: 10px;
}
button{
  font-family: 'Work Sans', sans-serif;
  font-size: 22px;
  background-color: #279;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
button:hover{
  background-color: #38a;
}

.slide{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  /* z-index: 1; */
  opacity: 0;
  transition: opacity 0.5s;
}
.slide-explain{
  position: absolute;
  /* left: 0px;
  top: 0px;
  width: 100%; */
  /* z-index: 1; */
  opacity: 0;
  transition: opacity 0.5s;
}
.active-slide{
  opacity: 1;
  z-index: 2;
}
/* .explain-container{
  position: relative;
  height: 200px;
  margin-top: 40px;
} */
</style>

<style scoped lang="scss">
 ::v-deep .container {
    height: 100% !important;
    width: 100% !important;
    background-color:#ffffff;
  }
</style>
