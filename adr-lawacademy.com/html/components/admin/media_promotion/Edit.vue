<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Edit Testimonial
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Nama
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select ref="university" v-model="user_id" class="tw-form-select tw-w-full">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="unv in user" :key="unv.id" :value="unv.id">
                    {{ unv.fullname }}
                  </option>
                </select>
              </div>
            </div>

            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Content
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-textarea
                  v-model="content"
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
                  Publish
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-switch
                  v-model="is_publish"
                  flat
                  :label="is_publish === true ? 'Aktif' : 'Non Aktif'"
                />
              </div>
            </div>
          </div>
          <v-divider />
          <div class="tw-flex tw-flex-row tw-p-4 tw-space-x-2">
            <v-btn
              class=""
              color="#fffff"
              @click="back()"
            >
              Batalkan
            </v-btn>
            <v-btn
              type="submit"
              class=""
              color="primary"
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
import { mapGetters } from 'vuex'
// import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  // components: { ValidationObserver, ValidationProvider },
  data () {
    return {
      content: '',
      is_publish: false,
      user_id: '',
      user: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const testi = await this.$axios.$get(`/testimonial/${this.$route.params.id}`)
    this.user_id = testi.data[0].user_id
    this.content = testi.data[0].content
    this.is_publish = testi.data[0].is_publish

    const users = await this.$axios.$get('/testimonial/user')
    this.user = users.data.map(obj => ({ id: obj.id, fullname: obj.fullname }))
  },
  methods: {
    async submit () {
      const data = {
        content: this.content,
        is_publish: this.is_publish,
        user_id: this.user_id
      }
      try {
        // const isValid = await this.$refs.observer.validate()
        // if (isValid) {
        const res = await this.$axios.$put('testimonial', data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/media-promotion')
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
        // } else {
        //   this.$swal({
        //     icon: 'error',
        //     title: 'Data tidak lengkap..!',
        //     text: 'Silakan lengkapi data Anda'
        //   })
        // }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    back () {
      this.$router.push('/dashboard/admin/media-promotion')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
