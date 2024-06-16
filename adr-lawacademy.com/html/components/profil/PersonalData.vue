<template>
  <v-app>
    <div class="tw-mr-5 tw-ml-5 tw-mt-5">
      <div class="">
        <!-- <h1>
        <a href="#" class="tw-p-4 tw-text-lg">Session Online</a>
      </h1> -->
        <div
          class=""
        >
          <!-- <Notification v-if="error" :message="error" /> -->
          <v-card-title class="text-h5 px-12">
            Data Pribadi
          </v-card-title>
          <v-form
            ref="form"
            lazy-validation
          >
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Tempat Lahir
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <input
                  v-model="born_place"
                  name="born_place"
                  class="tw-form-input tw-w-full lg:tw-w-2/4"
                  type="text"
                  placeholder=""
                >
                <!-- <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span> -->
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Tanggal Lahir
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <input
                  v-model="born_date"
                  name="born_date"
                  class="tw-form-input tw-w-full lg:tw-w-2/4"
                  type="date"
                  placeholder=""
                >
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Jenis Kelamin
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <!-- <div class="tw-col-span-3 md:tw-col-span-2">
                  <input v-model="gender" type="radio" name="gender" :value="user.gender">
                  <label>Laki-laki</label>
                  <input v-model="gender" type="radio" name="gender" :value="user.gender">
                  <label>Perempuan</label>
                </div> -->
                <select v-model="gender" name="district" class="tw-w-full tw-form-select lg:tw-w-2/4">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option value="l" :selected="gender=='l'">
                    Laki-laki
                  </option>
                  <option value="p" :selected="gender=='p'">
                    Perempuan
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Provinsi
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <select v-model="state_id" name="state" class="tw-form-select lg:tw-w-2/4 tw-w-full" @change="getCity">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="state in states" :key="state.id" :value="state.id">
                    {{ state.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Kota/Kab
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <select v-model="city_id" name="city" class="tw-form-select lg:tw-w-2/4 tw-w-full" @change="getDistrict">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="city in cities" :key="city.id" :value="city.id">
                    {{ city.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Kecamatan
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <select v-model="district_id" name="district" class="tw-form-select lg:tw-w-2/4 tw-w-full">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="district in districts" :key="district.id" :value="district.id">
                    {{ district.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Desa/Kelurahan
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <input v-model="village" name="village" class="tw-form-input lg:tw-w-2/4 tw-w-full" type="text" placeholder="">
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  RT
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <input v-model="rt" name="rt" class="tw-form-input lg:tw-w-2/4 tw-w-full" type="text" placeholder="">
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  RW
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <input v-model="rw" name="rw" class="tw-form-input lg:tw-w-2/4 tw-w-full" type="text" placeholder="">
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 sm:tw-px-12 tw-mb-4">
              <div class="tw-flex tw-items-center tw-col-span-3 md:tw-col-span-1">
                <label class="tw-block tw-text-gray-500 tw-font-bold tw-mb-1 md:tw-mb-0 tw-pr-4">
                  Alamat Lengkap
                </label>
              </div>
              <div class="tw-col-span-3 md:tw-col-span-2">
                <textarea
                  v-model="address"
                  name="address"
                  class="tw-form-input lg:tw-w-2/4 tw-w-full"
                  rows="4"
                  placeholder=""
                />
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-px-12 tw-mb-10">
              <v-btn
                color="#FF9900 !important"
                class=""
                @click="submit"
              >
                Simpan Perubahan
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import VsModal from '@vuesimple/vs-modal'
// import { ValidationObserver, ValidationProvider } from 'vee-validate'
// import Notification from '~/components/Notification'
export default {
  data () {
    return {
      born_place: '',
      address: '',
      born_date: '',
      gender: null,
      rt: '',
      rw: '',
      village: '',
      district_id: null,
      city_id: null,
      state_id: null,
      // state_id: 0,
      states: [],
      cities: [],
      districts: [],
      error: '',
      user: [],
      items: [
        ['mdi-book-open-blank-variant', 'Informasi Umum', 'modal1'],
        ['mdi-access-point', 'Data Pribadi', 'modal2'],
        ['mdi-dots-hexagon', 'Ubah Kata Sandi', 'modal3'],
        ['mdi-certificate', 'Informasi Universitas', 'modal4'],
        ['mdi-progress-check', 'Unggah Dokumen', 'modal5']
      ],
      jk: ['Laki-Laki', 'Perempuan']
    }
  },
  async mounted () {
    const user = await this.$axios.$get('/user/user')
    this.born_place = user.data[0].born_place
    this.born_date = user.data[0].born_date
    this.born_place_date = user.data[0].born_place + ', ' + user.data[0].born_date
    this.gender = user.data[0].gender
    console.log(this.gender)
    this.state_id = user.data[0].state_id
    this.state_name = user.data[0].state_name
    this.city_id = user.data[0].city_id
    this.city_name = user.data[0].city_name
    this.district_id = user.data[0].district_id
    this.district_name = user.data[0].district_name
    this.rt = user.data[0].rt
    this.rw = user.data[0].rw
    this.address = user.data[0].address
    this.village = user.data[0].village

    try {
      const states = await this.$axios.$get('state')
      this.states = states.data.map(obj => ({ id: obj.id, name: obj.name, state_id: obj.state_id }))

      const cities = await this.$axios.$get('city/' + user.data[0].state_id)
      this.cities = cities.data.map(obj => ({ id: obj.id, name: obj.name }))
      // this.districts = []

      const districts = await this.$axios.$get('district/' + user.data[0].city_id)
      this.districts = districts.data.map(obj => ({ id: obj.id, name: obj.name }))
    } catch (err) {
      // console.log(err)
    }
  },
  methods: {
    openModal (ref) {
      this.$refs[ref].open()
    },

    closeModal (ref) {
      this.$refs[ref].close()
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
      const data = {
        born_place: this.born_place,
        address: this.address,
        born_date: this.born_date,
        gender: this.gender,
        rt: this.rt,
        rw: this.rw,
        village: this.village,
        district_id: this.district_id,
        city_id: this.city_id,
        state_id: this.state_id
      }
      // console.log(data)
      // const res = ''
      try {
        const res = await this.$axios.$put('/user', data)
        // console.log(res)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
        // const user = await this.$axios.$get('/user/user')
        // this.$auth.setUser(user.data)
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'Oke'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
          // .then((result) => {
          //   /* Read more about isConfirmed, isDenied below */
          //   if (result.isConfirmed) {
          //     location.reload()
          //   }
          // })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #E5E5E5 !important; */
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
 .container {
    height: auto;
    width: 1000px;
    // background-color:#ffffff;
  }
</style>
