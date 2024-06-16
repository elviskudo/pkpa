<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Tentang Kami
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <!-- <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="university_id" name="state" class="tw-form-select tw-w-full" @change="getDataHomepage">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div> -->
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Label
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="label" name="state" class="tw-form-select tw-w-full">
                  <option selected value="Tentang Kami">
                    Tentang Kami
                  </option>
                </select>
                <input
                  v-model="label"
                  type="hidden"
                  name="name"
                  class="tw-form-input"
                >
                <input
                  v-model="idUniv"
                  type="hidden"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Judul
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="judul"
                  type="text"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Section 1
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <Editor v-model="section_satu" />
                <!-- <v-textarea
                  v-model="section_satu"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                /> -->
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Section 2
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <Editor v-model="section_dua" />
                <!-- <v-textarea
                  v-model="section_dua"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                /> -->
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Publish
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-switch
                  v-model="is_publish"
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Gambar
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <div v-if="showInputImg">
                  <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                    <input
                      ref="url"
                      class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                      name="file"
                      type="file"
                      @change="handleFilesUploadIjazah"
                    >
                    <div class="tw-z-10 p-1 tw-mt-2">
                      <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                      <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                        Tarik file kesini atau klik untuk upload
                      </h2>
                      <p class="tw-text-black tw-text-center tw-mt-1 tw-text-xs ">
                        Maksimum 10 MB, Format JPEG <br>
                        {{ gambar }}
                      </p>
                    </div>
                  </div>
                  <v-btn @click="fbtnshowInputImg()">
                    Batal
                  </v-btn>
                </div>
                <div v-if="showImg">
                  <v-img
                    v-model="gambar"
                    :src="gambar"
                    contain
                    width="100"
                    height="100"
                    class=""
                  />
                  <v-btn @click="fbtnshowImg()">
                    Ganti
                  </v-btn>
                </div>
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
import Editor from '~/components/Editor'
export default {
  name: 'University',
  components: {
    Editor
  },
  data () {
    return {
      univercities: [],
      nameUniv: '',
      label: '',
      url: '',
      gambar: '',
      judul: '',
      section_satu: '',
      section_dua: '',
      idUniv: '',
      university_id: null,
      is_publish: false,
      showInputImg: true,
      showImg: false
    }
  },
  async mounted () {
    // const univercities = await this.$axios.$get('university')
    // this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    const res = await this.$axios.$get('/homepage/?section_name=Tentang Kami')
    if (res.data.length > 0) {
      this.idUniv = res.data[0].id
      this.label = res.data[0].section_name
      this.judul = res.data[0].title
      this.section_satu = res.data[0].content
      this.section_dua = res.data[0].sub_content
      this.is_publish = res.data[0].is_publish
      this.gambar = res.data[0].img_url
      this.showImg = true
      this.showInputImg = false
    } else {
      // this.idUniv = ''
      this.label = ''
      this.judul = ''
      this.section_satu = ''
      this.section_dua = ''
      this.is_publish = ''
      this.gambar = ''
      this.showImg = false
      this.showInputImg = true
    }
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('section_name', this.label)
      formData.append('title', this.judul)
      formData.append('content', this.section_satu)
      formData.append('sub_content', this.section_dua)
      formData.append('img_url', this.url)
      formData.append('owner_id', this.university_id)
      formData.append('is_publish', this.is_publish)
      formData.append('id', this.idUniv)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('/homepage', formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
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
    univPage (slug) {
      this.$router.push(`/university/${slug}`)
    },
    add () {
      this.$router.push('/dashboard/admin/setting-univ/add')
    },
    back () {
      this.$router.push('/dashboard/admin/setting-univ')
    },
    handleFilesUploadIjazah () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.gambar = file.name
      }
      this.url = this.$refs.url.files[0]
    },
    // async getDataHomepage () {
    //   const phase = await this.$axios.$get(`/homepage/univ/${this.university_id}`)
    //   if (phase.data.length > 0) {
    //     this.idUniv = phase.data[0].id
    //     this.label = phase.data[0].section_name
    //     this.judul = phase.data[0].title
    //     this.section_satu = phase.data[0].content
    //     this.section_dua = phase.data[0].sub_content
    //     this.is_publish = phase.data[0].is_publish
    //     this.gambar = phase.data[0].img_url
    //     this.showImg = true
    //     this.showInputImg = false
    //   } else {
    //     this.idUniv = ''
    //     this.label = ''
    //     this.judul = ''
    //     this.section_satu = ''
    //     this.section_dua = ''
    //     this.is_publish = ''
    //     this.gambar = ''
    //     this.showImg = false
    //     this.showInputImg = true
    //   }
    // },
    fbtnshowInputImg () {
      this.showInputImg = false
      this.showImg = true
      // this.gambar = phase.data[0].img_url
    },
    fbtnshowImg () {
      this.showInputImg = true
      this.showImg = false
      // this.gambar = ''
    }
  }
}
</script>
