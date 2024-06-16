<template>
  <div class="min-tw-h-screen tw-mx-auto">
    <h1>Quiz on Important Facts</h1>
    <div class="quiz-container tw-relative">
      <div id="quiz" />
    </div>
    <button id="previous">
      Previous Question
    </button>
    <button id="next">
      Next Question
    </button>
    <button id="submit">
      Submit Quiz
    </button>
    <div id="results" />
    <!-- <div class="tw-h-64 tw-grid tw-grid-cols-4 tw-gap-5">
      <div class="tw-col-span-3 tw-rounded tw-shadow-xl tw-w-full tw-p-4 tw-border-4 tw-bg-white">
        <div ref="question">
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

          <div ref="radio" v-html="htmlQuestion" />
        </div>
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
    </div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      // questionType: '',
      // questionName: '',
      // options: [],
      // statusBtnNext: true,
      // total: 0,
      // value_answer: 0,
      // questions: [],
      // remidialTo: 0,
      // counter: 1,
      // htmlQuestion: ''
    }
  },
  // async fetch () {
  //   try {
  //     const responseRemidial = await this.$axios.$get('/question/answer/remidial')
  //     this.remidialTo = responseRemidial.data.remidial_to === 'null' || responseRemidial.data.remidial_to === 0 ? 1 : responseRemidial.data.remidial_to + 1
  //     if (this.remidialTo > 3) {
  //       this.$router.push('/exam-pmb/result')
  //     } else {
  //       this.$auth.$storage.setLocalStorage('remidialExamPMB', this.remidialTo)
  //     }

  //     const responseAnswer = await this.$axios.$get(`/question/answer/${this.remidialTo}`)
  //     this.questions = responseAnswer.data.map(obj => ({ id: obj.id, answer: obj.result_score.length > 0 ? obj.result_score[0].value_answer : 0 }))

  //     const response = await this.$axios.$get(`/question/${this.remidialTo}`, { params: { id: this.counter } })
  //     this.questionType = response.data.result.question_type.name
  //     this.questionName = response.data.result.name
  //     this.questionId = response.data.result.id
  //     this.total = response.data.total
  //     this.options = response.data.result.options.map(obj => ({ id: obj.id, option: obj.abjad + '. ' + obj.option }))

  //     let stringOption = ''
  //     this.options.forEach(function (value) {
  //       stringOption += `<input type="radio" id="option" ref="option" name="option" value="${value.id}"><label for="html">${value.id}${value.option}</label><br>`
  //       console.log(value.option)
  //     })
  //     this.htmlQuestion = stringOption
  //     if ((response.data.result.result_score.length > 0) && (response.data.result.result_score[0].value_answer !== 0)) {
  //       this.value_answer = response.data.result.result_score[0].value_answer
  //     }
  //   } catch (err) {
  //     const elWarning = document.getElementById('warning')
  //     elWarning.innerHTML = 'Silakan Cek kembali jawaban Anda'
  //     this.statusBtnNext = false
  //     this.$auth.$storage.removeLocalStorage('countExamPMB')
  //   }
  // },
  // computed: {
  //   ...mapGetters(['isAuthenticated', 'loggedInUser'])
  // },
  mounted () {
    // start counter
    // this.$auth.$storage.setLocalStorage('counter', 1)
    // this.counter = this.$auth.$storage.getLocalStorage('counter')
    // if (this.status === true) {
    //   this.$router.push('/exam-pmb/result')
    // }

    function buildQuiz () {
    // variable to store the HTML output
      const output = []

      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          // variable to store the list of possible answers
          const answers = []

          // and for each available answer...
          for (const letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
            `<label>
              <input type="radio" name="${currentQuestion.id}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
            )
          }

          // add this question and its answers to the output
          output.push(
          `<div class="slide absolute opacity-0">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
          )
        }
      )

      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('')
    }

    function showResults () {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers')

      // keep track of user's answers
      let numCorrect = 0

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber]
        const selector = `input[name=question${questionNumber}]:checked`
        const userAnswer = (answerContainer.querySelector(selector) || {}).value

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
          numCorrect++

          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen'
        // eslint-disable-next-line brace-style
        }
        // if answer is wrong or blank
        else {
        // color the answers red
          answerContainers[questionNumber].style.color = 'red'
        }
      })

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
    }

    function showSlide (n) {
      console.log('show slide: ' + n)
      slides[currentSlide].setAttribute('class', 'slide opacity-0 absolute z-10')
      // slides[currentSlide].classList.add('opacity-0')
      // slides[currentSlide].classList.add('z-20')
      slides[n].setAttribute('class', 'slide opacity-1 absolute z-20')
      currentSlide = n
      if (currentSlide === 0) {
        previousButton.style.display = 'none'
      } else {
        previousButton.style.display = 'inline-block'
      }
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none'
        submitButton.style.display = 'inline-block'
      } else {
        nextButton.style.display = 'inline-block'
        submitButton.style.display = 'none'
      }
    }

    function showNextSlide () {
      showSlide(currentSlide + 1)
    }

    function showPreviousSlide () {
      showSlide(currentSlide - 1)
    }

    // Variables
    const quizContainer = document.getElementById('quiz')
    const resultsContainer = document.getElementById('results')
    const submitButton = document.getElementById('submit')
    const myQuestions = [
      {
        question: 'Who invented JavaScript?',
        answers: {
          a: 'Douglas Crockford',
          b: 'Sheryl Sandberg',
          c: 'Brendan Eich'
        },
        correctAnswer: 'c'
      },
      {
        question: 'Which one of these is a JavaScript package manager?',
        answers: {
          a: 'Node.js',
          b: 'TypeScript',
          c: 'npm'
        },
        correctAnswer: 'c'
      },
      {
        question: 'Which tool can you use to ensure code quality?',
        answers: {
          a: 'Angular',
          b: 'jQuery',
          c: 'RequireJS',
          d: 'ESLint'
        },
        correctAnswer: 'd'
      }
    ]

    // Kick things off
    buildQuiz()

    // Pagination
    const previousButton = document.getElementById('previous')
    const nextButton = document.getElementById('next')
    const slides = document.querySelectorAll('.slide')
    console.log(slides)
    let currentSlide = 0

    // Show the first slide
    showSlide(currentSlide)

    // Event listeners
    submitButton.addEventListener('click', showResults)
    previousButton.addEventListener('click', showPreviousSlide)
    nextButton.addEventListener('click', showNextSlide)
  }
  // methods: {
  //   onChange (event) {
  //     alert('test')
  //     const optionText = event.target.value
  //     console.log('optiontext: ' + optionText)
  //   },
  //   async nextBtn () {
  //     console.log(this.counter)
  //     try {
  //       // save answer to db
  //       const option = document.querySelector('#option').value
  //       // const option = this.$refs.option.value
  //       console.log(option)
  //       const data = {
  //         question_pmb_id: this.counter,
  //         value_answer: option,
  //         remidial_no: this.remidialTo
  //       }
  //       await this.$axios.$post('/question/answer', data)
  //       //
  //       const responseAnswer = await this.$axios.$get(`/question/answer/${this.remidialTo}`)
  //       this.questions = responseAnswer.data.map(obj => ({ id: obj.id, answer: obj.result_score.length > 0 ? obj.result_score[0].value_answer : 0 }))

  //       this.counter = this.$auth.$storage.getLocalStorage('counter') + 1
  //       const response = await this.$axios.$get(`/question/${this.remidialTo}`, { params: { id: this.counter } })
  //       this.$auth.$storage.setLocalStorage('counter', this.counter)
  //       this.questionType = response.data.result.question_type.name
  //       this.questionName = response.data.result.name
  //       this.questionId = response.data.result.id
  //       this.total = response.data.total
  //       this.options = response.data.result.options.map(obj => ({ id: obj.id, option: obj.abjad + '. ' + obj.option }))

  //       let stringOption = ''
  //       this.options.forEach(function (value) {
  //         stringOption += `<input type="radio" id="option" value="${value.id}" @click="onChange($event)"><label for="html">${value.option}</label><br>`
  //         console.log(value.option)
  //       })
  //       this.htmlQuestion = stringOption
  //       // await delay(1000)
  //     } catch (error) {
  //       console.log('failed')
  //       const elWarning = document.getElementById('warning')
  //       elWarning.innerHTML = 'Silakan Cek kembali jawaban Anda'
  //       this.statusBtnNext = false
  //       this.$auth.$storage.removeLocalStorage('countExamPMB')
  //       this.questionType = ''
  //       this.questionName = ''
  //       this.$refs.radio.innerHTML = ''
  //     }
  //     // eslint-disable-next-line promise/param-names
  //     // const delay = time => new Promise(res => setTimeout(res, time))
  //     if (this.$auth.$storage.getLocalStorage('countExamPMB') > 0) {
  //       this.$auth.$storage.setLocalStorage('countExamPMB', this.$auth.$storage.getLocalStorage('countExamPMB') + 1)
  //     } else {
  //       this.$auth.$storage.setLocalStorage('countExamPMB', 1)
  //     }
  //   },
  //   prevBtn () {
  //     if (this.$auth.$storage.getLocalStorage('countExamPMB') > 1) {
  //       this.$auth.$storage.setLocalStorage('countExamPMB', this.$auth.$storage.getLocalStorage('countExamPMB') - 1)
  //     } else {
  //       this.$auth.$storage.setLocalStorage('countExamPMB', 1)
  //     }
  //     this.$router.push(`/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`)
  //   },
  //   async finishBtn () {
  //     const response = await this.$axios.$get(`/question/answer/score/${this.$auth.$storage.getLocalStorage('remidialExamPMB')}`)

  //     this.$axios.$put('/user/remidial', { remidial_to: this.$auth.$storage.getLocalStorage('remidialExamPMB'), pass_exam_pmb: response.data.status })
  //     this.$swal({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.$router.push('/exam-pmb/result')
  //         // this.$swal(
  //         //   'Deleted!',
  //         //   'Your file has been deleted.',
  //         //   'success'
  //         // )
  //       }
  //     })
  //   },
  //   // updateRemidial () {
  //   //   this.$axios.$post('/user/remidial', {remidial_to: this.remidialTo, pass_exam_pmb: })
  //   // },
  //   f_index (index) {
  //     this.$auth.$storage.setLocalStorage('countExamPMB', index)
  //     this.$router.push(`/exam-pmb/${this.$auth.$storage.getLocalStorage('countExamPMB')}`)
  //   },
  //   tes () {
  //     this.$swal(
  //       'Oops...',
  //       'Something went wrong!',
  //       'error'
  //     )
  //     this.$router.push('/')
  //   }
  // }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>

<style scoped>
h1{
  tw-font-weight: 300;
  margin: 0px;
  padding: 10px;
  font-size: 20px;
  background-color: #444;
  color: #fff;
}
.question{
  font-size: 30px;
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
  tw-border-radius: 3px;
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
.active-slide{
  opacity: 1;
  z-index: 2;
}
.quiz-container{
  position: tw-relative;
  height: 200px;
  margin-top: 40px;
}
</style>
