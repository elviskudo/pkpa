<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-col tw-mb-2">
        <div class="tw-px-12 tw-pb-4">
          <v-card-title class="tw-text-h5 tw-py-4">
            Logo Universitas
          </v-card-title>
          <v-divider />
          <div class="tw-px-12">
            <div class="md:tw-flex md:tw-items-center tw-mb-6">
              <div class="tw-w-full">
                <div v-for="item in itemsTopic" :key="item.id">
                  <div class="tw-grid tw-grid-cols-9 tw-gap-3">
                    <div class="tw-col-span-3 tw-py-4">
                      <div class="tw-flex tw-flex-col">
                        <v-img :src="item.logo_url" :alt="item.logo_url" max-width="50px" />
                      </div>
                    </div>
                    <input v-model="item.id" type="hidden">
                    <div class="tw-col-span-3 tw-py-4">
                      <div class="tw-flex tw-flex-col">
                        <span class="tw-pt-3">{{ item.name }}</span>
                      </div>
                    </div>
                    <div class="tw-col-span-3 tw-py-4">
                      <div class="tw-flex tw-flex-col">
                        <div class="-tw-mt-2">
                          <input v-model="item.order" type="text" class="tw-form-input tw-w-full md:tw-w-2/3">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      users: [],
      itemsTopic: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    const res = await this.$axios.$get('/university')
    this.users = res.data.universities
    // this.id = this.users[0].id
    this.users.forEach((arrUser) => {
      this.itemsTopic.push({
        id: arrUser.id,
        name: arrUser.name,
        logo_url: arrUser.logo_url,
        order: arrUser.order
      })
    })
  },
  methods: {
    async submit () {
      const data = {
        itemstp: JSON.stringify(this.itemsTopic)
      }
      try {
        const res = await this.$axios.$put('/university/updateUniv', data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          // this.$router.push('/dashboard/admin/package')
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
      // this.$router.push('/dashboard/admin/package')
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
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
