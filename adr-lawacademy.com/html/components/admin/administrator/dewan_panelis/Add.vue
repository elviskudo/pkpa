<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-xl tw-px-2">Tambah Dewan Panelis</span>
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
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Mata Kuliah
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="matakuliah_id" name="state" class="tw-form-select tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
            <!-- <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="univercities == id">
              {{ unv.name }}
            </option> -->
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
            <select v-model="matakuliah_id" name="state" class="tw-form-select tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
            <!-- <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="univercities == id">
              {{ unv.name }}
            </option> -->
            </select>
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Tipe
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="matakuliah_id" name="state" class="tw-form-select tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
            <!-- <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="univercities == id">
              {{ unv.name }}
            </option> -->
            </select>
          </div>
        </div>
      </div>
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
            @click="submit()"
          >
            Simpan Perubahan
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
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      university_id: 0,
      univercities: [],
      role: 'panelis'
    }
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      const data = {
        fullname: this.fullname,
        email: this.email,
        phone_no: this.phone_no,
        wa_no: this.wa_no,
        university_id: this.university_id,
        role: this.role
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
          this.$router.push('/dashboard/admin/administrator/admin-univ?tab=panelis')
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops..',
          text: 'Something wrong!'
        })
        this.$router.push(this.$route.path)
      }
    }
  }
}
</script>
