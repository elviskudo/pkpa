<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Syarat Dan Ketentuan
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Label
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="label" name="state" class="tw-form-select tw-w-full">
                  <option selected value="SDK">
                    Syarat Dan Ketentuan
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
                  Section 2
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <Editor v-model="section_dua" />
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
    const res = await this.$axios.$get('/homepage/?section_name=SDK')
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
      formData.append('is_publish', false)
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
    }
  }
}
</script>
