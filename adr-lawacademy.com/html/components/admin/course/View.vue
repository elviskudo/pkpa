/* eslint-disable vue/valid-v-else-if */
<template>
  <v-app>
    <div class="tw-mx-auto tw-mt-2 tw-ml-2 tw-mr-2">
      <v-card>
        <div class="tw-flex tw-flex-col tw-mb-2">
          <div class="tw-px-12 tw-pb-4">
            <v-card-title class="tw-text-h5">
              View Mata Kuliah
            </v-card-title>
            <v-divider />
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12 tw-font-bold">Judul Mata Kuliah</label>
              </div>
              <div class="tw-col-span-3">
                {{ name }}
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="tw-col-span-3">
                <label class="tw-text-12 tw-font-bold">Daftar Universitas</label>
              </div>
              <div class="tw-col-span-2">
                {{ university_name }}
                <!-- <select v-model="university_id" class="tw-w-2/3 tw-form-input" disabled @change="getTutors">
              <option selected disabled value="">
                Pilih
              </option>
              <option v-for="unv in univercities" :key="unv.id" :value="unv.id" :selected="university_id == unv.id">
                {{ unv.name }}
              </option>
            </select> -->
              </div>
            </div>
            <!-- <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
          <div class="tw-col-span-3">
            <label class="tw-text-12">Nama Dosen</label>
          </div>
          <div class="tw-col-span-2">
            <div v-for="tutor in tutors" :key="tutor.id">
              <li>{{ tutor.fullname }}</li>
            </div>
          </div>
        </div> -->
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
              <div class="cols-span-2 tw-mr-5">
                <label class="tw-text-lg tw-font-bold">Diskusi Kelas</label><br>
                <span class="tw-text-gray-50">Jika diskusi aktif, fitur forum diskusi akan tampil di dashboard siswa</span>
              </div>
              <div>
                <v-switch
                  v-model="is_forum"
                  disabled
                />
              </div>
            </div>
            <div class="cols-span-3 tw-px-3 tw-py-3">
              <label class="tw-text-12">Deskripsi</label>
              <textarea
                v-model="description"
                class="
                    tw-form-input
                    block
                    tw-w-full
                    tw-px-3
                    tw-py-1.5
                    tw-text-base
                    tw-font-normal
                    tw-text-gray-700
                    tw-bg-white tw-bg-clip-padding
                    border tw-border-solid tw-border-gray-300
                    tw-rounded
                    transition
                    ease-in-out
                    tw-m-0
                    focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none
                  "
                rows="3"
                placeholder="Your message"
                disabled
              />
            </div>
            <v-card-title class="tw-text-h5">
              Photo Kelas
            </v-card-title>
            <v-img
              class="tw-mx-3 my-3"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              :src="background_image"
            />
            <v-card-title class="tw-text-h5">
              Sertifikat
            </v-card-title>
            <v-img
              class="tw-mx-3 my-3"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              :src="certificate"
            />
            <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3 tw-items-center tw-justify-center">
              <div class="">
                <label class="block tw-text-gray-500 tw-font-bold md:tw-text-left tw-pr-4 tw-pl-2" for="inline-fullname">
                  Publish
                </label>
              </div>
              <div class="">
                <v-switch
                  v-model="is_publish"
                  flat
                  :label="`Non-Aktif: ${is_publish.toString()}`"
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
      university_id: '',
      university_name: '',
      description: '',
      is_forum: false,
      is_publish: false,
      background_image: null,
      certificate: null
      // univercities: [],
      // tutors: []
    }
  },
  async mounted () {
    const res = await this.$axios.$get(`bank-course/${this.$route.params.id}`)
    this.name = res.data.name
    this.university_id = res.data.university_id
    this.university_name = res.data.universities ? res.data.universities.name : ''
    this.description = res.data.description
    this.is_forum = res.data.is_forum
    this.is_publish = res.data.is_publish
    this.background_image = res.data.background_image
    this.certificate = res.data.certificate

    // const univercities = await this.$axios.$get('university')
    // this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    back () {
      this.$router.push('/dashboard/admin/course')
    }
    // async getTutors () {
    //   const res = await this.$axios.$get(`user/user-tutor/?university_id=${this.university_id}`)
    //   this.tutors = res.data.map(obj => ({ id: obj.id, fullname: obj.fullname }))
    // }
  }
}
</script>
