/* eslint-disable vue/valid-v-else-if */
<template>
  <v-app>
    <div class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2">
      <v-card>
        <div class="tw-flex tw-flex-col tw-mb-2">
          <div class="tw-px-12 tw-pb-4">
            <v-card-title class="tw-text-h5">
              View Topik
            </v-card-title>
            <v-divider />
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Nama Mata Kuliah</label>
              </div>
              <div class="tw-col-span-3">
                <select v-model="course_id" class="md:tw-w-2/3 tw-form-select" disabled>
                  <option selected disabled value="">
                    Pilih
                  </option>
                  <option v-for="course in courses" :key="course.id" :value="course.id" :selected="course_id == course.id">
                    {{ course.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12">Judul Topik</label>
                <input
                  v-model="name"
                  disabled
                  type="text"
                  name="name"
                  class="tw-form-input md:tw-w-2/3"
                >
                <span
                  class="tw-text-overline grey--text tw-text--darken-3 tw-mx-1"
                >
                  harus berupa huruf,angka,spasi,simbol ampersand(&),titik,(.) dan strip(-) 0/150
                </span>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="cols-span-2 tw-mr-5">
                <label class="tw-text-lg tw-font-bold">Publish</label><br>
                <span class="tw-text-gray-50">Jika publish ini diaktifkan, maka pembuatan konten akan dapat disematkan</span>
              </div>
              <div>
                <v-switch
                  v-model="is_publish"
                  disabled
                />
              </div>
            </div>
            <v-divider />
            <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
              <div class="col-start-3 tw-col-span-4">
                <v-btn
                  class="tw-px-4 tw-py-4"
                  color="warning"
                  @click="back()"
                >
                  Kembali
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      course_id: '',
      is_publish: false,
      courses: []
    }
  },
  async mounted () {
    const res = await this.$axios.$get(`bank-topic/${this.$route.params.id}`)
    this.name = res.data.name
    this.course_id = res.data.course_id
    this.is_publish = res.data.is_publish

    const res2 = await this.$axios.$get('bank-course')
    this.courses = res2.data.data.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    back () {
      this.$router.push('/dashboard/admin/topic')
    }
  }
}
</script>
