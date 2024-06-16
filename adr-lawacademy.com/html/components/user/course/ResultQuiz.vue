<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-4">
        <div class="tw-p-4 tw-text-white tw-bg-[#FF9900] tw-rounded-md tw-shadow-md">
          <div class="tw-flex tw-items-center tw-justify-center">
            <span class="tw-text-1xl tw-font-semibold tw-tracking-wider tw-uppercase">{{ content.name }}</span>
          </div>
        </div>
        <!-- {{ content.content_type_id }} -->
        <span class="tw-text-lg tw-font-bold tw-px-12 tw-pt-5">
          Deskripsi
        </span>
        <span class="tw-text-md tw-px-12" v-html="content.description" />
        <div v-if="content.content_type_id=='3'" class="tw-px-12 tw-pt-4">
          <table>
            <tr>
              <td class="tw-pr-4">
                Batas Akses
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.access_limit }}
              </td>
            </tr>
            <tr>
              <td class="tw-pr-4">
                KKM
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.min_value }}
              </td>
            </tr>
            <tr>
              <td class="tw-pr-4">
                Durasi
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.duration }} Menit
              </td>
            </tr>
          </table>
          <div class="tw-py-3">
            <div class="tw-font-bold">
              Hasil Kuis
            </div>
            <div class="tw-flex tw-flex-col">
              <div class="overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
                <div class="tw-py-2 inline-block tw-w-full sm:tw-px-6 lg:tw-px-8">
                  <div class="overflow-x-auto">
                    <table class="tw-w-full tw-text-left">
                      <thead class="tw-bg-[#FFFAF2]">
                        <tr>
                          <th scope="col" style="max-width: 400px;" class="tw-text-sm tw-font-normal tw-text-[#1D1D1D] tw-px-6 tw-py-4 tw-border-y tw-border-l">
                            Waktu Mulai Kuis
                          </th>
                          <th scope="col" class="tw-text-sm tw-font-normal tw-text-[#1D1D1D] tw-px-6 tw-py-4 tw-border-y">
                            Soal
                          </th>
                          <th scope="col" class="tw-text-sm tw-font-normal tw-text-[#1D1D1D] tw-px-6 tw-py-4 tw-border-y">
                            Benar
                          </th>
                          <th scope="col" class="tw-text-sm tw-font-normal tw-text-[#1D1D1D] tw-px-6 tw-py-4 tw-border-y">
                            Salah
                          </th>
                          <th scope="col" class="tw-text-sm tw-font-normal tw-text-[#1D1D1D] tw-px-6 tw-py-4 tw-border-y tw-border-r">
                            Nilai
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in result" :key="item._id" class="tw-bg-white">
                          <td class="tw-text-sm tw-text-[#1D1D1D] tw-font-semibold tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-b tw-border-l">
                            {{ item.created_at }}
                          </td>
                          <td class="tw-text-sm tw-text-[#1D1D1D] tw-font-semibold tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-b">
                            {{ item.countquestion }}
                          </td>
                          <td class="tw-text-sm tw-text-[#1D1D1D] tw-font-semibold tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-b">
                            {{ item.correct }}
                          </td>
                          <td class="tw-text-sm tw-text-[#1D1D1D] tw-font-semibold tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-b">
                            {{ item.wrong }}
                          </td>
                          <td class="tw-text-sm tw-text-[#1D1D1D] tw-font-semibold tw-px-6 tw-py-4 tw-whitespace-nowrap tw-border-b tw-border-r">
                            {{ parseInt(item.value) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <v-btn
              class="tw-mr-2 tw-mt-2"
              color="#FF9900"
              style="color: #fff; border-radius: 3px;"
              width="200px"
              @click="goQuiz"
            >
              Ulangi Kuis
            </v-btn>
            <v-btn
              class="tw-mt-2"
              color="#FF9900"
              style="color: #fff; border-radius: 3px;"
              width="200px"
              @click="goExplain"
            >
              pembahasan
            </v-btn>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-flex sm:tw-justify-between tw-w-full tw-mt-1 tw-px-12 tw-py-5 tw-flex-col sm:tw-flex-row">
          <button class="tw-bg-[#fff] tw-text-[#FF9900] tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-my-2" style="border: 1px solid #FF9900;" @click="fback()">
            Kembali ke Laman Mata Kuliah
          </button>
          <div v-if="graduate">
            <button class="tw-bg-[#FF9900] tw-text-[#fff] tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-my-2" style="border: 1px solid #FF9900;" @click.prevent="goNext()">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      content: {},
      result: [],
      lastValue: 0,
      graduate: false
    }
  },
  async mounted () {
    const content_res = await this.$axios.$get(`/bank-content-topic/${this.$route.params.id}`)
    this.content = content_res.data

    const path = this.$route.path
    const splitPath = path.split('/')
    splitPath.splice(5, 1)

    const res = await this.$axios.$get(`/answer/result/${this.$route.params.id}`)
    this.result = res.data.map(item => ({ created_at: item.created_at, countquestion: item.countquestion, correct: item.correct, wrong: item.wrong, value: item.value }))
    this.lastValue = parseInt(this.result[0].value)
    if (this.lastValue >= this.content.min_value)
      this.graduate = true

    console.log('result', this.result)
    console.log('last result', this.result[0])
    console.log('last value', this.lastValue)
    console.log('content', this.content)
    console.log('content min value', this.content.min_value)
    console.log('graduate', this.graduate)
  },
  methods: {
    async fback () {
      const res = await this.postProgress()
      // console.log(res);
      this.$router.push('/dashboard/user/myclass')
    },
    unmute () {
      const video = document.getElementById('vid')
      const sound = this.$refs.sound
      video.muted = !video.muted

      if (video.muted) {
        sound.innerHTML = 'Unmute'
      } else {
        sound.innerHTML = 'Mute'
      }
    },
    goQuiz () {
      const url = this.$route.path
      const newUrl = url.replace('result', 'quiz')
      // this.$router.push(newUrl)
      window.location.href = newUrl
    },
    goExplain () {
      const link = this.$route.path
      const newLink = link.replace('result', 'explain')
      this.$router.push(newLink)
    },
    async goNext () {
      const splitPath = this.$route.path.split('/')
      splitPath.splice(5, 1)
      const res = await this.postProgress()
      // console.log(res);
      splitPath[5] = res.data.next
      if (res.data.next === 0) {
        this.$router.push('/dashboard/user/myclass')
      } else {
        window.history.pushState({}, '', splitPath.join('/'))
        window.location.reload()
      }
    },
    async postProgress() {
      const splitPath = this.$route.path.split('/')
      splitPath.splice(5, 1)
      try {
        const data = { content_topic_id: this.$route.params.id, package_content_course_id: splitPath[4] }
        return await this.$axios.$post('progress-user', data)
      } catch (err) {
        // console.log(err)
        this.$router.push('/dashboard/user/myclass')
        // this.$swal({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: err.message
        // })
      }
    },
  }
  // plugins: [
  //   require('@tailwindcss/aspect-ratio')
  //   // ...
  // ]
}
</script>

<style scoped>
.theme--light.v-application  {
  background: none !important;
  border: none;
}
</style>

<style scoped lang="scss">
//  ::v-deep .v-application--wrap {
//     min-height: fit-content;
//     background-color: #E5E5E5;
//   }
</style>
<style scoped lang="scss">
  ::v-deep .container {
    height: 100% !important;
    width: 100% !important;
    background-color:#ffffff;
  }
  ::v-deep ul {
    list-style-type: disc;
    padding-left: 15px;
  }
  ::v-deep ol {
    list-style-type: decimal;
    padding-left: 15px;
  }
</style>
