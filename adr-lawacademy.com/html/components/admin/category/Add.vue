<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Tambah Kategori
          </v-card-title>
          <v-divider />
          <ValidationObserver ref="observer" @submit.prevent="submit()">
            <ValidationProvider
              v-slot="{ errors }"
              name="Nama Lengkap"
              rules="required"
            >
              <div class="tw-grid tw-grid-cols-3 tw-px-4">
                <div class="tw-col-span-3">
                  <label class="tw-text-12">Nama</label>
                </div>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  class="tw-form-input tw-col-span-3 md:tw-w-2/3"
                >
                <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="tw-grid tw-grid-cols-1 tw-px-4 tw-py-2">
              <div class="tw-flex tw-flex-col">
                <span>
                  Publish
                </span>
                <span
                  class="grey--text tw-text--darken-3"
                >
                  Jika status Kategori diaktifkan maka mata kuliah akan dapat
                  dikelompokkan berdasarkan Kategori ini.
                </span>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-4">
              <div class="tw-col-span-3">
                <v-switch
                  v-model="is_active"
                  flat
                  :label="is_active === true ? 'Aktif' : 'Non Aktif'"
                />
              </div>
            </div>
          </ValidationObserver>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: { ValidationObserver, ValidationProvider },
  data () {
    return {
      name: '',
      is_active: false,
      owner_id: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      const data = {
        name: this.name,
        is_active: this.is_active,
        owner_id: this.loggedInUser.id
      }
      try {
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          const res = await this.$axios.$post('bank-content-category', data)
          if (!res.error) {
            this.$swal({
              icon: 'success',
              title: 'Sukses..!!',
              text: 'Data berhasil disimpan'
            })
            this.$router.push('/dashboard/admin/category')
          } else {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
          }
        } else {
          this.$swal({
            icon: 'error',
            title: 'Data tidak lengkap..!',
            text: 'Silakan lengkapi data Anda'
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
      this.$router.push('/dashboard/admin/category')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
