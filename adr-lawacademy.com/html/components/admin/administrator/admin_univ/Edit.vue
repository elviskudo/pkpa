<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-xl tw-px-2">Edit Admin Universitas</span>
        </div>
        <hr class="tw-mb-6">
      </div>
      <div class="tw-px-12">
        <input v-model="id" type="hidden" class="tw-form-input tw-w-full">
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
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Pilih Universitas
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="university_id" name="state" class="tw-form-select tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="univercities == id">
                {{ unv.name }}
              </option>
            </select>
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Kata Sandi baru
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="pass" :type="hide" class="tw-form-input tw-w-full">
            <div v-if="hide =='password'" class="toggle-password" @click="switchhidepass">
              <i class="fa fa-eye-slash tw-flex float-right -tw-mt-8 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
            </div>
            <div v-if="hide =='text'" class="toggle-password" @click="switchshowpass">
              <i class="fa fa-eye tw-flex float-right -tw-mt-8 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Konfirmasi Kata Sandi baru
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="password" :type="visibility" class="tw-form-input tw-w-full">
            <div v-if="visibility =='password'" class="toggle-password" @click="switchhide">
              <i class="fa fa-eye-slash tw-flex float-right -tw-mt-8 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
            </div>
            <div v-if="visibility =='text'" class="toggle-password" @click="switchshow">
              <i class="fa fa-eye tw-flex float-right -tw-mt-8 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
            </div>
          </div>
        <!-- <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span> -->
        </div>
      </div>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <button
            class="tw-rounded tw-bg-slate-400 tw-border-solid border tw-border-gray-700 tw-border-opacity-100 tw-p-2"
            @click="$router.go(-1)"
          >
            Cancel
          </button>
          <button class="tw-rounded tw-bg-blue-600 tw-p-2 tw-text-white" @click="submit()">
            Submit
          </button>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      password: '',
      pass: '',
      university_id: 0,
      univercities: [],
      visibility: 'password',
      hide: 'password'
    }
  },
  async mounted () {
    const user = await this.$axios.$get(`/user/${this.$route.params.id}`)
    // console.log(user)
    this.id = user.data[0].id
    this.fullname = user.data[0].fullname
    this.email = user.data[0].email
    this.phone_no = user.data[0].phone_no
    this.wa_no = user.data[0].wa_no
    this.university_id = user.data[0].university_id

    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    switchhide () {
      this.visibility = 'text'
    },
    switchshow () {
      this.visibility = 'password'
    },
    switchhidepass () {
      this.hide = 'text'
    },
    switchshowpass () {
      this.hide = 'password'
    },
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
    async submit () {
      try {
        const data = {
          fullname: this.fullname,
          email: this.email,
          phone_no: this.phone_no,
          wa_no: this.wa_no,
          password: this.password,
          university_id: this.university_id
        }
        const res = await this.$axios.$put(`user/update-admin-univ/${this.$route.params.id}`, data)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        } else {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/administrator/admin-univ')
        }
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: 'Konfirmasi',
          text: 'Data harus diisi!'
        })
        this.error = e.response.data.message
      }
    }
  }
}
</script>
