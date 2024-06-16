<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Tambah Universitas
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Nama Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="nameUniv"
                  type="text"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Kode Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="kode"
                  type="text"
                  name="name"
                  class="tw-form-input"
                  maxlength="5"
                >
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Gambar Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-file-input
                  v-model="gambar"
                  label="File input"
                  filled
                  prepend-icon="mdi-camera"
                  class="tw-px-2 tw-py-2"
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Logo
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-file-input
                  v-model="logo"
                  label="File input"
                  filled
                  prepend-icon="mdi-camera"
                  class="tw-px-2 tw-py-2"
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Visi
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="visi"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Misi
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="misi"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Tujuan
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="tujuan"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Pola Ilmiah Pokok
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="polapokok"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
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
export default {
  name: 'University',
  data () {
    return {
      universities: {},
      nameUniv: '',
      kode: '',
      logo: null,
      gambar: null,
      polapokok: '',
      descUniv: '',
      syaratPKPA: '',
      visi: '',
      misi: '',
      tujuan: ''
    }
  },
  async fetch () {
    const universities = await this.$axios.$get('university')
    const newUnv = universities.data.universities.map(obj => ({ id: obj.id, name: obj.name, img_url: obj.image_url, slug: obj.slug, logo_url: obj.logo_url }))
    this.universities = newUnv
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('name', this.nameUniv)
      formData.append('slug', this.kode)
      formData.append('vision', this.visi)
      formData.append('mission', this.misi)
      formData.append('goal', this.tujuan)
      formData.append('motto', this.polapokok)
      formData.append('image_university', this.gambar)
      formData.append('logo_university', this.logo)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('university', formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/dashboard/admin/setting-univ')
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
    }
  }
}
</script>
