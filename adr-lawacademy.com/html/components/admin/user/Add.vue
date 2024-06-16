<template>
  <!-- <v-app> -->
  <v-card class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2 tw-justify-center">
    <div class="tw-px-12">
      <v-card-title class="tw-text-h5" />
      <div class="tw-flex tw-flex-col tw-mb-2">
        <span class="tw-text-lg tw-font-bold tw-px-2">{{ fullname }}</span>
        <span class="tw-text-xs tw-px-2">Tambah Calon Peserta PKPA ADR</span>
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
            No Whatsapp
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="wa_no" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <hr class="tw-mb-6" style="display:none">
      <div class="md:tw-flex md:tw-items-center tw-mb-6" style="display:none">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Kata Sandi baru
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="pass" type="password" class="tw-form-input tw-w-full">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6" style="display:none">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Konfirmasi Kata Sandi baru
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="password" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <hr class="tw-mb-6">
      <p class="tw-text-xs tw-px-2">
        Pilih Universitas Penyelenggara PKPA
      </p>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Universitas
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <select v-model="university_id" name="state" class="tw-form-select tw-w-full" @change="getphaseuniversitas">
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
            Gelombang
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <select v-model="phase_university_id" name="state" class="tw-form-select tw-w-full">
            <option selected disabled value="">
              Pilih
            </option>
            <option v-for="phs in phase" :key="phs.id" :value="phs.id">
              {{ phs.name }}
            </option>
          </select>
        </div>
      </div>
      <hr class="tw-mb-6">
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Tempat Lahir
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="born_place" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Tanggal Lahir
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="born_date" type="date" class="tw-form-input tw-w-full">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Jenis Kelamin
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <!-- <input v-model="gender" type="text" class="tw-form-input tw-w-full"> -->
          <select v-model="gender" name="district" class="tw-w-1/3 tw-form-select">
            <option selected disabled value="null">
              Pilih
            </option>
            <option value="l">
              Laki-laki
            </option>
            <option value="p">
              Perempuan
            </option>
          </select>
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Provinsi
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <select v-model="state_id" name="state" class="tw-form-select tw-w-full" @change="getCity">
            <option selected disabled value="null">
              Pilih
            </option>
            <option v-for="state in states" :key="state.id" :value="state.id">
              {{ state.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Kab/Kota
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <select v-model="city_id" name="city" class="tw-form-select tw-w-full" @change="getDistrict">
            <option selected disabled value="null">
              Pilih
            </option>
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Desa/Kelurahan
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <select v-model="district_id" name="district" class="tw-form-select tw-w-full">
            <option selected disabled value="null">
              Pilih
            </option>
            <option v-for="district in districts" :key="district.id" :value="district.id">
              {{ district.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            RT/RW
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <div class="tw-flex tw-flex-row tw-items-center">
            <input v-model="rt" type="text" class="tw-form-input tw-w-16">
            &nbsp; / &nbsp;
            <input v-model="rw" type="text" class="tw-form-input tw-w-16">
          </div>
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Alamat Lengkap
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="address" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <hr class="tw-mb-6">
      <p class="tw-text-xs tw-px-2">
        Identitas Universitas Asal
      </p>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Nama Universitas
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="university" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Akreditasi
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="accreditation" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Akreditasi Fakultas Hukum
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input type="text" class="tw-form-input tw-w-full" value="">
        </div>
      </div>
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            Index Prestasi Kumulatif
          </label>
        </div>
        <div class="md:tw-w-2/3">
          <input v-model="ipk" type="text" class="tw-form-input tw-w-full">
        </div>
      </div>
      <hr class="tw-mb-6">
      <!-- cv -->
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            {{ getCVName }}
          </label>
          <img class="tw-w-12 tw-h-12" :src="getCVUrl">
        </div>
        <div class="md:tw-w-2/3">
          <div>
            <label class="tw-inline-flex tw-items-center">
              <input ref="cv" name="file" type="file" @change="handleFilesUploadCV">
            </label>
          </div>
          <a target="_blank" :href="getCVUrl"><span class="tw-text-orange-600">Lihat Detail</span></a>
        </div>
      </div>
      <!-- foto -->
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            {{ getFotoName }}
          </label>
          <img class="tw-w-12 tw-h-12" :src="getFotoUrl">
        </div>
        <div class="md:tw-w-2/3">
          <div>
            <label class="tw-inline-flex tw-items-center">
              <input ref="foto" name="file" type="file" @change="handleFilesUploadFoto">
            </label>
          </div>
          <a target="_blank" :href="getFotoUrl"><span class="tw-text-orange-600">Lihat Detail</span></a>
        </div>
      </div>

      <!-- ijazah -->
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            {{ getIjazahName }}
          </label>
          <img class="tw-w-12 tw-h-12" :src="getIjazahUrl">
        </div>
        <div class="md:tw-w-2/3">
          <div>
            <label class="tw-inline-flex tw-items-center">
              <input ref="ijazah" name="file" type="file" @change="handleFilesUploadIjazah">
            </label>
          </div>
          <a target="_blank" :href="getIjazahUrl"><span class="tw-text-orange-600">Lihat Detail</span></a>
        </div>
      </div>

      <!-- ktp -->
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            {{ getKTPName }}
          </label>
          <img class="tw-w-12 tw-h-12" :src="getKTPUrl">
        </div>
        <div class="md:tw-w-2/3">
          <div>
            <label class="tw-inline-flex tw-items-center">
              <input ref="ktp" name="file" type="file" @change="handleFilesUploadKTP">
            </label>
          </div>
          <a target="_blank" :href="getKTPUrl"><span class="tw-text-orange-600">Lihat Detail</span></a>
        </div>
      </div>

      <!-- Sertifikat Akreditasi -->
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
            {{ getSertifikatAkreditasiName }}
          </label>
          <img class="tw-w-12 tw-h-12" :src="getSertifikatAkreditasiUrl">
        </div>
        <div class="md:tw-w-2/3">
          <div>
            <label class="tw-inline-flex tw-items-center">
              <input ref="sertifikat_akreditasi" name="file" type="file" @change="handleFilesUploadSertifikatAkreditasi">
            </label>
          </div>
          <a target="_blank" :href="getSertifikatAkreditasiUrl"><span class="tw-text-orange-600">Lihat Detail</span></a>
        </div>
      </div>

      <div class="tw-flex tw-justify-center tw-items-center tw-gap-3">
        <button
          class="tw-rounded tw-bg-white tw-border-solid border tw-border-gray-700 tw-border-opacity-100 tw-p-2"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button class="tw-rounded tw-bg-blue-600 tw-p-2 tw-text-white" @click.prevent="submit()">
          Submit
        </button>
      </div>
    </div>
  </v-card>
  <!-- </v-app> -->
</template>

<script>
export default {
  data () {
    return {
      files: [],
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      born_place: '',
      born_date: '',
      born_place_date: '',
      gender: null,
      state_id: null,
      state_name: '',
      city_id: null,
      city_name: '',
      district_id: null,
      district_name: '',
      university_id: null,
      rt: '',
      rw: '',
      address: '',
      university: '',
      accreditation: '',
      ipk: '',
      states: [],
      cities: [],
      districts: [],
      cv: '',
      ktp: '',
      foto: '',
      ijazah: '',
      sertifikat_akreditasi: '',
      getCV: '',
      getCVName: '',
      getCVUrl: '',
      getFoto: '',
      getFotoName: '',
      getFotoUrl: '',
      getIjazah: '',
      getIjazahName: '',
      getIjazahUrl: '',
      getKTP: '',
      getKTPName: '',
      getKTPUrl: '',
      getSertifikatAkreditasi: '',
      getSertifikatAkreditasiName: '',
      getSertifikatAkreditasiUrl: '',
      univercities: [],
      phase: [],
      password: '',
      pass: '',
      phase_university_id: null
    }
  },
  async mounted () {
    const states = await this.$axios.$get('state')
    this.states = states.data.map(obj => ({ id: obj.id, name: obj.name }))
    // this.getCity()
    const cities = await this.$axios.$get(`city/${this.state_id === null ? 0 : this.state_id}`)
    this.cities = cities.data.map(obj => ({ id: obj.id, name: obj.name }))
    this.districts = []

    const districts = await this.$axios.$get(`district/${this.city_id === null ? 0 : this.state_id}`)
    this.districts = districts.data.map(obj => ({ id: obj.id, name: obj.name }))

    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))

    // const phase = await this.$axios.$get(`phase-university/${this.university_id === null ? 0 : this.university_id}`)
    // this.phase = phase.data.map(obj => ({ id: obj.id, name: obj.name }))
    // this.districts = []

    this.password = Math.random().toString(36).slice(-8)
  },
  methods: {
    async getState () {
      const states = await this.$axios.$get('state')
      this.states = states.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    async getCity () {
      const cities = await this.$axios.$get(`city/${this.state_id}`)
      this.cities = cities.data.map(obj => ({ id: obj.id, name: obj.name }))
      this.districts = []
    },
    async getDistrict () {
      const districts = await this.$axios.$get(`district/${this.city_id}`)
      this.districts = districts.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    async getphaseuniversitas () {
      const phase = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
      this.phase = phase.data.data.map(obj => ({ id: obj.id, name: obj.name }))
      const arrPhase = []
      this.phase.forEach((element, index) => {
        if (element.status === 'Daftar') {
          arrPhase.unshift(element)
        } else if (element.status == 'Ditutup') {
          arrPhase.splice(index, 1)
        } else {
          arrPhase.push(element)
        }
      })
      this.phase = arrPhase
    },
    isEmailValid () {
      return (this.email === '') ? '' : (this.reg.test(this.email)) ? 'has-success' : 'has-error'
    },
    async submit () {
      // console.log(this.born_place)
      // console.log(this.born_date)
      try {
        const formData = new FormData()
        formData.append('cv', this.cv)
        formData.append('ktp', this.ktp)
        formData.append('foto', this.foto)
        formData.append('ijazah', this.ijazah)
        formData.append('sertifikat_akreditasi', this.sertifikat_akreditasi)
        formData.append('fullname', this.fullname)
        formData.append('email', this.email)
        formData.append('phone_no', this.phone_no)
        formData.append('wa_no', this.wa_no)
        formData.append('password', this.password)
        formData.append('gender', this.gender)
        formData.append('born_place', this.born_place)
        formData.append('born_date', this.born_date)
        formData.append('address', this.address)
        formData.append('rt', this.rt)
        formData.append('rw', this.rw)
        formData.append('village', this.village)
        formData.append('district_id', this.district_id)
        formData.append('city_id', this.city_id)
        formData.append('state_id', this.state_id)
        formData.append('university', this.university)
        formData.append('accreditation', this.accreditation)
        formData.append('ipk', this.ipk)
        formData.append('university_id', this.university_id)
        formData.append('phase_university_id', this.phase_university_id)
        // console.log(this.fullname)
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        const res = await this.$axios.$post('user/createUserByAdmin', formData, config)
        // console.log(res)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/registrant')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            html: res.message
          })
        }
        // location.reload()
      } catch (e) {
        console.log(e)
        this.error = e.message
        this.$swal(
          'Oops...',
          'Something went wrong!',
          this.error
        )
      }
    },
    handleFilesUploadCV () {
      this.cv = this.$refs.cv.files[0]
      // console.log(this.cv)
    },
    handleFilesUploadKTP () {
      this.ktp = this.$refs.ktp.files[0]
    },
    handleFilesUploadFoto () {
      this.foto = this.$refs.foto.files[0]
    },
    handleFilesUploadIjazah () {
      this.ijazah = this.$refs.ijazah.files[0]
    },
    handleFilesUploadSertifikatAkreditasi () {
      this.sertifikat_akreditasi = this.$refs.sertifikat_akreditasi.files[0]
    }
  }
}
</script>
