<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Kontak
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Judul
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="label"
                  type="text"
                  name="name"
                  class="tw-form-input"
                  readonly
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
                  Email
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="emailValue"
                  type="text"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>

            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Telepon
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <input
                  v-model="teleponValue"
                  type="text"
                  name="name"
                  class="tw-form-input"
                >
              </div>
            </div>

            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Link Google Maps
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="linkGmapValue"
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
                  Alamat
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="alamatValue"
                  outlined
                  name="input-7-4"
                  label="Outlined textarea"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                />
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
    </v-card>
  </v-app>
</template>
<script>
// import Editor from '~/components/Editor'
export default {
  name: 'University',
  // components: {
  //   Editor
  // },
  data () {
    return {
      homepageDetail: {},
      label: '',
      emailValue: '',
      teleponValue: '',
      linkGmapValue: '',
      alamatValue: '',
      idUniv: ''
    }
  },
  async mounted () {
    this.label = 'Kontak Kami'
    const res = await this.$axios.$get('/homepage-detail/?section_name=Kontak Kami')
    this.homepageDetail = res.data.map(obj => ({ id: obj.id, section_name: obj.section_name, name: obj.name, value: obj.value }))
    this.idUniv = this.homepageDetail[0].id

    this.homepageDetail.forEach((arrUser) => {
      if (arrUser.name === 'Alamat') {
        this.alamatValue = arrUser.value
      }
      if (arrUser.name === 'Email') {
        this.emailValue = arrUser.value
      }
      if (arrUser.name === 'Telepon') {
        this.teleponValue = arrUser.value
      }
      if (arrUser.name === 'Link Google Maps') {
        this.linkGmapValue = arrUser.value
      }
    })
  },
  methods: {
    async submit () {
      const data = {
        section_name: this.label,
        title: 'Kontak Kami',
        emailValue: this.emailValue,
        teleponValue: this.teleponValue,
        linkGmapValue: this.linkGmapValue,
        alamatValue: this.alamatValue,
        id: this.idUniv
      }
      try {
        const res = await this.$axios.$post('/homepage-detail', data)
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
