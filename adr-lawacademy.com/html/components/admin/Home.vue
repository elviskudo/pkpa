<template>
  <v-card
    class="tw-mx-auto"
  >
    <div class="tw-w-full tw-flex tw-flex-row tw-px-4">
      <div class="tw-w-1/2 tw-py-2">
        Ringkasan Kelas Mitra
      </div>
      <div class="tw-w-1/3">
        <div class="tw-col-span-2">
          <select v-model="university_id" class="tw-w-2/3 tw-form-select" :disabled="loggedInUser.university_id" @change="getPhaseUniversity">
            <option selected value="">
              Pilih
            </option>
            <option v-for="unv in universities" :key="unv.id" :value="unv.id">
              {{ unv.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="tw-w-1/3">
        <div class="tw-col-span-2">
          <select v-model="phase_id" name="phase" class="tw-form-select tw-w-2/3" @click="getdataPhase">
            <option selected value="">
              Pilih
            </option>
            <option v-for="phs in phases" :key="phs.id" :value="phs.id">
              {{ phs.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <input
      v-model="idUniv"
      type="hidden"
      class="tw-form-input tw-w-2/3"
    >
    <v-divider class="tw-pb-4" />
    <diV v-for="item in total_all" :key="item.id_univ" class="tw-px-4">
      <div class="tw-grid tw-grid-cols-3 tw-pb-4 tw-items-center">
        <div>
          <div class="tw-flex tw-flex-row">
            <img src="~/assets/images/icon/ic_baseline-local-library.png"> Total Mahasiswa
          </div>
          <h1 class="tw-text-orange-500 tw-text-2xl">
            {{ item.total_mhs }}
          </h1>
          <span class="tw-text-sm tw-text-gray-500">+2 Mahasiswa baru</span>
        </div>
        <div>
          <div class="tw-flex tw-flex-row">
            <img src="~/assets/images/icon/ic_baseline-local-library.png"> Total Pengguna
          </div>
          <h1 class="tw-text-orange-500 tw-text-2xl">
            {{ item.total_pengguna }}
          </h1>
          <span class="tw-text-sm tw-text-gray-500">+10 Pengguna baru</span>
        </div>
        <div>
          <div class="tw-flex tw-flex-row">
            <img src="~/assets/images/icon/ic_baseline-local-library.png"> Total Gelombang
          </div>
          <h1 class="tw-text-orange-500 tw-text-2xl">
            {{ item.total_phase }}
          </h1>
        </div>
      </div>
    </div>

    <!-- <v-divider /> -->
    <div class="">
      <div class="tw-w-full tw-bg-white tw-border-t tw-border-b tw-border-gray-200 tw-px-5 tw-py-10 tw-text-gray-800">
        <div class="tw-w-full">
          <div class="-tw-mx-3 md:tw-flex tw-items-start">
            <div class="tw-px-3 md:tw-w-2/4 lg:tw-pr-10">
              <div class="tw-shadow-2xl tw-border-gray-400">
                <Barchart />
              </div>
            </div>
            <div class="tw-px-3 md:tw-w-2/4">
              <div class="tw-shadow-2xl tw-border-gray-400">
                <Piechart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- <statistic-user /> -->
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
// import StatisticUser from '../admin/dashboard/StatisticUser.vue'
import Barchart from '../chart/HighChart.vue'
import Piechart from '../chart/PIeChart.vue'
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange-500', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]
export default {
  components: { Barchart, Piechart },
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    universities: [],
    university_id: '',
    phase_id: '',
    phases: [],
    total_all: [],
    idUniv: '',
    daysArray: [],
    receivedMessagescountsArray: [],
    pieArray: []
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.universities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      this.getPhaseUniversity()
    }

    const res = await this.$axios.$get('bank-content-category')
    this.categories = res.data.data.map(obj => ({ id: obj.id, name: obj.name }))

    const resx = await this.$axios.$get('dashboard')
    this.total_all = resx.data.map(obj => ({ total_mhs: obj.total_mhs, total_pengguna: obj.total_pengguna, total_phase: obj.total_phase, new_stu: obj.new_stu, new_user: obj.new_user, id_univ: obj.id_univ, phase_id: obj.phase_id, name: obj.name }))

    const resxx = await this.$axios.$get('dashboard/userlogin')
    // console.log(resxx)
    this.daysArray = []
    this.receivedMessagescountsArray = []
    for (let i = 0; i < resxx.data.length; i++) {
      this.daysArray.push(resxx.data[i].param)
      this.receivedMessagescountsArray.push(parseInt(resxx.data[i].user_login))
    }
    // console.log(this.daysArray)
    this.$store.commit('dashboardLine/setTimeCategory', this.daysArray)
    this.$store.commit('dashboardLine/setValueCategory', this.receivedMessagescountsArray)

    const userPie = await this.$axios.$get('dashboard/userpie')
    this.pieArray = []
    for (let i = 0; i < userPie.data.length; i++) {
      const item = {}
      item.name = userPie.data[i].status
      item.y = parseInt(userPie.data[i].total)
      this.pieArray.push(item)
    }
    this.$store.commit('dashboardPie/setValueCategory', this.pieArray)
  },
  methods: {
    async getPhaseUniversity () {
      try {
        const res = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
        this.phases = res.data.data.map(obj => ({ id: obj.id, name: obj.name, register_period_start: obj.register_period_start, register_period_end: obj.register_period_end, learning_period_start: obj.learning_period_start, learning_period_end: obj.learning_period_end }))

        this.idUniv = this.university_id
        const resx = await this.$axios.$get(`dashboard/?university_id=${this.university_id}`)
        this.total_all = resx.data.map(obj => ({ total_mhs: obj.total_mhs, total_pengguna: obj.total_pengguna, total_phase: obj.total_phase, new_stu: obj.new_stu, new_user: obj.new_user, id_univ: obj.id_univ, phase_id: obj.phase_id, name: obj.name }))

        const resxx = await this.$axios.$get(`dashboard/userlogin/?university_id=${this.university_id}`)
        this.daysArray = []
        this.receivedMessagescountsArray = []
        for (let i = 0; i < resxx.data.length; i++) {
          this.daysArray.push(resxx.data[i].param)
          this.receivedMessagescountsArray.push(parseInt(resxx.data[i].user_login))
        }
        // console.log(this.daysArray)
        this.$store.commit('dashboardLine/setTimeCategory', this.daysArray)
        this.$store.commit('dashboardLine/setValueCategory', this.receivedMessagescountsArray)

        const userPie = await this.$axios.$get(`dashboard/userpie/?university_id=${this.university_id}`)
        this.pieArray = []
        for (let i = 0; i < userPie.data.length; i++) {
          const item = {}
          item.name = userPie.data[i].status
          item.y = parseInt(userPie.data[i].total)
          this.pieArray.push(item)
        }
        this.$store.commit('dashboardPie/setValueCategory', this.pieArray)
      } catch (err) {
        // console.log(err)
      }
    },
    async getdataPhase () {
      const resx = await this.$axios.$get(`dashboard/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.total_all = resx.data.map(obj => ({ total_mhs: obj.total_mhs, total_pengguna: obj.total_pengguna, total_phase: obj.total_phase, new_stu: obj.new_stu, new_user: obj.new_user, id_univ: obj.id_univ, phase_id: obj.phase_id, name: obj.name }))
      this.$auth.$storage.setLocalStorage('phase_id', this.phase_id)

      const resxx = await this.$axios.$get(`dashboard/userlogin/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.daysArray = []
      this.receivedMessagescountsArray = []
      for (let i = 0; i < resxx.data.length; i++) {
        this.daysArray.push(resxx.data[i].param)
        this.receivedMessagescountsArray.push(parseInt(resxx.data[i].user_login))
      }
      // console.log(this.daysArray)
      this.$store.commit('dashboardLine/setTimeCategory', this.daysArray)
      this.$store.commit('dashboardLine/setValueCategory', this.receivedMessagescountsArray)

      const userPie = await this.$axios.$get(`dashboard/userpie/?university_id=${this.university_id}&phase_id=${this.phase_id}`)
      this.pieArray = []
      for (let i = 0; i < userPie.data.length; i++) {
        const item = {}
        item.name = userPie.data[i].status
        item.y = parseInt(userPie.data[i].total)
        this.pieArray.push(item)
      }
      this.$store.commit('dashboardPie/setValueCategory', this.pieArray)
    }
  }
}
</script>
