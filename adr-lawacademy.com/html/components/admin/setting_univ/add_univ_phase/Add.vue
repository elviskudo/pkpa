<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Tambah Gelombang
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="university_id" class="tw-w-2/3 tw-form-select" @change="getCount">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Nomor Gelombang
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="phase_no"
                  type="text"
                  name="name"
                  class="tw-form-input"
                >
                <input
                  v-model="slug"
                  type="hidden"
                  name="name"
                  class="tw-form-input"
                  readonly
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Tahun
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="year"
                  type="text"
                  name="name"
                  class="tw-form-input"
                  maxlength="5"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Mulai Gelombang Pendaftaran
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="register_period_start"
                  type="date"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Akhir Gelombang Pendaftaran
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="register_period_end"
                  type="date"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Mulai Periode Belajar
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="learning_period_start"
                  type="date"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Akhir Periode Belajar
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="learning_period_end"
                  type="date"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Sistem Belajar
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="sistem_belajar" class="tw-w-2/3 tw-form-select">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option value="Online">
                    Online
                  </option>
                  <option value="Blended Learning">
                    Blended Learning
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Aktif
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <div class="">
                  <v-switch
                    v-model="is_active"
                    flat
                    :label="is_active?'Aktif':'Non-Aktif'"
                  />
                </div>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Status Pendaftaran
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="status" class="tw-w-2/3 tw-form-select">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option value="Akan Datang">
                    Akan Datang
                  </option>
                  <option value="Daftar">
                    Daftar
                  </option>
                  <option value="Ditutup">
                    Ditutup
                  </option>
                </select>
              </div>
            </div>
            <v-divider />
            <div class="tw-flex tw-flex-row tw-py-4">
              <v-btn
                class="tw-px-4 tw-py-4 tw-w-1/5 left-2/5"
                color="#fffff"
                @click="back()"
              >
                Kembali
              </v-btn>
              <v-btn
                type="submit"
                class="tw-px-4 tw-py-4 tw-w-1/5 left-2/4"
                color="#C2C2C2"
                @click="submit"
              >
                Simpan
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-app>
</template>
<script>
// import { confirmed } from 'vee-validate/dist/rules'
// import DateRangePicker from 'vue2-daterange-picker'
export default {
  // components: { DateRangePicker },
  data () {
    return {
      university_id: '',
      sistem_belajar: '',
      phase_no: '',
      year: '',
      register_period_start: '',
      register_period_end: '',
      learning_period_start: '',
      learning_period_end: '',
      slug: '',
      is_active: false,
      status: '',
      univercities: []
    }
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))

    const resx = await this.$axios.$get(`university/${this.university_id}`)
    this.slug = resx.data.slug
  },
  methods: {
    async submit () {
      const phaseuniversity = {
        university_id: this.university_id,
        name: 'Gelombang ' + this.phase_no,
        phase_no: this.phase_no,
        register_period_start: this.register_period_start,
        register_period_end: this.register_period_end,
        learning_period_start: this.learning_period_start,
        learning_period_end: this.learning_period_end,
        slug: this.slug + '-' + this.phase_no,
        year: this.year,
        sistem_belajar: this.sistem_belajar,
        system: this.sistem_belajar,
        is_active: this.is_active,
        status: this.status
      }
      try {
        const res = await this.$axios.$post('phase-university', phaseuniversity)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/dashboard/admin/setting-univ/add')
            }
          })
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
    async getCount () {
      const res = await this.$axios.$get(`phase-university/phase-count/${this.university_id}`)
      this.phase_no = res.data[0].phase

      const resx = await this.$axios.$get(`university/${this.university_id}`)
      this.slug = resx.data.slug
    },
    back () {
      this.$router.push('/dashboard/admin/setting-univ/add')
    }
  }
}
</script>
