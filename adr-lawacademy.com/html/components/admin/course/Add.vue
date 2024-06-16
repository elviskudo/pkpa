/* eslint-disable vue/valid-v-else-if */
<template>
  <v-app>
    <!-- <div class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2"> -->
    <v-card>
      <div class="tw-flex tw-flex-col tw-px-4">
        <div class="tw-pb-4">
          <v-card-title class="tw-text-h5">
            Tambah Mata Kuliah
          </v-card-title>
          <v-divider />
          <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-3">
            <div class="tw-col-span-3">
              <label class="tw-text-12">Judul Mata Kuliah</label>
            </div>
            <div class="tw-col-span-3">
              <input
                v-model="name"
                type="text"
                name="name"
                class="tw-w-full tw-form-input md:tw-w-2/3"
              >
            </div>
            <div class="tw-col-span-3 md:tw-col-span-2">
              <span
                class="tw-text-overline grey--text tw-text--darken-3 tw-mx-1"
              >
                harus berupa huruf,angka,spasi,simbol ampersand(&),titik,(.) dan strip(-) 0/150
              </span>
            </div>
          </div>
          <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-3">
            <div class="tw-col-span-3">
              <label class="tw-text-12">Daftar Universitas</label>
            </div>
            <div class="tw-col-span-3">
              <select v-model="university_id" class="tw-w-full md:tw-w-2/3 tw-form-select" :disabled="loggedInUser.university_id">
                <option selected disabled value="">
                  Pilih
                </option>
                <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                  {{ unv.name }}
                </option>
              </select>
            </div>
          </div>
          <!-- <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-3">
          <div class="tw-col-span-3">
            <label class="tw-text-12">Nama Dosen</label>
          </div>
          <div class="tw-col-span-2">
            <select v-model="tutor_id" class="tw-w-2/3 tw-form-input">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="tutor in tutors" :key="tutor.id" :value="tutor.id">
                {{ tutor.fullname }}
              </option>
            </select>
          </div>
        </div> -->
          <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-3">
            <div class="tw-col-span-3 md:tw-col-span-1">
              <label class="tw-text-lg tw-font-bold">Diskusi Kelas</label><br>
              <span class="tw-text-gray-500">Jika diskusi aktif, fitur forum diskusi akan tampil di dashboard siswa</span>
            </div>
            <div class="tw-flex tw-col-span-3 md:tw-col-span-1 tw-items-end md:tw-justify-end">
              <v-switch
                v-model="is_forum"
              />
            </div>
          </div>
          <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-3">
            <div class="tw-col-span-3 md:tw-col-span-2">
              <label class="tw-text-12">Deskripsi</label>
              <textarea
                v-model="description"
                class="
                    tw-form-textarea
                    tw-w-full
                  "
                rows="3"
                placeholder="Your message"
              />
            </div>
          </div>
          <v-card-title class="tw-text-h5">
            Photo Kelas
          </v-card-title>
          <v-file-input
            v-model="background_image"
            label="File input"
            filled
            prepend-icon="mdi-camera"
            class="tw-px-2 tw-py-2"
          />
          <v-card-title class="tw-text-h5">
            Sertifikat
          </v-card-title>
          <v-file-input
            v-model="certificate"
            label="File input"
            filled
            prepend-icon="mdi-camera"
            class="tw-px-2 tw-py-2"
          />
          <div class="tw-flex tw-justify-between tw-items-center tw-justify-center md:tw-w-2/3 tw-w-full">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-pr-4 tw-pl-2" for="inline-fullname">
              Publish
            </label>
            <v-switch
              v-model="is_publish"
            />
          </div>
          <v-divider />
          <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
            <v-btn
              class="tw-px-4 tw-py-4"
              color="warning"
              @click="back()"
            >
              Kembali
            </v-btn>
            <v-btn
              type="submit"
              class="tw-px-4 tw-py-4"
              color="warning"
              @click="submit"
            >
              Simpan
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
    <!-- </div> -->
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: '',
      university_id: '',
      description: '',
      is_forum: false,
      is_publish: false,
      background_image: null,
      certificate: null,
      univercities: []
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
      // this.getPhaseUniversity()
    }
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('university_id', this.university_id)
      formData.append('is_forum', this.is_forum)
      formData.append('is_publish', this.is_publish)
      formData.append('background_image', this.background_image)
      formData.append('certificate', this.certificate)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('bank-course', formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/course')
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
    back () {
      this.$router.push('/dashboard/admin/course')
    }
    // async getTutors () {
    //   const res = await this.$axios.$get(`user/user-tutor/?university_id=${this.university_id}`)
    //   console.log(res)
    //   if (res.data.length > 0) {
    //     this.tutors = res.data.map(obj => ({ id: obj.id, fullname: obj.fullname }))
    //   }
    // }
  }
}
</script>
