<template>
  <v-app>
    <div class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2">
      <v-card>
        <div class="tw-flex tw-flex-col tw-mb-2">
          <div class="tw-px-12 tw-pb-4">
            <v-card-title class="tw-text-h5 tw-py-4">
              Edit Kategori
            </v-card-title>
            <v-divider />
            <div class="tw-grid tw-grid-cols-3 tw-px-4">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Nama</label>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  class="tw-w-full tw-form-input md:tw-w-2/3"
                >
                <span
                  class="tw-text-overline grey--text tw-text--darken-3 tw-mx-1"
                />
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-4 tw-py-2">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Urutan</label>
              </div>
              <div class="tw-col-span-3">
                <select v-model="order" class="tw-w-full tw-form-select md:tw-w-2/3">
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="index in total" :key="index" :value="index">
                    {{ index }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-1 tw-px-4 tw-py-2">
              <div class="tw-flex tw-flex-col">
                <span
                  class="grey--text tw-text--darken-3 tw-mx-1"
                >
                  Publish
                </span>
                <span
                  class="tw-text-sm grey--text tw-text--darken-3 tw-mx-1"
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
                  :label="`${is_active ? 'Aktif' : 'Non Aktif'}`"
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
      </v-card>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: '',
      is_active: false,
      order: '',
      total: 0
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const res2 = await this.$axios.$get('bank-content-category')
    this.total = res2.data.data.length
    console.log(this.total)
    const res = await this.$axios.$get(`bank-content-category/${this.$route.params.id}`)
    this.name = res.data.name
    this.is_active = res.data.is_active
    this.order = res.data.order
  },
  methods: {
    async submit () {
      const data = {
        name: this.name,
        is_active: this.is_active,
        order: this.order
      }
      try {
        const res = await this.$axios.$put(`bank-content-category/${this.$route.params.id}`, data)
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
