<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-xl tw-px-2">VIew Tutor</span>
        </div>
        <hr class="tw-mb-6">
      </div>
      <div class="tw-px-12">
        <div class="md:tw-flex md:tw-items-center tw-mb-6 form-group">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Nama Lengkap
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="fullname" type="text" class="tw-form-input tw-w-full" readonly>
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Email
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="email" type="text" class="tw-form-input tw-w-full" readonly>
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Telepon
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="phone_no" type="text" class="tw-form-input tw-w-full" readonly>
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Whatsapp
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="wa_no" type="text" class="tw-form-input tw-w-full" readonly>
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-pr-4 tw-pl-2" for="inline-fullname">
              Universitas
            </label>
          </div>
          <div class="md:tw-w-2/3">
            {{ university_name }}
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-pr-4 tw-pl-2" for="inline-fullname">
              Mata Kuliah
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <span v-for="(c, index) in courses" :key="c.id">
              {{ index+1 }}. {{ c.name }}
              <br>
            </span>
          </div>
        </div>
        <v-divider />
      </div>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4 tw-pt-4">
          <button
            class="tw-rounded tw-bg-white tw-border-solid border tw-border-gray-700 tw-border-opacity-100 tw-p-2"
            @click="$router.go(-1)"
          >
            Kembali
          </button>
        </div>
      </div>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      university_name: '',
      courses: []
    }
  },
  async mounted () {
    const user = await this.$axios.$get(`user/user-tutor/?user_id=${this.$route.params.id}`)
    // console.log(user)
    this.id = user.data[0].id
    this.fullname = user.data[0].fullname
    this.email = user.data[0].email
    this.phone_no = user.data[0].phone_no
    this.wa_no = user.data[0].wa_no
    // this.university_id = user.data[0].id_univ
    this.university_name = user.data[0].university_name
    this.courses = user.data[0].courses.map(item => ({ id: item.id, name: item.name }))
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
