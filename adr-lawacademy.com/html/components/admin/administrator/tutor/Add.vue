<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-xl tw-px-2">Tambah Tutor</span>
        </div>
        <hr class="tw-mb-6">
      </div>
      <div class="tw-px-12">
        <div class="md:tw-flex md:tw-items-center tw-mb-6 form-group">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Nama Lengkap
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="fullname" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Email
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="email" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Telepon
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="phone_no" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Nomor WA
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="wa_no" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Pilih Universitas
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="university_id" name="state" class="tw-form-select tw-w-full" :disabled="loggedInUser.university_id" @change="getCourse">
              <option selected disabled value="null">
                Pilih
              </option>
              <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                {{ unv.name }}
              </option>
            </select>
          </div>
        </div>
        <!-- <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Gelombang
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="phase_university_id" name="state" class="tw-form-input tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="phs in phase" :key="phs.id" :value="phs.id">
                {{ phs.name }}
              </option>
            </select>
          </div>
        </div> -->
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="tw-w-full">
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, index) in itemsTopic" :key="index" expand>
                <v-expansion-panel-header color="blue-grey lighten-2">
                  Pilih Matakuliah
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="tw-grid tw-grid-cols-3 tw-py-2">
                    <div class="tw-col-span-3">
                      <label class="tw-font-semibold">Matakuliah</label>
                    </div>
                    <div class="tw-col-span-2">
                      <select v-model="item.matakuliah_id" name="state" class="tw-form-select tw-w-full">
                        <option selected disabled value="null">
                          Pilih
                        </option>
                        <option v-for="unv in matakuliah" :key="unv.id" :value="unv.id">
                          {{ unv.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </v-expansion-panel-content>
                <v-icon class="tw-ml-2" @click="itemsTopic.splice(index, 1)">
                  mdi-trash-can
                </v-icon>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
        <div class="md:tw-w-1/12">
          <v-btn
            class="tw-py-4"
            color="#fffff"
            @click="addTopic()"
          >
            Add Matakuliah
          </v-btn>
        </div>
      </div>
      <hr class="tw-mb-6">
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <button
            class="tw-rounded tw-bg-slate-400 tw-border-solid border tw-border-gray-700 tw-border-opacity-100 tw-p-2"
            @click="$router.go(-1)"
          >
            Kembali
          </button>
          <button
            class="tw-rounded tw-bg-blue-600 tw-p-2 tw-text-white"
            @click="submit"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    // VsModal
  },
  data () {
    return {
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      university_id: null,
      // phase_university_id: 0,
      univercities: [],
      role: 'tutor',
      // phase: [],
      matakuliah: [],
      itemsTopic: [{
        matakuliah_id: null
      }]
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      const mt = await this.$axios.$get(`bank-course/?university_id=${this.university_id}`)
      this.matakuliah = mt.data.data.map(obj => ({ id: obj.id, name: obj.name }))
    }
  },
  methods: {
    async submit () {
      const data = {
        fullname: this.fullname,
        email: this.email,
        phone_no: this.phone_no,
        wa_no: this.wa_no,
        university_id: this.university_id,
        role: this.role,
        // phase_university_id: this.phase_university_id,
        courses: JSON.stringify(this.itemsTopic)
      }
      try {
        const res = await this.$axios.$post('user', data)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            html: res.message.join('<br>').toString()
          })
          this.$router.push(this.$route.path)
        } else {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/administrator/admin-univ?tab=tutor')
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Warning',
          text: 'Gelombang tidak ditemukan atau telah ditutup'
        })
        this.$router.push(this.$route.path)
      }
    },
    async getCourse () {
      const mt = await this.$axios.$get(`bank-course/?university_id=${this.university_id}`)
      this.matakuliah = mt.data.data.map(obj => ({ id: obj.id, name: obj.name }))
      // const phase = await this.$axios.$get(`phase-university/${this.university_id}`)
      // this.phase = phase.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    addTopic () {
      this.itemsTopic.push({
        matakuliah_id: null
      })
    }
  }
}
</script>
