<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5">
            Edit Gelombang
          </v-card-title>
          <v-divider />
          <v-form>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Universitas</label><br>
                <span class="tw-text-sm tw-text-gray-400">Atur dan pilih universitas</span>
              </div>
              <div class="tw-col-span-2">
                <select v-model="university_id" class="tw-w-2/3 tw-form-select" :disabled="loggedInUser.university_id" @change="getPhaseUniversity">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="unv in universities" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Gelombang</label><br>
                <span class="tw-text-sm tw-text-gray-400">Pilih gelombang yang ada</span>
              </div>
              <div class="tw-col-span-2">
                <select v-model="phase_id" name="phase" class="tw-form-select tw-w-2/3" @change="changePhase">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="phs in phases" :key="phs.id" :value="phs.id">
                    {{ phs.name }}
                  </option>
                </select>
              </div>
            </div>
            <div v-show="showPhase" class="tw-grid tw-grid-cols-3 tw-px-3">
              <div class="tw-rounded-none tw-bg-gray-300 tw-px-2 tw-col-span-1">
                <span>{{ phaseDetail[0]?phaseDetail[0].name:'' }}</span><br>
                <span>Periode Pendaftaran {{ phaseDetail[0]?$moment(phaseDetail[0].register_period_start).format('DD MMM'):'' }} - {{ phaseDetail[0]?$moment(phaseDetail[0].register_period_end).format('DD MMM YYYY'):'' }}</span><br>
                <span>Periode Pembelajaran {{ phaseDetail[0]?$moment(phaseDetail[0].learning_period_start).format('DD MMM'):'' }} - {{ phaseDetail[0]?$moment(phaseDetail[0].learning_period_end).format('DD MMM YYYY'):'' }}</span><br>
              </div>
            </div>
            <!-- <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
          <div class="tw-col-span-3">
            <label class="tw-text-12">Kategori</label><br>
            <span class="tw-text-sm tw-text-gray-400">Pilih kategori</span>
          </div>
          <div class="tw-col-span-2">
            <select v-model="category_id" name="category" class="tw-form-input tw-w-2/3" @change="changeCategory">
              <option selected disabled value="null">
                Pilih
              </option>
              <option v-for="phs in categories" :key="phs.id" :value="phs.id">
                {{ phs.name }}
              </option>
            </select>
          </div>
        </div> -->
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Mata Kuliah</label><br>
                <span class="tw-text-sm tw-text-gray-400">Pilih Mata Kuliah</span>
              </div>
              <div v-for="(item, index) in tempCourses" :key="index" class="tw-col-span-2">
                <div class="tw-flex tw-flex-row">
                  <select v-model="item.course_id" name="course" class="tw-form-select tw-w-2/3">
                    <option selected disabled value="null">
                      Pilih
                    </option>
                    <option v-for="c in courses" :key="c.id" :value="c.id">
                      {{ c.name }}
                    </option>
                  </select>
                  <v-icon class="tw-ml-2" @click="tempCourses.splice(index, 1)">
                    mdi-trash-can
                  </v-icon>
                </div>
              </div>
              <br>
              <div class="md:tw-w-1/12">
                <v-btn
                  class="tw-py-4"
                  color="#fffff"
                  @click="addCourse()"
                >
                  Add Topik
                </v-btn>
              </div>
            </div>
            <v-divider />
            <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
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
                @click.prevent="submit"
              >
                Simpan
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      university_id: null,
      universities: [],
      phase_id: null,
      phases: [],
      // categories: [],
      // category_id: null,
      showPhase: false,
      phaseDetail: {},
      tempCourses: [{ course_id: null }],
      courses: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const res = await this.$axios.$get(`show-course/${this.$route.params.id}`)
    this.university_id = res.data[0].university_id
    this.phase_id = res.data[0].phase_id
    this.category_id = res.data[0].content_category_id

    this.tempCourses = res.data.map(item => ({ course_id: item.course_id }))

    const res4 = await this.$axios.$get(`course/?phase_id=${this.phase_id}`)
    this.courses = res4.data.data.map(item => ({ id: item.id, name: item.name }))
    const res5 = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
    this.phases = res5.data.data.map(obj => ({ id: obj.id, name: obj.name, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end }))
    const arrPhase = []
    this.phases.forEach((element, index) => {
      if (element.status === 'Daftar') {
        arrPhase.unshift(element)
      } else if (element.status == 'Ditutup') {
	      arrPhase.splice(index, 1)
      } else {
        arrPhase.push(element)
      }
    })
    this.phases = arrPhase
    if (this.phase_id !== 'null') {
      this.showPhase = true
      this.phaseDetail = this.phases.filter(item => item.id === this.phase_id)
    } else {
      this.showPhase = false
    }
    const univercities = await this.$axios.$get('university')
    this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      this.getPhaseUniversity()
    }
    // const res3 = await this.$axios.$get(`phase-university/${this.university_id}`)
    // this.phases = res3.data

    // const res2 = await this.$axios.$get('bank-content-category')
    // this.categories = res2.data.data.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      const data = {
        courses: JSON.stringify(this.tempCourses),
        phase_id: this.phase_id
      }
      try {
        const res = await this.$axios.$put(`show-course/${this.$route.params.id}`, data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/manage-batch')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getPhaseUniversity () {
      const res = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
      this.phases = res.data.data.map(obj => ({ id: obj.id, name: obj.name, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end }))
    },
    async changePhase () {
      if (this.phase_id !== 'null') {
        this.showPhase = true
        this.phaseDetail = this.phases.filter(item => item.id === this.phase_id)
        try {
          const res = await this.$axios.$get(`course/?phase_id=${this.phase_id}`)
          this.courses = res.data.data.map(item => ({ id: item.id, name: item.name }))
        } catch (err) {
          this.courses = []
        }
      } else {
        this.showPhase = false
      }
    },
    // async changeCategory () {
    //   try {
    //     const res = await this.$axios.$get(`course/?phase_id=${this.phase_id}&content_category_id=${this.category_id}`)
    //     this.courses = res.data.data.map(item => ({ id: item.id, name: item.name }))
    //   } catch (err) {
    //     this.courses = []
    //   }
    // },
    addCourse () {
      this.tempCourses.push({
        course_id: null
      })
    },
    back () {
      this.$router.push('/dashboard/admin/manage-batch')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
