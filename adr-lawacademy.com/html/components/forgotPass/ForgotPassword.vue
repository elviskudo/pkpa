<template>
  <v-app>
    <div class="tw-items-center tw-flex tw-justify-center xl:tw-m-10 xl:tw-p-15 md:tw-m-5 tw-p-8">
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <div class="tw-p-4 tw-py-4">
            <img src="~/assets/images/Forgot password-bro.svg" alt="" class="tw-w-full tw-h-full" style="">
          </div>
        </div>
        <div class="md:tw-w-2/3">
          <div class="md:tw-justify-center sm:tw-items-center grp">
            <a @click="fback">
              <span class="tw-text-yellow-500 tw-text-md "><i class="mdi mdi-chevron-left" /> Kembali ke halaman login</span>
            </a>
            <h1 class="tw-mb-1 sm:tw-justify-center">
              Lupa Kata sandi?
            </h1>
            <p class=" tw-text-md" style=" color: #4A4A4A;">
              <bold>
                Harap masukkan alamat email Anda di bawah ini dan <br>kami
                akan mengirimkan kode verifikasi kepada Anda
              </bold>
            </p>

            <input
              id="inptpw"
              v-model="forgotPass"
              type="text"
              class="tw-form-input tw-w-2/3 my-4"
              placeholder="Email"
            >
            <v-btn
              class="tw-px-4 tw-py-5 tw-w-2/3 tw-mt-3"
              color="#FF9900"
              tw-text-color=" #ffff"
              @click.prevent="submit"
            >
              <p class="tw-text-white mb-0">
                Kirim email
              </p>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      forgotPass: ''
    }
  },
  methods: {
    async submit () {
      const data = {
        email: this.forgotPass
      }
      try {
        // await this.$axios.$post('bank-content-category', data)
        const res = await this.$axios.$post('forgotpassword', data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Silahkan cek email anda',
            confirmButtonText: 'Oke'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$router.push('/')
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
    fback () {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
@media (max-width: 660px) {
  .grp{
    margin-left: 50px;
  }

  #inptpw{
    width: 100%;
  }
  .v-btn{
    width: 100%;
  }
}

@media (max-width: 460px) {
  .grp{
    margin-left: 15px;
  }
}
</style>
