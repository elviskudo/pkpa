/* eslint-disable vue/valid-v-else-if */
<template>
  <v-app>
    <div class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2">
      <v-card>
        <div class="tw-flex tw-flex-col tw-mb-2">
          <div class="tw-px-12 tw-pb-4">
            <v-card-title class="tw-text-h5">
              Edit Konten
            </v-card-title>
            <v-divider />
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Nama Konten</label>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  class="tw-form-input tw-w-2/3"
                >
                <span
                  class="tw-text-overline grey--text tw-text--darken-3 tw-mx-1"
                >
                  harus berupa huruf,angka,spasi,simbol ampersand(&),titik,(.) dan strip(-) 0/150
                </span>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Nama Topik</label>
              </div>
              <div class="tw-col-span-2">
                <select v-model="topic_id" class="tw-w-full tw-form-select">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="topic in topics" :key="topic.id" :value="topic.id" :selected="topic_id == topic.id">
                    {{ topic.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Tipe Konten</label>
              </div>
              <div class="tw-flex tw-flex-row">
                <div class="tw-col-span-2">
                  <div v-for="type in types" :key="type._id" class="tw-inline-flex">
                    <input
                      v-model="content_type_id"
                      :value="type.id"
                      type="radio"
                      name="content_type_id"
                      class="tw-form-radio"
                      @change="checkType"
                    >
                    <label class="tw-mr-5">&nbsp;{{ type.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="cols-span-3 tw-px-3 tw-py-3">
              <label class="tw-text-12">Deskripsi</label>
              <Editor v-model="description" />
              <!-- <textarea
            v-model="description"
            class="
                    tw-form-input
                    block
                    tw-w-full
                    tw-px-3
                    tw-py-1.5
                    tw-text-base
                    tw-font-normal
                    tw-text-gray-700
                    tw-bg-white tw-bg-clip-padding
                    border tw-border-solid tw-border-gray-300
                    tw-rounded
                    transition
                    ease-in-out
                    tw-m-0
                    focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none
                  "
            rows="3"
            placeholder="Your message"
          /> -->
            </div>
            <div v-show="show">
              <v-card-title class="tw-text-h5">
                Upload File {{ type_name }}
              </v-card-title>
              <div class="tw-flex tw-flex-col tw-px-3 tw-py-3">
                <span>Nama File: <a :href="newurl" target="_blank">{{ originalname }}</a></span>
                <v-file-input
                  v-model="url"
                  filled
                  label="Pilih File"
                  :placeholder="originalname"
                  prepend-icon="mdi-camera"
                />
              </div>
            </div>
            <div v-show="show_url">
              <v-card-title class="tw-text-h5">
                Submit Link
              </v-card-title>
              <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                <div class="tw-col-span-3">
                  <label class="tw-text-12">Submit Link</label>
                  <input
                    v-model="link_url"
                    type="text"
                    class="tw-form-input tw-w-2/3"
                  >
                </div>
              </div>
            </div>
            <div v-show="showLimitAccess" class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Batas Akses</label>
                <br>
                <span
                  class="tw-text-overline grey--text tw-text--darken-3 tw-mx-1"
                >
                  Konten hanya tampil sebanyak putaran yang telah diatur
                </span>
                <input
                  v-model="access_limit"
                  type="number"
                  class="tw-form-input tw-w-2/3"
                >
              </div>
            </div>
            <div v-show="show_quiz">
              <div class="tw-flex tw-flex-row tw-items-center">
                <div id="id_step1_1" style="tw-border-radius: 100%;background-color: #146EB4;width:25px; tw-text-align:center; color:white">
                  1
                </div>
                <div id="id_step1_2" class="tw-ml-2" style="color: #146EB4">
                  Pengaturan Quiz
                </div>
                <v-icon>mdi-chevron-right</v-icon>
                <div id="id_step2_1" style="background-color: #C2C2C2;tw-border-radius: 100%;width:25px; tw-text-align:center; color:white">
                  2
                </div>
                <div id="id_step2_2" class="tw-ml-2" style="color: #C2C2C2">
                  Isi Konten
                </div>
              </div>

              <div v-show="step1">
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-font-semibold">Jenis Kuis</label>
                    <br>
                    <span class="tw-text-sm" style="color:#858585">Pilih jenis kuis yang ada</span>
                  </div>
                  <div class="tw-col-span-2">
                    <select v-model="quiz_type" class="tw-w-full tw-form-select">
                      <option selected disabled value="null">
                        Pilih
                      </option>
                      <!-- <option value="1">
                    Kuis
                  </option> -->
                      <option v-for="quiz in quiz_types" :key="quiz.id" :value="quiz.id">
                        {{ quiz.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="cols-span-2 tw-mr-5">
                    <label class="tw-font-semibold">Acak kuis</label><br>
                    <span class="tw-text-sm tw-text-gray-50">Jika aktif, maka tampilan kuis akan diacak</span>
                  </div>
                  <div>
                    <v-switch
                      v-model="is_random"
                    />
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-font-semibold">Pembahasan</label>
                    <br>
                    <span class="tw-text-sm" style="color:#858585">Atur pembahasan</span>
                  </div>
                  <div class="tw-col-span-2">
                    <select v-model="is_commentary" class="tw-w-full tw-form-select">
                      <option selected disabled value="null">
                        Pilih
                      </option>
                      <option value="true">
                        YA
                      </option>
                      <option value="false">
                        TIDAK
                      </option>
                      <!-- <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                    {{ topic.name }}
                  </option> -->
                    </select>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-text-12">Nilai minimal</label><br>
                    <span class="tw-text-sm" style="color:#858585">Atur nilai minimal</span>
                    <input
                      v-model="min_value"
                      type="number"
                      class="tw-form-input tw-w-2/3"
                    >
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-text-12">Durasi</label><br>
                    <span class="tw-text-sm" style="color:#858585">Atur nilai durasi (dalam menit)</span>
                    <input
                      v-model="duration"
                      type="number"
                      class="tw-form-input tw-w-2/3"
                    >
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-text-12">Bobot Asesmen</label><br>
                    <span class="tw-text-sm" style="color:#858585">Atur bobot nilai kuis</span>
                    <input
                      v-model="assesment_weight"
                      type="number"
                      class="tw-form-input tw-w-2/3"
                    >
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-font-semibold">Kesempatan Mengulang</label>
                    <br>
                    <span class="tw-text-sm" style="color:#858585">Atur kesempatan pengguna mengulang konten</span>
                  </div>
                  <div class="tw-col-span-2">
                    <select v-model="remidial_type" class="tw-w-full tw-form-select" @change="changeremidial">
                      <option selected disabled value="null">
                        Pilih
                      </option>
                      <option v-for="rem in remidial_types" :key="rem.id" :value="rem.id">
                        {{ rem.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div v-show="showremidial" class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-text-12">Mengulang dengan batas</label><br>
                    <span class="tw-text-sm" style="color:#858585">Atur berapa nilai batas pengulangan</span>
                    <input
                      v-model="limit_remidial_value"
                      type="number"
                      class="tw-form-input tw-w-2/3"
                    >
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-font-semibold">Bisa skip pertanyaan</label>
                    <br>
                    <span class="tw-text-sm" style="color:#858585">Pengguna dapat melewati pertanyaan</span>
                  </div>
                  <div class="tw-col-span-2">
                    <select v-model="is_skip" class="tw-w-full tw-form-select">
                      <option selected disabled value="null">
                        Pilih
                      </option>
                      <option value="true">
                        YA
                      </option>
                      <option value="false">
                        TIDAK
                      </option>
                      <!-- <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                    {{ topic.name }}
                  </option> -->
                    </select>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
                  <div class="tw-col-span-3">
                    <label class="tw-font-semibold">Tampilkan Nilai kepada pengguna</label>
                    <br>
                    <span class="tw-text-sm" style="color:#858585">Tampilkan nilai kepada pengguna</span>
                  </div>
                  <div class="tw-col-span-2">
                    <select v-model="is_show_result" class="tw-w-full tw-form-select">
                      <option selected disabled value="null">
                        Pilih
                      </option>
                      <option value="true">
                        YA
                      </option>
                      <option value="false">
                        TIDAK
                      </option>
                      <!-- <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                    {{ topic.name }}
                  </option> -->
                    </select>
                  </div>
                </div>
              </div>
              <div v-show="step2">
                <div class="tw-px-3 tw-py-3">
                  Quiz no. 1
                </div>
                <div class="tw-px-2 tw-py-2">
                  <!-- <div> -->
                  <v-expansion-panels>
                    <v-expansion-panel v-for="(question, index) in questions" :key="index" expand>
                      <v-expansion-panel-header v-if="!question.question_name" color="blue-grey lighten-2">
                        Item
                      </v-expansion-panel-header>
                      <v-expansion-panel-header v-else color="blue-grey lighten-2">
                        {{ question.question_name }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="tw-grid tw-grid-cols-3 tw-py-2">
                          <div class="tw-col-span-3">
                            <label class="tw-font-semibold">Tipe Soal</label>
                            <br>
                            <span class="tw-text-sm" style="color:#858585">Pilih tipe soal</span>
                          </div>
                          <div class="tw-col-span-2">
                            <select v-model="question.question_type" class="tw-w-full tw-form-select">
                              <option selected disabled value="null">
                                Pilih
                              </option>
                              <!-- <option value="1">
                              Multiple choice
                            </option> -->
                              <option v-for="q in question_types" :key="q.id" :value="q.id">
                                {{ q.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="tw-grid tw-grid-cols-3 tw-py-2">
                          <div class="tw-col-span-3">
                            <label class="tw-font-semibold">Lampiran Pertanyaan</label>
                            <br>
                            <span class="tw-text-sm" style="color:#858585">Tambahkan media dalam pertanyaan</span>
                          </div>
                          <div class="tw-col-span-2">
                            <select v-model="question.attachment_type" class="tw-w-full tw-form-select" @change="changeAttachment">
                              <option selected value="null">
                                Pilih
                              </option>
                              <option v-for="att in attachment_types" :key="att.id" :value="att.id">
                                {{ att.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div v-show="showUploadQuestion">
                          <v-card-title class="tw-text-h5">
                            Upload file
                          </v-card-title>
                          <v-file-input
                            v-model="question.url_question"
                            label="File input"
                            filled
                            prepend-icon="mdi-camera"
                            class="tw-px-2 tw-py-2 tw-w-2/3"
                          />
                        </div>
                        <div class="tw-grid tw-grid-cols-3 tw-py-2">
                          <div class="tw-col-span-3">
                            <label class="tw-text-12">Pertanyaan</label><br>
                            <input
                              v-model="question.question_name"
                              type="text"
                              class="tw-form-input tw-w-2/3"
                            >
                          </div>
                        </div>
                        <div class="tw-grid tw-grid-cols-3 tw-py-2">
                          <div class="tw-col-span-3">
                            <label class="tw-text-12">Jawaban</label><br>
                            <span class="tw-text-sm" style="color:#858585">Isi jawaban dan pilih jawaban yang benar</span>
                            <div v-for="(answer, index2) in question.answers" :key="answer.id" class="tw-flex tw-flex-row tw-items-center">
                              <input
                                v-model="answer.value"
                                type="text"
                                class="tw-form-input tw-w-2/3"
                              >
                              <input
                                v-if="answer.is_correct==true"
                                v-model="answer.is_correct"
                                :name="index"
                                type="radio"
                                class="tw-form-radio -tw-ml-5"
                                :value="answer.is_correct"
                                checked
                                @change="checkedCorrect(index, index2)"
                              >
                              <input
                                v-else
                                v-model="answer.is_correct"
                                :name="index"
                                type="radio"
                                class="tw-form-radio -tw-ml-5"
                                @change="checkedCorrect(index, index2)"
                              >
                              <v-icon class="tw-ml-2" @click="question.answers.splice(index2, 1)">
                                mdi-trash-can
                              </v-icon>
                            </div>
                            <br>
                            <v-btn @click="addAnswer(index)">
                              New Answer
                            </v-btn>
                          </div>
                        </div>
                        <div class="tw-grid tw-grid-cols-3 tw-py-2">
                          <div class="tw-col-span-3">
                            <label class="tw-text-12">Pembahasan</label><br>
                            <textarea
                              v-model="question.explain"
                              class="
                                    tw-form-input
                                    block
                                    tw-w-full
                                    tw-px-3
                                    tw-py-1.5
                                    tw-text-base
                                    tw-font-normal
                                    tw-text-gray-700
                                    tw-bg-white tw-bg-clip-padding
                                    border tw-border-solid tw-border-gray-300
                                    tw-rounded
                                    transition
                                    ease-in-out
                                    tw-m-0
                                    focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none
                                  "
                              rows="3"
                              placeholder="Pembahasan"
                            />
                          </div>
                        </div>
                        <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
                          <v-btn
                            class="tw-px-4 tw-py-4"
                            color="warning"
                            @click="back()"
                          >
                            Batal
                          </v-btn>
                          <v-btn
                            type="submit"
                            class="tw-px-4 tw-py-4"
                            color="warning"
                            @click="submitContentQuiz(index, question.id)"
                          >
                            Simpan
                          </v-btn>
                          <v-icon class="tw-ml-2" @click="deleteQuestion(index, question.id)">
                            mdi-trash-can
                          </v-icon>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  <!-- </div> -->
                </div>
                <br>
                <div class="tw-px-2 tw-py-2">
                  <v-btn color="blue" class="white--text" @click="addQuestion">
                    New Question
                  </v-btn>
                </div>
              </div>
            </div>
            <v-divider />
            <div v-if="show_quiz" class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
              <v-btn
                class="tw-px-4 tw-py-4"
                color="warning"
                @click="back()"
              >
                Kembali
              </v-btn>
              <v-btn
                v-show="showBtnSubmitAndNext"
                type="submit"
                class="tw-px-4 tw-py-4"
                color="warning"
                @click="submitSettingQuiz"
              >
                Simpan dan Lanjutkan
              </v-btn>
            </div>
            <div v-else class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
              <v-btn
                class="tw-px-4 tw-py-4"
                color="warning"
                @click="back()"
              >
                Kembali
              </v-btn>
              <v-btn
                type="submit"
                class="tw-px-4 tw-py-4"
                color="warning"
                @click="submit"
              >
                Simpan
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import Editor from '~/components/Editor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      name: '',
      topic_id: '',
      description: '',
      url: null,
      link_url: null,
      originalname: null,
      topics: [],
      types: [],
      content_type_id: 1,
      type_name: '',
      access_limit: null,
      show: true,
      show_url: false,
      show_quiz: false,
      showLimitAccess: true,
      quiz_types: [],
      quiz_type: null,
      is_random: false,
      is_commentary: null,
      min_value: null,
      duration: null,
      assesment_weight: null,
      remidial_type: null,
      remidial_types: [],
      limit_remidial_value: null,
      showremidial: false,
      is_skip: null,
      is_show_result: null,
      step1: true,
      step2: false,
      showUploadQuestion: false,
      question_types: [],
      attachment_types: [],
      questions: [{
        question_name: '',
        question_type: null,
        attachment_type: null,
        url_question: null,
        explain: '',
        answers: [{ is_correct: false }]
      }],
      showBtnSubmitAndNext: true,
      newurl: null
    }
  },
  async mounted () {
    this.index = 0
    this.index2 = 0
    const res = await this.$axios.$get('bank-topic')
    this.topics = res.data.data.map(obj => ({ id: obj.id, name: obj.name }))

    const res2 = await this.$axios.$get('bank-content-type')
    this.types = res2.data.data.filter(obj => obj.is_active_content).map(obj => ({ id: obj.id, name: obj.name }))
    this.quiz_types = res2.data.data.filter(obj => obj.is_active_quiz_type).map(obj => ({ id: obj.id, name: obj.name }))
    this.question_types = res2.data.data.filter(obj => obj.is_active_question_type).map(obj => ({ id: obj.id, name: obj.name }))
    this.attachment_types = res2.data.data.filter(obj => obj.is_active_attachment_type).map(obj => ({ id: obj.id, name: obj.name }))
    this.remidial_types = res2.data.data.filter(obj => obj.is_remidial_type).map(obj => ({ id: obj.id, name: obj.name }))

    const res3 = await this.$axios.$get(`bank-content-topic/${this.$route.params.id}`)
    this.name = res3.data.name
    this.topic_id = res3.data.topic_id
    this.description = res3.data.description
    this.content_type_id = res3.data.content_type_id
    this.newurl = res3.data.url
    this.link_url = res3.data.url
    this.originalname = res3.data.originalname
    this.quiz_type = res3.data.quiz_type
    this.access_limit = res3.data.access_limit
    this.is_random = res3.data.is_random
    this.is_commentary = res3.data.is_commentary
    this.min_value = res3.data.min_value
    this.duration = res3.data.duration
    this.assesment_weight = res3.data.assesment_weight
    this.remidial_type = res3.data.remidial_type
    this.limit_remidial_value = res3.data.limit_remidial_value
    this.is_skip = res3.data.is_skip
    this.is_show_result = res3.data.is_show_result

    const res4 = await this.$axios.$get(`/bank-content-question/?content_topic_id=${this.$route.params.id}`)
    this.questions = res4.data.data.map(item => ({
      id: item.id,
      question_name: item.name,
      question_type: item.content_type_id,
      attachment_type: item.attachment_type,
      url_question: item.url_question,
      explain: item.explain,
      answers: item.option_content_question.map(obj => ({ id: obj.id, value: obj.option, is_correct: obj.is_correct }))
    }))
    this.checkType()
    this.changeremidial()
  },
  methods: {
    async submitSettingQuiz () {
      const data = {
        // index: 0,
        name: this.name,
        description: this.description,
        topic_id: this.topic_id,
        content_type_id: this.content_type_id,
        access_limit: this.access_limit,
        quiz_type: this.quiz_type,
        is_random: this.is_random,
        is_commentary: this.is_commentary,
        min_value: this.min_value,
        duration: this.duration,
        assesment_weight: this.assesment_weight,
        remidial_type: this.remidial_type,
        limit_remidial_value: this.limit_remidial_value,
        is_skip: this.is_skip,
        is_show_result: this.is_show_result
      }
      try {
        const res = await this.$axios.$put(`bank-content-topic/${this.$route.params.id}`, data)
        if (!res.error) {
          this.$auth.$storage.setLocalStorage('content_topic_id', res.data.id)
          this.step1 = false
          this.step2 = true
          this.showBtnSubmitAndNext = false
          // eslint-disable-next-line camelcase
          const elStep1_1 = document.getElementById('id_step1_1')
          // eslint-disable-next-line camelcase
          const elStep1_2 = document.getElementById('id_step1_2')
          if (this.step1) {
            elStep1_1.style = 'tw-border-radius: 100%;background-color: #146EB4;width:25px; tw-text-align:center; color:white'
            elStep1_2.style = 'color: #146EB4'
          } else {
            elStep1_1.style = 'background-color: #C2C2C2;tw-border-radius: 100%;width:25px; tw-text-align:center; color:white'
            elStep1_2.style = 'color: #C2C2C2'
          }

          // eslint-disable-next-line camelcase
          const elStep2_1 = document.getElementById('id_step2_1')
          // eslint-disable-next-line camelcase
          const elStep2_2 = document.getElementById('id_step2_2')
          if (this.step2) {
            elStep2_1.style = 'tw-border-radius: 100%;background-color: #146EB4;width:25px; tw-text-align:center; color:white'
            elStep2_2.style = 'color: #146EB4'
          } else {
            elStep2_1.style = 'background-color: #C2C2C2;tw-border-radius: 100%;width:25px; tw-text-align:center; color:white'
            elStep2_2.style = 'color: #C2C2C2'
          }
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: res.message
          })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      }
    },
    async submit () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('topic_id', this.topic_id)
      formData.append('content_type_id', this.content_type_id)
      formData.append('access_limit', this.access_limit)
      if (this.link_url) {
        formData.append('url', this.link_url)
      } else {
        formData.append('url', this.url)
      }
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$put(`bank-content-topic/${this.$route.params.id}`, formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/content')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: res.message
          })
        }
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      }
    },
    async submitContentQuiz (index, id) {
      const formData = new FormData()
      formData.append('questions', JSON.stringify(this.questions[index]))
      formData.append('content_topic_id', this.$auth.$storage.getLocalStorage('content_topic_id'))
      formData.append('url_question', this.questions[index].url_question)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        let res = null
        if (typeof id === 'undefined') {
          res = await this.$axios.$post('bank-content-question', formData, config)
        } else {
          res = await this.$axios.$put(`bank-content-question/${id}`, formData, config)
        }
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          // this.$router.push('/dashboard/admin/content')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: res.message
          })
        }
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      }
    },
    back () {
      this.$router.push('/dashboard/admin/content')
    },
    checkType () {
      if (this.content_type_id === 1) {
        this.show = true
        this.show_url = false
        this.show_quiz = false
        this.showLimitAccess = true
        this.type_name = 'video'
      } else if (this.content_type_id === 2) {
        this.show = true
        this.show_url = false
        this.show_quiz = false
        this.showLimitAccess = true
        this.type_name = 'pdf'
      } else if (this.content_type_id === 6) {
        this.show = true
        this.show_url = false
        this.show_quiz = false
        this.showLimitAccess = true
        this.type_name = 'image'
      } else if (this.content_type_id === 8) {
        this.show = false
        this.show_url = true
        this.show_quiz = false
        this.showLimitAccess = true
        this.type_name = 'link external'
      } else if (this.content_type_id === 3) {
        this.show = false
        this.show_url = false
        this.show_quiz = true
        this.showLimitAccess = false
      } else if (this.content_type_id === 4) {
        this.show = true
        this.show_url = false
        this.show_quiz = false
        this.showLimitAccess = false
        this.type_name = 'pdf'
      }
    },
    changeremidial () {
      if (parseInt(this.remidial_type, 10) === 13) {
        this.showremidial = true
      } else {
        this.showremidial = false
      }
    },
    changeAttachment () {
      if (!this.questions[this.index].attachment_type || this.questions[this.index].attachment_type === 'null') {
        this.showUploadQuestion = false
      } else {
        this.showUploadQuestion = true
      }
    },
    addQuestion () {
      this.questions.push({
        question_name: '',
        question_type: null,
        attachment_type: null,
        url_question: null,
        explain: '',
        answers: [{ value: '', is_correct: false }]
      })
      this.index++
    },
    addAnswer (index) {
      this.questions[index].answers.push({ value: '', is_correct: false })
      this.index2++
    },
    checkedCorrect (index, idx) {
      const total = this.questions[index].answers.length
      for (let i = 0; i < total; i++) {
        if (i === idx) {
          this.questions[index].answers[i].is_correct = true
        } else {
          this.questions[index].answers[i].is_correct = false
        }
      }
    },
    async deleteQuestion (index, id) {
      this.questions.splice(index, 1)
      await this.$axios.delete(`bank-content-question/${id}`)
    }
  }
}
</script>
