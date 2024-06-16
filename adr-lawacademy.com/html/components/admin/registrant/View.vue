<template>
  <v-app>
    <v-card class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2 tw-justify-center">
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-lg tw-font-bold">{{ fullname }}</span>
          <span class="tw-text-xs">Calon Peserta PKPA ADR</span>
        </div>
        <hr class="tw-mb-6">
      </div>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12">
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Nama Lengkap
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ fullname }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Email
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ email }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                No Telepon
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ phone_no }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
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
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Tempat Tanggal Lahir
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ born_place }}, {{ born_date }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Jenis Kelamin
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ gender == 'l' ? 'Laki-laki' : 'Perempuan' }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Provinsi
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ state_name }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Kab/Kota
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ city_name }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Desa/Kelurahan
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ district_name }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                RT/RW
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ rt }}/{{ rw }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
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
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Nama Universitas
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ university }}
            </div>
          </div>
          <!-- <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
            Akreditasi
          </label>
        </div>
        <div class="md:tw-w-2/3">
          {{ accreditation }}
        </div>
      </div> -->
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Akreditasi Fakultas Hukum
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ accreditation_faculty }}
            </div>
          </div>
          <div class="md:tw-flex md:tw-items-center tw-mb-6">
            <div class="md:tw-w-1/3">
              <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                Index Prestasi Kumulatif
              </label>
            </div>
            <div class="md:tw-w-2/3">
              {{ parseInt(ipk).toFixed(2) }}
            </div>
          </div>
          <hr class="tw-mb-6">
          <!-- <span class="tw-px-2 tw-text-xl">Unggah Dokumen</span> -->
          <div v-for="file in files" :key="file.id">
            <div class="md:tw-flex md:tw-items-center tw-mb-6 tw-mt-3">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0" for="inline-fullname">
                  <span v-if="file.name == 'cv'">Curriculum Vitae</span>
                  <span v-if="file.name == 'foto'">Photo</span>
                  <span v-if="file.name == 'ijazah'">Ijazah</span>
                  <span v-if="file.name == 'ktp'">Kartu Tanda Penduduk</span>
                </label>
              </div>
              <div class="md:tw-w-1/3">
                <img v-if="file.url == null" class="md:tw-w-32 md:tw-h-32" src="https://pkpa.s3.ap-southeast-1.amazonaws.com/1/universities/1650871165759_no_image.jpeg">
                <div v-else-if="file.type == 'application/pdf'">
                  <a :href="file.url" target="_blank">
                    <img class="md:tw-w-32 md:tw-h-32" src="~/assets/images/icon/pdf.png">
                  </a>
                </div>
                <div v-else>
                  <a :href="file.url" target="_blank"><img class="md:tw-w-32 md:tw-h-32" :src="file.url"></a>
                </div>
              </div>
              <div class="md:tw-w-1/3 tw-mt-3">
                <div class="tw-flex tw-flex-row tw-items-center">
                  <label class="tw-inline-flex tw-items-center">
                    <input
                      v-if="file.status == 'verified'"
                      id="checkBoxId"
                      type="checkbox"
                      :value="file.id"
                      checked
                      class="tw-rounded ring-offset-2 ring-2 ring-gray-400 tw-mr-2 tw-bg-slate-600"
                    >
                    <input v-else id="checkBoxId" type="checkbox" :value="file.id" class="tw-rounded ring-offset-2 ring-2 ring-gray-400 tw-mr-2 tw-bg-slate-600">
                    <!-- <span class="tw-ml-2">Setujui Berkas</span> -->
                  </label>
                  <label class="" for="inline-fullname">
                    <span v-if="file.status == 'waiting'">Menunggu</span>
                    <span v-if="file.status == 'corrected'">Perbaikan</span>
                    <span v-if="file.status == 'accepted'">Diterima</span>
                    <span v-if="file.status == 'rejected'">Ditolak</span>
                  </label>
                </div>
                <!-- <a target="_blank" :href="file.url"><span class="tw-text-orange-600">Lihat Detail</span></a> -->
              </div>
            </div>
          </div>
          <hr>
          <div class="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-3 tw-py-3">
            <button class="tw-rounded tw-bg-blue-600 tw-p-2 tw-text-white hover:translate-x-3 hover:tw-bg-blue-800" @click="execute('verified')">
              Terima
            </button>
            <button class="tw-rounded tw-bg-red-600 tw-p-2 tw-text-white hover:tw-bg-red-800" @click="execute('rejected')">
              Tolak
            </button>
            <button
              class="tw-rounded tw-bg-white tw-border-solid tw-border tw-border-gray-700 tw-border-opacity-100 tw-p-2 hover:tw-bg-gray-400"
              @click="execute('corrected')"
            >
              Perbaikan
            </button>
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
      ipk: '',
      accreditation_faculty: ''
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
    this.accreditation_faculty = user.data[0].accreditation_faculty
    this.ipk = user.data[0].ipk
    const arrFiles = user.data.map(data => data.file_id)
    const arrFilesUnique = [...new Set(arrFiles)]
    const arrNewFiles = []
    for (let index = 0; index < arrFilesUnique.length; index++) {
      const arrFiles = user.data.filter(item => arrFilesUnique[index] === item.file_id).map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status, type: data.file_type, originalname: data.file_originalname }))
      arrNewFiles.push(arrFiles[0])
    }
    this.files = arrNewFiles
  },
  mounted () {
    // this.socket = this.$nuxtSocket({
    //   reconnection: false
    // })
  },
  methods: {
    async execute (status) {
      try {
        let params = {}
        const arrParams = []
        const inputs = document.querySelectorAll('#checkBoxId')
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].checked) {
            arrParams.push(inputs[i].value)
          }
        }
        params = {
          files: arrParams,
          status
        }
        const result = await this.$axios.$put('/registrant/file/update', params)
        if (!result.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          // this.socket.emit('berkas', status)
          this.$router.push('/dashboard/admin/registrant')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            html: result.message
          })
        }
      } catch (err) {
        // console.log(err)
      }
    }
  }
}
</script>
