<template>
  <v-app>
    <div class="tw-mr-5 tw-ml-5 tw-mt-5">
      <!-- <h1>
        <a href="#" class="tw-p-4 tw-text-lg">Session Online</a>
      </h1> -->
      <div class="">
        <div
          class=""
        >
          <v-card-title class="text-h5 px-12">
            Unggah Dokumen
          </v-card-title>
          <!-- cv -->
          <div class="md:tw-flex md:tw-flex-row md:tw-items-center tw-mb-6 tw-px-12">
            <div class="md:tw-w-1/4">
              <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left" for="inline-fullname">
                Curriculum Vitae
              </label>
              <span class="tw-text-red-500 tw-text-sm italic">Status: {{ getCV.status }}</span>
            </div>
            <div class="md:tw-w-1/4">
              <img v-if="getCV.url == null" class="md:tw-w-32 md:tw-h-32" src="https://pkpa.s3.ap-southeast-1.amazonaws.com/1/universities/1650871165759_no_image.jpeg">
              <a v-else-if="getCV.type == 'application/pdf'" :href="getCV.url" target="_blank">
                <img class="md:tw-w-32 md:tw-h-32" src="~/assets/images/icon/pdf.png">
              </a>
              <img v-else class="md:tw-w-32 md:tw-h-32" :src="getCV.url">
            </div>
            <div class="md:tw-w-1/4">
              <div>
                <label class="tw-inline-flex tw-items-center">
                  <input ref="cv" name="file" type="file" @change="handleFilesUploadCV">
                </label>
              </div>
              <!-- <a target="_blank" :href="getCVUrl"><span class="tw-text-orange-600">Lihat Detail</span></a> -->
            </div>
          </div>
          <!-- foto -->

          <div class="md:tw-flex md:tw-flex-row md:tw-items-center tw-mb-6 tw-px-12">
            <div class="md:tw-w-1/4">
              <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left" for="inline-fullname">
                Kartu Tanda Penduduk
              </label>
              <span class="tw-text-red-500 tw-text-sm italic">Status: {{ getKTP.status }}</span>
            </div>
            <div class="md:tw-w-1/4">
              <img v-if="getKTP.url == null" class="md:tw-w-32 md:tw-h-32" src="https://pkpa.s3.ap-southeast-1.amazonaws.com/1/universities/1650871165759_no_image.jpeg">
              <a v-else-if="getKTP.type == 'application/pdf'" :href="getKTP.url" target="_blank">
                <img class="md:tw-w-32 md:tw-h-32 tw-cursor-pointer" src="~/assets/images/icon/pdf.png">
              </a>
              <img v-else class="md:tw-w-32 md:tw-h-32" :src="getKTP.url">
            </div>
            <div class="md:tw-w-1/4">
              <div>
                <label class="tw-inline-flex tw-items-center">
                  <input ref="ktp" name="file" type="file" @change="handleFilesUploadKTP">
                </label>
              </div>
              <!-- <a target="_blank" :href="getKTPUrl"><span class="tw-text-orange-600">Lihat Detail</span></a> -->
            </div>
          </div>

          <!-- foto -->
          <div class="md:tw-flex md:tw-flex-row md:tw-items-center tw-mb-6 tw-px-12">
            <div class="md:tw-w-1/4">
              <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left" for="inline-fullname">
                Foto
              </label>
              <span class="tw-text-red-500 tw-text-sm italic">Status: {{ getFoto.status }}</span><br>
              <span v-if="getFoto.type == 'application/pdf'" class="tw-text-red-500 tw-text-sm italic">Silakan gunakan file berekstensi jpg/jpeg/png</span>
            </div>
            <div class="md:tw-w-1/4">
              <img v-if="getFoto.url == null" class="md:tw-w-32 md:tw-h-32" src="https://pkpa.s3.ap-southeast-1.amazonaws.com/1/universities/1650871165759_no_image.jpeg">
              <div v-else-if="getFoto.type == 'application/pdf'">
                <a :href="getFoto.url" target="_blank">
                  <img class="md:tw-w-32 md:tw-h-32" src="~/assets/images/icon/pdf.png">
                </a>
              </div>
              <img v-else class="md:tw-w-32 md:tw-h-32" :src="getFoto.url">
            </div>
            <div class="md:tw-w-1/4">
              <div>
                <label class="tw-inline-flex tw-items-center">
                  <input ref="foto" name="file" type="file" @change="handleFilesUploadFoto">
                </label>
              </div>
              <!-- <a target="_blank" :href="getFotoUrl"><span class="tw-text-orange-600">Lihat Detail</span></a> -->
            </div>
          </div>

          <!-- ijazah -->
          <div class="md:tw-flex md:tw-flex-row md:tw-items-center tw-mb-6 tw-px-12">
            <div class="md:tw-w-1/4">
              <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left" for="inline-fullname">
                Ijazah
              </label>
              <span class="tw-text-red-500 tw-text-sm italic">Status: {{ getIjazah.status }}</span>
            </div>
            <div class="md:tw-w-1/4">
              <img v-if="getIjazah.url == null" class="md:tw-w-32 md:tw-h-32" src="https://pkpa.s3.ap-southeast-1.amazonaws.com/1/universities/1650871165759_no_image.jpeg">
              <div v-else-if="getIjazah.type == 'application/pdf'">
                <a :href="getIjazah.url" target="_blank">
                  <img class="md:tw-w-32 md:tw-h-32" src="~/assets/images/icon/pdf.png">
                </a>
              </div>
              <img v-else class="md:tw-w-32 md:tw-h-32" :src="getIjazah.url">
            </div>
            <div class="md:tw-w-1/4">
              <div>
                <label class="tw-inline-flex tw-items-center">
                  <input ref="ijazah" name="file" type="file" @change="handleFilesUploadIjazah">
                </label>
              </div>
              <!-- <a target="_blank" :href="getIjazahUrl"><span class="tw-text-orange-600">Lihat Detail</span></a> -->
            </div>
          </div>

          <!-- Sertifikat Akreditasi
          <div class="md:tw-flex md:tw-items-center tw-mb-6 tw-px-12">
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
          </div> -->
          <div class="tw-flex tw-gap-3 tw-px-12 tw-mb-10">
            <v-btn
              color="#FF9900 !important"
              class=""
              @click="submit"
            >
              Simpan Perubahan
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import VsModal from '@vuesimple/vs-modal'

export default {
  components: {
    // VsModal
  },
  data () {
    return {
      cv: '',
      foto: '',
      ktp: '',
      ijazah: '',
      sertifikat_akreditasi: '',
      getCV: {},
      getFoto: {},
      getKTP: {},
      getIjazah: {}
    }
  },
  async mounted () {
    const user = await this.$axios.$get('/user/user')
    const cv = user.data.filter(data => data.file_name === 'cv').map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status, type: data.file_type }))
    if (cv[0]) {
      this.getCV = cv[0]
    }

    const ktp = user.data.filter(data => data.file_name === 'ktp').map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status, type: data.file_type }))
    if (ktp[0]) {
      this.getKTP = ktp[0]
    }

    const foto = user.data.filter(data => data.file_name === 'foto').map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status, type: data.file_type }))
    if (foto[0]) {
      this.getFoto = foto[0]
    }

    const ijazah = user.data.filter(data => data.file_name === 'ijazah').map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status, type: data.file_type }))
    if (ijazah[0]) {
      this.getIjazah = ijazah[0]
    }

    // this.getSertifikatAkreditasi = user.data.filter(data => data.file_name === 'sertifikat_akreditasi').map(data => ({ id: data.file_id, name: data.file_name, url: data.file_url, status: data.file_status }))
    // if (this.getSertifikatAkreditasi[0]) {
    //   this.getSertifikatAkreditasiName = this.getSertifikatAkreditasi[0].name
    //   this.getSertifikatAkreditasiUrl = this.getSertifikatAkreditasi[0].url
    // }
  },
  methods: {
    async submit () {
      try {
        const formData = new FormData()
        formData.append('cv', this.cv)
        formData.append('ktp', this.ktp)
        formData.append('foto', this.foto)
        formData.append('ijazah', this.ijazah)
        // formData.append('sertifikat_akreditasi', this.sertifikat_akreditasi)
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        const res = await this.$axios.$put('user/', formData, config)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'Oke'
          // footer: '<a href="">Why do I have this issue?</a>'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              location.reload()
            }
          })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
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
    }
    // handleFilesUploadSertifikatAkreditasi () {
    //   this.sertifikat_akreditasi = this.$refs.sertifikat_akreditasi.files[0]
    // }
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
