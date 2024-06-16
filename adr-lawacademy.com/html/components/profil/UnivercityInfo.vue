<template>
  <v-app>
    <div class="tw-mr-5 tw-ml-5 tw-mt-5">
      <!-- <h1>
        <a href="#" class="tw-p-4 tw-text-lg">Session Online</a>
      </h1> -->
      <div class="">
        <div
          class=""
        >
          <v-card-title class="text-h5 px-12">
            Informasi Universitas
          </v-card-title>
          <v-form
            ref="form"
          >
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">Nama Universitas</label>
              <input
                v-model="universitas"
                type="text"
                name="pass"
                placeholder="Nama Universitas"
                class="tw-form-input"
                value="Universitas Indonesia"
              >
            </div>
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">Akreditasi Fakultas Hukum</label>
              <input
                v-model="akreditasiFakultas"
                type="text"
                name="pass"
                placeholder="Akreditasi Fakultas Hukum"
                class="tw-form-input"
                value="A"
              >
            </div>
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">IPK</label>
              <input
                v-model="ipk"
                type="text"
                name="pass"
                placeholder="IPK"
                class="tw-form-input"
                value="4.01"
              >
            </div>
            <div class="tw-flex tw-flex-row tw-px-12">
              <v-btn
                color="#FF9900 !important"
                class=""
                @click="submit"
              >
                Simpan Perubahan
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import VsModal from '@vuesimple/vs-modal'

export default {
  components: {
    // VsModal
  },
  data () {
    return {
      universitas: '',
      akreditasiUniv: '',
      akreditasiFakultas: '',
      ipk: ''
    }
  },
  async mounted () {
    const user = await this.$axios.$get('/user/universitas')
    this.universitas = user.data[0].university
    this.akreditasiUniv = user.data[0].accreditation
    this.akreditasiFakultas = user.data[0].accreditation_faculty
    this.ipk = user.data[0].ipk
  },
  methods: {
    async submit () {
      const data = {
        university: this.universitas,
        accreditation: this.akreditasiUniv,
        accreditation_faculty: this.akreditasiFakultas,
        ipk: this.ipk
      }
      try {
        const res = await this.$axios.$put('/user', data)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
        // const user = await this.$axios.$get('/user/user')
        // this.$auth.setUser(user.data)
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'Oke'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
          // .then((result) => {
          //   /* Read more about isConfirmed, isDenied below */
          //   if (result.isConfirmed) {
          //     location.reload()
          //   }
          // })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #E5E5E5 !important; */
  border: none;
}
</style>

<style scoped lang="scss">
//  ::v-deep .v-application--wrap {
//     min-height: fit-content;
//     background-color: #E5E5E5;
//   }
</style>

<style scoped lang="scss">
 .container {
    height: auto;
    width: 1000px;
    // background-color:#ffffff;
  }
</style>
