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
            Ubah Kata Sandi
          </v-card-title>
          <v-form
            ref="form"
          >
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">Kata Sandi Saat Ini</label>
              <input
                v-model="passold"
                name="pass"
                :type="hide"
                placeholder=""
                class="tw-form-input"
                value=""
              >
              <div v-if="hide =='password'" class="toggle-password" @click="switchhide">
                <i class="mdi mdi-eye-off tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
              <div v-if="hide =='text'" class="toggle-password" @click="switchshow">
                <i class="mdi mdi-eye tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
            </div>
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">Kata Sandi Baru</label>
              <input
                v-model="passnew"
                :type="visibility"
                name="pass"
                placeholder=""
                class="tw-form-input"
                value=""
                :maxlength="max"
              >
              <div v-if="visibility =='password'" class="toggle-password" @click="switchhidevis">
                <i class="mdi mdi-eye-off tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
              <div v-if="visibility =='text'" class="toggle-password" @click="switchshowvis">
                <i class="mdi mdi-eye tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
            </div>
            <div class="tw-flex tw-flex-col tw-px-12 tw-mb-4 lg:tw-w-2/4">
              <label class="tw-text-12">Tulis Ulang kata Sandi</label>
              <input
                v-model="passconfirm"
                :type="hidden"
                name="pass"
                placeholder=""
                class="tw-form-input"
                value=""
                :maxlength="maxi"
              >
              <div v-if="hidden =='password'" class="toggle-password" @click="switchhidden">
                <i class="mdi mdi-eye-off tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
              <div v-if="hidden =='text'" class="toggle-password" @click="switchshowhidden">
                <i class="mdi mdi-eye tw-flex float-right -tw-mt-10 tw-mr-3 tw-cursor-pointer" aria-hidden="true" />
              </div>
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
      hide: 'password',
      visibility: 'password',
      hidden: 'password',
      passold: '',
      passnew: '',
      passconfirm: '',
      max: 8,
      maxi: 8
    }
  },
  async fetch () {
  },
  async mounted () {
    // const user = await this.$axios.$get('/user/pass')
    // this.passold = user.data[0].password
  },
  methods: {
    switchhide () {
      this.hide = 'text'
    },
    switchshow () {
      this.hide = 'password'
    },
    switchhidevis () {
      this.visibility = 'text'
    },
    switchshowvis () {
      this.visibility = 'password'
    },
    switchhidden () {
      this.hidden = 'text'
    },
    switchshowhidden () {
      this.hidden = 'password'
    },
    async submit () {
      const data = {
        passold: this.passold,
        passconnew: this.passconnew,
        passconfirm: this.passconfirm
      }
      try {
        const res = await this.$axios.$put('/user/pass', data)
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
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              location.reload()
            }
          })
        }
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: 'Warning',
          text: 'Data harus diisi dan pastikan password yang lama anda sudah sesuai!'
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
