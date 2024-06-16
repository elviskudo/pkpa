<template>
  <v-app>
    <v-card>
      <div class="tw-px-12">
        <v-card-title class="tw-text-h5" />
        <div class="tw-flex tw-flex-col tw-mb-2">
          <span class="tw-text-xl tw-px-2">Edit Tutor</span>
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
            <input v-model="fullname" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Email
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="email" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Telepon
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="phone_no" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              No Whatsapp
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <input v-model="wa_no" type="text" class="tw-form-input tw-w-full">
          </div>
        </div>
        <hr class="tw-mb-6">
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Pilih Universitas
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="university_id" name="state" class="tw-form-select tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="univercities == id">
                {{ unv.name }}
              </option>
            </select>
          </div>
        </div>
        <!-- <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="md:tw-w-1/3">
            <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
              Gelombang
            </label>
          </div>
          <div class="md:tw-w-2/3">
            <select v-model="phase_university_id" name="state" class="tw-form-input tw-w-full">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="phs in phase" :key="phs.id" :value="phs.id" :selected="phs == university_id">
                {{ phs.name }}
              </option>
            </select>
          </div>
        </div> -->
        <div class="md:tw-flex md:tw-items-center tw-mb-6">
          <div class="tw-w-full">
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, index) in itemsTopic" :key="index" expand>
                <v-expansion-panel-header color="blue-grey lighten-2">
                  Pilih Matakuliah
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="tw-grid tw-grid-cols-3 tw-py-2">
                    <div class="tw-col-span-3">
                      <label class="tw-font-semibold">Matakuliah</label>
                    </div>
                    <div class="tw-col-span-2">
                      <select v-model="item.course_id" name="state" class="tw-form-select tw-w-full">
                        <option selected disabled value="null">
                          Pilih
                        </option>
                        <option v-for="unv in matakuliah" :key="unv.id" :value="unv.id" :selected="unv == item.course_id">
                          {{ unv.name }}
                        </option>
                      </select>
                      <input
                        v-model="item.id"
                        placeholder=""
                        class="tw-form-input"
                        value=""
                        type="hidden"
                      >
                    </div>
                  </div>
                  <v-icon class="tw-ml-2" @click="itemsTopic.splice(index, 1)">
                    mdi-trash-can
                  </v-icon>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
        <div class="md:tw-w-1/12 tw-py-8">
          <v-btn
            class="tw-py-4"
            color="#fffff"
            @click="addTopic()"
          >
            Add Matakuliah
          </v-btn>
        </div>
      </div>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <button
            class="tw-rounded tw-bg-slate-400 tw-border-solid border tw-border-gray-700 tw-border-opacity-100 tw-p-2"
            @click="$router.go(-1)"
          >
            Cancel
          </button>
          <button class="tw-rounded tw-bg-blue-600 tw-p-2 tw-text-white" @click="submit()">
            Submit
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
      university_id: null,
      univercities: [],
      matakuliah: [],
      itemsTopic: [{
        course_id: null
      }]
    }
  },
  async mounted () {
    const user = await this.$axios.$get(`user/user-tutor/?user_id=${this.$route.params.id}`)
    this.id = user.data[0].id
    this.fullname = user.data[0].fullname
    this.email = user.data[0].email
    this.phone_no = user.data[0].phone_no
    this.wa_no = user.data[0].wa_no
    this.university_id = user.data[0].university_id
    this.itemsTopic = user.data[0].courses.map(item => ({ course_id: item.id, name: item.name }))

    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))

    const mt = await this.$axios.$get(`bank-course/?university_id=${this.university_id}`)
    this.matakuliah = mt.data.data.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      try {
        const data = {
          fullname: this.fullname,
          email: this.email,
          phone_no: this.phone_no,
          wa_no: this.wa_no,
          university_id: this.university_id,
          // password: this.password,
          courses: JSON.stringify(this.itemsTopic)
        }
        const res = await this.$axios.$put(`user/update-admin-univ/${this.$route.params.id}`, data)
        if (res.error) {
          this.$swal({
            icon: 'error',
            title: 'warning',
            text: res.message
          })
        } else {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/administrator/admin-univ?tab=tutor')
        }
      } catch (e) {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        this.error = e.response.data.message
      }
    },
    async getCourse () {
      const mt = await this.$axios.$get(`bank-course/?university_id=${this.university_id}`)
      this.matakuliah = mt.data.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    addTopic () {
      this.itemsTopic.push({
        course_id: null
      })
    }
  }
}
</script>
