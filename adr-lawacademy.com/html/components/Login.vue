<template>
  <ValidationObserver>
    <div class="tw-flex tw-mb-5">
      <form
        class="lg:tw-w-3/12 md:tw-w-4/12 tw-w-full tw-p-4 tw-mx-auto tw-mt-20 tw-mb-auto tw-shadow-lg"
        method="post"
        @submit.prevent="login"
      >
        <ErrorNotification v-if="error" :message="error" />
        <div class="tw-flex tw-justify-center tw-items-center tw-w-full">
          <a href="#home" class="tw-hidden lg:tw-flex">
            <img
              src="~/assets/images/logo/logo-pkpa.png"
              class="tw-w-25 tw-mr-8"
              style="width: 150px"
              alt="Logo PKPA"
            >
          </a>
          <a href="#home" class="tw-hidden lg:tw-flex">
            <img
              src="~/assets/images/logo/logo-pshk.png"
              class="tw-mr-8"
              style="width: 150px"
              alt="Logo PSHK"
            >
          </a>
        </div>
        <div class="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <p class="tw-text-2xl tw-px-4 tw-text-black tw-font-bold">
            Log-in
          </p>
          <p class="tw-text-xs tw-mb-4 tw-px-4 tw-mt-1">
            Silakan Log-in untuk masuk
          </p>
        </div>
        <div class="tw-w-full tw-mb-4 tw-px-4">
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <label class="tw-text-14">Email</label>
            <input
              v-model="username"
              type="text"
              name="username"
              placeholder="Email"
              class="tw-form-input tw-w-full"
            >
            <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="tw-w-full tw-mb-4 tw-px-4">
          <ValidationProvider
            v-slot="{ errors }"
            name="Password"
            rules="required"
          >
            <label class="tw-text-14">Password</label>
            <div class="tw-relative tw-w-full">
              <div class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2">
                <input class="tw-hidden" type="checkbox">
                <label v-if="visibility =='password'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchhide"><i class="mdi mdi-eye-off" aria-hidden="true" /></label>
                <label v-if="visibility =='text'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchshow"><i class="mdi mdi-eye" aria-hidden="true" /></label>
              </div>
              <input
                v-model="password"
                class="tw-form-input tw-w-full"
                :type="visibility"
                name="password"
                placeholder="Password"
                required
                autocomplete="off"
              >
            </div>
            <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="tw-text-right tw-mb-4 tw-pb-5 tw-px-4">
          <a class="tw-text-red-500 tw-text-14 tw-cursor-pointer" @click="fforgotpass">Lupa Password?</a>
        </div>
        <button
          type="submit"
          class="
          tw-rounded-lg
          tw-border-2
          tw-bg-orange-500
          hover:tw-bg-orange-600
          tw-w-full
          tw-py-3
          tw-mb-4
          tw-px-4
        "
        >
          <span class="tw-text-white">Login</span>
        </button>
        <div class="tw-text-left tw-text-14 tw-mb-4 tw-px-4">
          <p>
            Belum punya akun? Klik
            <nuxt-link class="tw-text-red-600" to="/register">
              Klik Daftar sekarang
            </nuxt-link>
          </p>
        </div>
        <div class="tw-text-left tw-text-14 tw-mb-4 tw-px-4">
          <nuxt-link class="tw-text-red-600" to="/">
            ← Kembali ke Homepage
          </nuxt-link>
        </div>
      </form>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import ErrorNotification from '~/components/ErrorNotification'

export default {
  components: {
    ErrorNotification, ValidationObserver, ValidationProvider
  },

  data () {
    return {
      username: '',
      password: '',
      error: null,
      visibility: 'password'
    }
  },
  mounted () {
  },
  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.username,
            password: this.password
          }
        })
        if (this.$auth.hasScope('superadmin') || this.$auth.hasScope('admin') || this.$auth.hasScope('tutor')) {
          // window.location.href = '/dashboard/admin'
          this.$router.replace('/dashboard/admin')
        } else {
          // window.location.href = '/'
          this.$router.replace('/')
        }
      } catch (e) {
        this.error = e.response.data.message
        if (this.error === 'Invalid Password!') {
          this.error = 'Silakan Periksa Kembali Email & Password yang digunakan!'
        } else if (this.error === 'User not found') {
          this.error = 'Alamat email belum terdaftar'
        }
      }
    },
    switchhide () {
      this.visibility = 'text'
    },
    switchshow () {
      this.visibility = 'password'
    },
    fforgotpass () {
      this.$router.push('/forgot-password/forgot-password')
    }
  }
}

</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
