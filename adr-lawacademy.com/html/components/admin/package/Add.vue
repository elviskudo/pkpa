<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Tambah Mata Kuliah
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Universitas
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="university_id" name="state" class="tw-form-select tw-w-full" :disabled="loggedInUser.university_id" @change="getphaseuniversitas">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="unv in univercities" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Gelombang
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="phase_university_id" name="state" class="tw-form-select tw-w-full" @change="changePhase">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="phs in phase" :key="phs.id" :value="phs.id">
                    {{ phs.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Mata Kuliah
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="matakuliah_id" name="state" class="tw-form-select tw-w-full" @change="changeCourse">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="unv in matakuliah" :key="unv.id" :value="unv.id">
                    {{ unv.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Kategori
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <select v-model="category_id" name="state" class="tw-form-select tw-w-full" @change="changePackage">
                  <option selected disabled value="null">
                    Pilih
                  </option>
                  <option v-for="phs in category" :key="phs.id" :value="phs.id">
                    {{ phs.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="tw-w-full">
                <v-expansion-panels>
                  <v-expansion-panel v-for="(item, index) in itemsTopic" :key="index" expand>
                    <v-expansion-panel-header v-if="!item.nameTopic" color="blue-grey lighten-2">
                      Pilih Topik
                    </v-expansion-panel-header>
                    <v-expansion-panel-header v-else color="blue-grey lighten-2">
                      {{ item.nameTopic }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="tw-grid tw-grid-cols-3 tw-py-2">
                        <div class="tw-col-span-3">
                          <label class="tw-font-semibold">Topik</label>
                        </div>
                        <div class="tw-col-span-2">
                          <select v-model="item.topic_type" name="state" class="tw-form-select tw-w-full" @change="getcontentTopic(index, item.topic_type)">
                            <option selected disabled value="null">
                              Pilih
                            </option>
                            <option v-for="phs in topics" :key="phs.id" :value="phs.id">
                              {{ phs.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div v-for="(ct,index2) in item.contentTopics" :key="index2" :value="index2">
                        <div class="tw-grid tw-grid-cols-9 tw-gap-3">
                          <div class="tw-col-span-3">
                            <div class="tw-flex tw-flex-col">
                              <label class="tw-font-semibold">Urutan</label>
                              <input
                                :id="index2"
                                v-model="ct.urutan"
                                type="number"
                                class="tw-form-input tw-w-2/3"
                              >
                            </div>
                          </div>
                          <input v-model="ct.id" type="hidden">
                          <div class="tw-col-span-3">
                            <div class="tw-flex tw-flex-col">
                              <label class="tw-font-semibold">Judul</label>
                              <span class="tw-pt-3">{{ ct.name }}</span>
                            </div>
                          </div>
                          <div class="tw-col-span-3">
                            <div class="tw-flex tw-flex-col">
                              <label class="tw-font-semibold">Status</label>
                              <div class="-tw-mt-2">
                                <v-switch
                                  v-model="ct.is_active_topic"
                                  flat
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-icon class="tw-ml-2" @click="itemsTopic.splice(index, 1)">
                        Hapus
                      </v-icon>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
            <div class="md:tw-w-1/12">
              <v-btn
                class="tw-py-4"
                color="#fffff"
                @click="addTopic()"
              >
                Add Topik
              </v-btn>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Kunci Konten
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-switch
                  v-model="is_active"
                  flat
                  :label="is_active?'Aktif':'Non-Aktif'"
                  @click="fkuncishowhide()"
                />
              </div>
            </div>
            <div v-if="kuncikonten">
              <div class="md:tw-flex md:tw-items-center tw-mb-6">
                <div class="md:tw-w-1/3">
                  <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                    Urutan
                  </label>
                </div>
                <div class="md:tw-w-2/3">
                  <select v-model="package_id" name="package" class="tw-form-select tw-w-full">
                    <option selected disabled value="null">
                      Pilih
                    </option>
                    <option v-for="p in packages" :key="p.id" :value="p.id">
                      {{ p.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="md:tw-w-1/3">
                <label class="tw-block tw-text-gray-500 tw-font-bold md:tw-text-left tw-mb-1 md:tw-mb-0 tw-pr-4 tw-pl-2" for="inline-fullname">
                  Publish
                </label>
              </div>
              <div class="md:tw-w-2/3">
                <v-switch
                  v-model="is_publish"
                  flat
                  :label="is_publish?'Aktif':'Non-Aktif'"
                />
              </div>
            </div>
            <!--end-->
          </div>

          <v-divider />
          <div class="tw-flex tw-flex-row tw-py-4">
            <v-btn
              class="tw-px-4 tw-py-4 tw-w-1/5 tw-left-2/5"
              color="#fffff"
              @click="back()"
            >
              Kembali
            </v-btn>
            <v-btn
              type="submit"
              class="tw-px-4 tw-py-4 tw-w-1/5 tw-left-2/4"
              color="#C2C2C2"
              @click="submit"
            >
              Simpan
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: '',
      is_active: false,
      university_id: null,
      matakuliah_id: null,
      phase_university_id: null,
      category_id: null,
      // topic_id: 0,
      univercities: [],
      matakuliah: [],
      phase: [],
      category: [],
      topics: [],
      contentTopicss: [],
      kuncikonten: false,
      itemstp: [],
      itemsTopic: [{
        nameTopic: '',
        // is_active_topic: false,
        // urutan: '',
        topic_type: null,
        contentTopics: []
      }],
      packages: [],
      package_id: null,
      is_publish: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const univercities = await this.$axios.$get('university')
    this.univercities = univercities.data.universities.map(obj => ({ id: obj.id, name: obj.name }))
    if (this.loggedInUser.university_id) {
      this.university_id = this.loggedInUser.university_id
      this.getphaseuniversitas()
    }
    // const categories = await this.$axios.$get('bank-content-category')
    // this.category = categories.data.data.map(obj => ({ id: obj.id, name: obj.name }))
  },
  methods: {
    async submit () {
      const data = {
        course_id: this.matakuliah_id,
        phase_id: this.phase_university_id,
        content_category_id: this.category_id,
        owner_id: this.loggedInUser.id,
        predecessor: this.package_id,
        is_publish: this.is_publish,
        itemstp: JSON.stringify(this.itemsTopic)
      }
      try {
        const res = await this.$axios.$post('course', data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/package')
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
    back () {
      this.$router.push('/dashboard/admin/package')
    },
    async changePhase () {
      const mt = await this.$axios.$get(`bank-course/?phase_id=${this.phase_university_id}&university_id=${this.university_id}`)
      this.matakuliah = mt.data.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    async changeCourse () {
      const topics = await this.$axios.$get(`bank-topic?course_id=${this.matakuliah_id}`)
      this.topics = topics.data.data.map(obj => ({ id: obj.id, name: obj.name }))

      const categories = await this.$axios.$get('bank-content-category')
      this.category = categories.data.data.map(obj => ({ id: obj.id, name: obj.name }))
    },
    async changePackage () {
      const res = await this.$axios.$get(`course/list-predecessor/?phaseId=${this.phase_university_id}&contentCategoryId=${this.category_id}`)
      this.packages = res.data
    },
    async getphaseuniversitas () {
      const phase = await this.$axios.$get(`phase-university/?university_id=${this.university_id}`)
      this.phase = phase.data.data.map(obj => ({ id: obj.id, name: obj.name }))
      const arrPhase = []
      this.phase.forEach((element, index) => {
        if (element.status === 'Daftar') {
          arrPhase.unshift(element)
        } else if (element.status == 'Ditutup') {
          arrPhase.splice(index, 1)
        } else {
          arrPhase.push(element)
        }
      })
      this.phase = arrPhase
    },
    async getcontentTopic (index, id) {
      try {
        const res = await this.$axios.$get(`bank-content-topic/?topicId=${id}`)
        if (!res.error) {
          this.itemsTopic[index].contentTopics = res.data.data.map(item => ({ id: item.id, name: item.name }))
        }
      } catch (e) {
        // console.log(e)
      }
    },
    fkuncishowhide () {
      if (this.is_active === true) {
        this.kuncikonten = true
      } else {
        this.kuncikonten = false
      }
    },
    addTopic () {
      this.itemsTopic.push({
        nameTopic: '',
        topic_type: null,
        contentTopics: []
      })
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
