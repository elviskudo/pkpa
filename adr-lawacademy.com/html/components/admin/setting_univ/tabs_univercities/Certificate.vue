<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Sertifikat
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="university_id" class="tw-w-2/3 tw-form-select">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Sertifikat
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-file-input
                  v-model="certificate"
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
                  Publish
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-switch
                  v-model="is_forum"
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
export default {
  data () {
    return {
      name: '',
      certificate: null,
      university_id: '',
      description: '',
      is_forum: false,
      is_publish: false,
      background_image: null,
      univercities: []
    }
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('certificate', this.certificate)
      formData.append('is_forum', this.is_forum)
      formData.append('id', this.university_id)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$put(`university/${this.university_id}`, formData, config)
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
    back () {
      this.$router.push('/dashboard/admin/setting-univ')
    }
  }

}
</script>
