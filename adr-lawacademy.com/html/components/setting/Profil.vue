<template>
  <v-app>
    <v-form
      ref="form"
      lazy-validation
    >
      <div class="tw-flex tw-flex-col tw-mb-4 tw-px-12">
        <v-card-title class="tw-text-h5 sm:-tw-ml-4">
          Informasi Umum
        </v-card-title>
        <v-divider />
        <!-- <label class="tw-text-12">Foto</label> -->
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-2 md:tw-px-5 tw-pb-5 lg:tw-w-2/4">
          <img class="tw-w-32 tw-h-32 md:tw-w-28 md:tw-h-28 tw-rounded-full tw-object-cover border md:tw-mr-5 tw-border-gray-100 tw-shadow-sm" :src="loggedInUser.image_url">
          <div class="file-input">
            <input id="file" ref="foto" type="file" class="file" @change="changePhoto">
            <label for="file" class="ganti tw-mt-3 md:tw-mt-0">
              Ganti Foto
              <p class="file-name" />
            </label>
          </div>
        </div>
        <label class="tw-text-12">Nama Lengkap</label>
        <input
          ref="fullname"
          :value="loggedInUser.fullname"
          type="text"
          placeholder="Nama Lengkap"
          class="tw-form-input mb-5 lg:tw-w-2/4"
        >
        <label class="tw-text-12">Email</label>
        <input
          ref="email"
          :value="loggedInUser.email"
          type="text"
          placeholder="Email"
          class="tw-form-input mb-5 lg:tw-w-2/4"
          readonly
        >
        <label class="tw-text-12">Telepon</label>
        <input
          ref="phone_no"
          :value="loggedInUser.phone_no"
          type="text"
          placeholder="Telepon"
          class="tw-form-input mb-5 lg:tw-w-2/4"
          readonly
        >
        <label class="tw-text-12">Whatsapp</label>
        <input
          ref="wa_no"
          :value="loggedInUser.wa_no"
          type="text"
          placeholder="Whatspp"
          class="tw-form-input mb-5 lg:tw-w-2/4"
        >
        <div class="tw-flex tw-flex-row">
          <v-btn
            color="#FF9900 !important"
            class=""
            @click="submit"
          >
            Simpan Perubahan
          </v-btn>
        </div>
      </div>
    </v-form>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    // VsModal
  },
  data () {
    return {
      items: [
        ['mdi-book-open-blank-variant', 'Informasi Umum', 'modal1'],
        ['mdi-access-point', 'Data Pribadi', 'modal2'],
        ['mdi-dots-hexagon', 'Ubah Kata Sandi', 'modal3'],
        ['mdi-certificate', 'Informasi Universitas', 'modal4'],
        ['mdi-progress-check', 'Unggah Dokumen', 'modal5']
      ],
      jk: ['Laki-Laki', 'Perempuan'],
      prov: ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Sumatera Selatan', 'Lampung', 'DKI Jakarta'],
      kabkot: ['Aceh Besar', 'Medan', 'Padang', 'Palembang', 'Kotabumi', 'Jakarta Pusat', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Selatan'],
      deskel: ['Aceh Besar', ' Medan', 'Padang', 'Palembang', 'Kotabumi', 'Menteng', 'Senen', 'Cempaka Putih', 'Rawamangun', 'Pulogadung', 'Grogol', 'Meruya', 'Kelapa Gading', 'Tanjung Priok', 'Semper', 'Cilandak', 'Pasar Minggu', 'Pejaten', 'Kuningan']
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async changePhoto () {
      try {
        const formData = new FormData()
        formData.append('foto', this.$refs.foto.files[0])
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        const res = await this.$axios.$put('user/', formData, config)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'Oke'
          // footer: '<a href="">Why do I have this issue?</a>'
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              await this.$auth.fetchUser()
            }
          })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    openModal (ref) {
      this.$refs[ref].open()
    },

    closeModal (ref) {
      this.$refs[ref].close()
    },
    async submit () {
      const data = {
        fullname: this.$refs.fullname.value,
        email: this.$refs.email.value,
        phone_no: this.$refs.phone_no.value,
        wa_no: this.$refs.wa_no.value
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
          const user = await this.$axios.$get('/user')
          this.$auth.setUser(user.data)
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan',
            confirmButtonText: 'Oke'
          // footer: '<a href="">Why do I have this issue?</a>'
          }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              location.reload()
            }
          })
        }
      } catch (e) {
        // console.log(e.response.data.errors[0].msg)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: e.response.data.errors[0].msg
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      // console.log(res.response)
    }
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #FFFFFF !important; */
  border: none;
}
.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input .ganti {
  display: block;
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff9900;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s ease-out;
  border: 2px solid #ff9900;
}

.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.85rem;
  color: #555;
}

input:hover + .ganti,
input:focus + .ganti {
  transform: scale(1.02);
}

/* Adding an outline to the label on focus */
input:focus + .ganti {
  outline: 1px solid #ff9900;
  outline: -webkit-focus-ring-color auto 2px;
}

</style>

<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 1000px;
    background-color:#ffffff;
  }
</style>
