<template>
  <v-app>
    <div class="tw-items-center tw-flex tw-justify-center xl:tw-m-10 xl:tw-p-15 md:tw-m-5 tw-p-8">
      <div class="md:tw-flex md:tw-items-center tw-mb-6">
        <div class="md:tw-w-1/3">
          <div class="tw-p-4 tw-py-4">
            <img src="~/assets/images/Forgot password-bro.svg" class="tw-w-full tw-h-full" alt="">
          </div>
        </div>
        <div class="md:tw-w-2/3">
          <div class="md:tw-justify-center sm:tw-items-center grp">
            <div class="tw-mb-5">
              <a @click="fback">
                <span class="tw-text-yellow-500 tw-text-md "><i class="mdi mdi-chevron-left" /> Kembali ke halaman lupa kata sandi</span>
              </a>
            </div>
            <p class="tw-font-bold">
              <b> Ubah kata sandi</b>
            </p>
            <!-- <p>
          Kami telah mengirimkan kode verifikasi, cek pesan masuk di emailmu.
        </p> -->
            <label style=" color: #858585;">Masukan sandi baru</label>
            <input
              id="inptpw"
              v-model="password"
              type="password"
              class="tw-form-input tw-w-2/3"
            >
            <label style=" color: #858585;">Ulangi sandi baru </label>
            <input
              id="inptpw"
              v-model="newpassword"
              type="password"
              class="tw-form-input tw-w-2/3"
            >
            <input
              v-model="email"
              type="hidden"
              class="tw-form-input xl:tw-w-2/3"
            >
            <v-btn
              class="tw-px-4 tw-py-5 tw-w-2/3 tw-mt-3 md:tw-items-center tw-text-white tw-text-lg"
              color="#FF9900"
              style=" color: #ffff;"
              @click="submit"
            >
              Simpan
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
      password: '',
      newpassword: '',
      email: ''
    }
  },
  mounted () {
    // console.log(this.$route.query.email)
    this.email = this.$route.query.email
  },
  methods: {
    async submit () {
      const data = {
        password: this.password,
        newpassword: this.newpassword,
        email: this.email
      }
      try {
        // await this.$axios.$post('bank-content-category', data)
        const res = await this.$axios.$put('forgotpassword', data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Password berhasil diupadte',
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
      this.$router.push('/forgot-password/forgot-password')
    },
    switchhide () {
      this.visibility = 'text'
    },
    switchshow () {
      this.visibility = 'password'
    }
  }
}
</script>
