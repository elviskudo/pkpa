<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-lg tw-font-bold tw-px-2">{{ fullname }}</span>
        <!-- <span class="tw-text-xs tw-px-2">Calon Peserta PKPA ADR</span> -->
        </div>
        <hr class="tw-mb-6">
      </div>
      <div class="tw-px-12">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Nama Lengkap
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ fullname }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Email
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ email }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Telepon
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ phone_no }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Whatsapp
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ wa_no }}
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Tempat Tanggal Lahir
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ born_place }}, {{ born_date }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Jenis Kelamin
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ gender }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Provinsi
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ state_name }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Kab/Kota
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ city_name }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Desa/Kelurahan
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ district_name }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              RT/RW
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ rt }}/{{ rw }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Alamat Lengkap
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ address }}
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Nama Universitas
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ university }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Akreditasi
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ accreditation }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Akreditasi Fakultas Hukum
            </label>
          </div>
          <div class="md:tw-w-2/3">
            0811111111
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Index Prestasi Kumulatif
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ ipk }}
          </div>
        </div>
      </div>
    </v-card>
  </v-app>
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
      gender: '',
      state_name: '',
      city_name: '',
      district_name: '',
      rt: '',
      rw: '',
      address: '',
      university: '',
      accreditation: '',
      ipk: ''
    }
  },
  async fetch () {
    const user = await this.$axios.$get(`/user/${this.$route.params.id}`)
    this.fullname = user.data[0].fullname
    this.email = user.data[0].email
    this.phone_no = user.data[0].phone_no
    this.wa_no = user.data[0].wa_no
    this.born_place = user.data[0].born_place
    this.born_date = user.data[0].born_date
    this.gender = user.data[0].gender
    this.state_name = user.data[0].state_name
    this.city_name = user.data[0].city_name
    this.district_name = user.data[0].district_name
    this.rt = user.data[0].rt
    this.rw = user.data[0].rw
    this.address = user.data[0].address
    this.university = user.data[0].university
    this.accreditation = user.data[0].accreditation
    this.ipk = user.data[0].ipk
    this.files = user.data.map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status }))
  },
  methods: {
    async execute (status) {
      try {
        let params = {}
        const arrParams = []
        const inputs = document.querySelectorAll('#checkBoxId')
        // console.log(inputs)
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].checked) {
            // params = {
            //   id: inputs[i].value,
            //   status: 'verified'
            // }
            arrParams.push(inputs[i].value)
          }
        }
        params = {
          files: arrParams,
          status
        }
        // const formData = new FormData()
        // formData.append('files', JSON.stringify(arrParams))
        // console.log(arrParams)
        await this.$axios.$put('/registrant/file/update', params)
        this.$router.push('/dashboard/admin/registrant')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
