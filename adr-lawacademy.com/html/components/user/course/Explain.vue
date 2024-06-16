<template>
  <v-app>
    <div class="tw-p-4 tw-bg-white-500 tw-rounded-md tw-shadow-md">
      <div class="tw-flex tw-flex-col">
        <div class="tw-flex tw-justify-between">
          <a href="#"><span class="tw-text-1xl tw-text-black tw-font-semibold tw-tracking-wider tw-uppercase left-0">{{ content.name }}</span></a>
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
            @click="submit"
          >
            Selesai
          </v-btn>
        </template>
      </v-dialog>
    </div>
    <div id="results" />
    <v-divider class="tw-mb-2" />
    <div class="tw-px-8 tw-flex tw-flex-col explain-container tw-mb-2">
      <span class="tw-text-lg tw-font-bold">
        Pembahasan
      </span>
      <div id="explain" />
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      content: {},
      ex7: 'red',
      ex8: 'primary',
      dialog: false,
      questions: [],
      currentSlide: 0,
      progressQuestions: 0
    }
  },
  async mounted () {
    const res = await this.$axios.$get(`/bank-content-topic/${this.$route.params.id}`)
    this.content = res.data
    // console.log(this.questions)

    const res2 = await this.$axios.$get(`/bank-content-question/?content_topic_id=${this.$route.params.id}`)
    this.questions = res2.data.data
    console.log(this.questions)
    this.buildQuiz()
    this.showSlide(this.currentSlide)
  },
  methods: {
    buildQuiz () {
      // variable to store the HTML output
      const quizContainer = document.getElementById('quiz')
      const explainContainer = document.getElementById('explain')
      const output = []
      const explain = []
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
              <input style="border-width:5px;" class="tw-form-radio tw-cursor-not-allowed" type="radio" id="${currentQuestion.option_content_question[letter].id}" name="question${currentQuestion.id}" value="${currentQuestion.option_content_question[letter].id}" disabled>
              <label for="${currentQuestion.option_content_question[letter].id}" class="tw-cursor-not-allowed">${currentQuestion.option_content_question[letter].option}</label>
            </div>`
            )
          }

          // add this question and its answers to the output
          output.push(
          `<div class="slide tw-absolute tw-opacity-0">
            <div class="question"> ${currentQuestion.name} </div>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
          )
          explain.push(`<div class="slide-explain tw-absolute tw-opacity-0">
          <textarea
            disabled
            rows="3"
            cols="70"
            class="
                    tw-form-input
                    tw-block
                    tw-w-full
                    tw-px-3
                    tw-py-1.5
                    tw-text-base
                    tw-font-normal
                    tw-text-gray-700
                    tw-bg-white tw-bg-clip-padding
                    tw-border tw-border-solid tw-border-gray-300
                    tw-rounded
                    tw-transition
                    tw-ease-in-out
                    tw-m-0
                    focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none
                  "
          >${currentQuestion.explain}</textarea></div>`)
        }
      )

      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('')
      explainContainer.innerHTML = explain.join('')
      // console.log(explainContainer)
    },
    showSlide (n) {
      const slides = document.querySelectorAll('.slide')
      const slidesExplain = document.querySelectorAll('.slide-explain')
      const previousButton = document.getElementById('previous')
      const nextButton = document.getElementById('next')
      const submitButton = document.getElementById('submit')
      // let currentSlide = 0
      // console.log('show slide: ' + n)
      // console.log(slides)
      slides[this.currentSlide].setAttribute('class', 'slide tw-hidden tw-absolute tw-z-10')
      slidesExplain[this.currentSlide].setAttribute('class', 'slide-explain tw-hidden tw-absolute tw-z-10')
      // slides[currentSlide].classList.add('opacity-0')
      // slides[currentSlide].classList.add('z-20')
      slides[n].setAttribute('class', 'slide tw-opacity-1 tw-z-20')
      slidesExplain[n].setAttribute('class', 'slide-explain tw-opacity-1 tw-z-20')
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
    submit () {
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
      const link = this.$route.path
      const newLink = link.replace('explain', 'result')
      this.$router.push(newLink)
      // try {
      //   const objData = { data, content_topic_id: this.$route.params.id }
      //   const res = await this.$axios.$post('answer', objData)
      //   console.log(res)
      //   const link = this.$route.path
      //   const newLink = link.replace('quiz', 'result')
      //   this.$router.push(newLink)
      // } catch (err) {
      //   console.log(err)
      // }

      // show number of correct answers out of total
      // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
    }
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
