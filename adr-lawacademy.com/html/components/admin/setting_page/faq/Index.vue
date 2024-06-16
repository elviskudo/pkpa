<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            FAQ
          </v-card-title>
          <v-divider />
          <v-expansion-panels>
            <v-expansion-panel
              v-for="c in advantage"
              :key="c.id"
              class="tw-rounded tw-py-4"
            >
              <v-expansion-panel-header>
                <v-dialog
                  v-model="dialog"
                  width="600px"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="getdata(c.id)"
                    >
                      Edit
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">FAQ</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                      <div class="tw-px-12">
                        <div class="md:tw-flex md:tw-items-center tw-mb-6">
                          <div class="md:tw-w-1/3">
                            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                              Label
                            </label>
                          </div>
                          <div class="md:tw-w-2/3">
                            <select v-model="label" name="state" class="tw-form-select tw-w-full">
                              <option selected value="FAQ">
                                FAQ
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
                        <div class="md:tw-flex md:tw-items-center tw-mb-6 form-group">
                          <div class="md:tw-w-1/3">
                            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                              Judul
                            </label>
                          </div>
                          <div class="md:tw-w-2/3">
                            <input v-model="judul" type="text" class="tw-form-input tw-w-full">
                          </div>
                        </div>
                        <div class="md:tw-flex md:tw-items-center tw-mb-6">
                          <div class="md:tw-w-1/3">
                            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                              Konten
                            </label>
                          </div>
                          <div class="md:tw-w-2/3">
                            <Editor v-model="section_satu" />
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
                              <v-file-input
                                v-model="url"
                                label="File input"
                                filled
                                prepend-icon="mdi-camera"
                                class="tw-px-2 tw-py-2"
                              />
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
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="green darken-1"
                        text
                        @click="submit"
                      >
                        Simpan
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Batal
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                {{ c.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ c.sub_content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-divider />
          <div class="tw-flex tw-flex-row tw-py-4 tw-justify-center tw-items-center">
            <v-row justify="center">
              <v-dialog
                v-model="dialogCreate"
                width="600px"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="clearText()"
                  >
                    Tambah FAQ
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">FAQ</span>
                  </v-card-title>
                  <v-divider />
                  <v-card-text>
                    <div class="tw-px-12">
                      <div class="md:tw-flex md:tw-items-center tw-mb-6">
                        <div class="md:tw-w-1/3">
                          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                            Label
                          </label>
                        </div>
                        <div class="md:tw-w-2/3">
                          <select v-model="label" name="state" class="tw-form-select tw-w-full">
                            <option selected value="FAQ">
                              FAQ
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
                      <div class="md:tw-flex md:tw-items-center tw-mb-6 form-group">
                        <div class="md:tw-w-1/3">
                          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                            Judul
                          </label>
                        </div>
                        <div class="md:tw-w-2/3">
                          <input v-model="judul" type="text" class="tw-form-input tw-w-full">
                        </div>
                      </div>
                      <div class="md:tw-flex md:tw-items-center tw-mb-6">
                        <div class="md:tw-w-1/3">
                          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                            Konten
                          </label>
                        </div>
                        <div class="md:tw-w-2/3">
                          <Editor v-model="section_satu" />
                        </div>
                      </div>
                      <div class="md:tw-flex md:tw-items-center tw-mb-6">
                        <div class="md:tw-w-1/3">
                          <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                            Gambar
                          </label>
                        </div>
                        <div class="md:tw-w-2/3">
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
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="green darken-1"
                      text
                      @click="submit"
                    >
                      Simpan
                    </v-btn>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogCreate = false"
                    >
                      Batal
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </div>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import Editor from '~/components/Editor'
export default {
  components: {
    Editor
  },
  data () {
    return {
      dialog: false,
      dialogCreate: false,
      label: '',
      url: '',
      gambar: '',
      judul: '',
      section_satu: '',
      showInputImg: false,
      showImg: true,
      advantage: [],
      idUniv: ''
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/homepage/?section_name=FAQ')
    this.advantage = res.data
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('section_name', this.label)
      formData.append('title', this.judul)
      formData.append('sub_content', this.section_satu)
      formData.append('img_url', this.url)
      formData.append('id', this.idUniv)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('/homepage/component', formData, config)
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
    handleFilesUploadIjazah () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.gambar = file.name
      }
      this.url = this.$refs.url.files[0]
    },
    async getdata (id) {
      // console.log(id)
      const res = await this.$axios.$get(`/homepage/${id}`)
      // console.log(res)
      this.label = res.data[0].section_name
      this.judul = res.data[0].title
      this.section_satu = res.data[0].sub_content
      this.gambar = res.data[0].img_url
      this.idUniv = res.data[0].id
    },
    fbtnshowImg () {
      this.showInputImg = true
      this.showImg = false
    },
    fbtnshowInputImg () {
      this.showInputImg = false
      this.showImg = true
    },
    clearText () {
      this.label = ''
      this.judul = ''
      this.section_satu = ''
      this.gambar = ''
      this.idUniv = ''
    }
  }
}
</script>
