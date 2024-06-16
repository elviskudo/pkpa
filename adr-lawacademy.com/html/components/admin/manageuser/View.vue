<template>
  <v-app>
    <v-card>
      <v-card-title class="tw-text-h5">
        {{ fullname }}
      </v-card-title>
      <v-divider />
      <v-form>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-flex tw-items-center tw-col-span-1">
            <label class="tw-text-12">Photo</label><br>
          </div>
          <div class="tw-col-span-2">
            <v-list-item-avatar width="100" height="100">
              <v-img :src="image_url" />
            </v-list-item-avatar>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-col-span-1">
            <label class="tw-text-12">Nama Lengkap</label><br>
          </div>
          <div>{{ fullname }}</div>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-col-span-1">
            <label class="tw-text-12">Login Terakhir</label><br>
          </div>
          <div>{{ $moment(last_login).format('DD MMMM YYYY HH:mm:ss') }}</div>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-col-span-1">
            <label class="tw-text-12">Tanggal Daftar</label><br>
          </div>
          <div>{{ $moment(created_at).format('DD MMMM YYYY HH:mm:ss') }}</div>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-col-span-1">
            <label class="tw-text-12">Progress</label><br>
          </div>
          <div class="tw-grid tw-grid-cols-3 tw-gap-2">
            <div class="tw-col-span-2 tw-mt-1.5">
              <div class="tw-bg-gray-200 tw-h-2">
                <div class="tw-bg-blue-600 tw-h-2" :style="'width: '+progress+'%'" />
              </div>
            </div>
            <div class="tw-col-span-1">
              {{ progress.toFixed() }}%
            </div>
          </div>
        </div>
        <div v-for="c in courses" :key="c.id" class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-3">
          <div class="tw-col-span-1">
            <label class="tw-text-12">{{ c.category_name }}</label><br>
          </div>
          <div class="tw-flex tw-flex-col tw-col-span-3">
            <div v-for="cc in c.courses" :key="cc.id">
              {{ cc.course_name }}
              <v-icon v-if="cc.course_progress == cc.course_total" color="green">
                mdi-check-bold
              </v-icon>
            </div>
          </div>
        </div>
        <v-divider />
        <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
          <v-btn
            class="tw-px-4 tw-py-4"
            color="warning"
            @click="back()"
          >
            Kembali
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      image_url: '',
      fullname: '',
      last_login: '',
      created_at: '',
      progress: 0,
      courses: []
    }
  },
  async fetch () {
    const res = await this.$axios.$get(`user-activity/${this.$route.params.id}`)
    this.image_url = res.data[0].image_url
    this.fullname = res.data[0].fullname
    this.last_login = res.data[0].last_login
    this.created_at = res.data[0].created_at
    if (res.data[0].total > 0) {
      this.progress = res.data[0].progress_all / res.data[0].total_all * 100
    }
    const arrCategory = res.data.map(item => item.category_name)
    const uniqCategory = [...new Set(arrCategory)]
    const arrNewCategory = []
    for (let i = 0; i < uniqCategory.length; i++) {
      const objNewCategory = {}
      const arrCourses = res.data.filter(item => uniqCategory[i] === item.category_name).map(obj => ({ course_name: obj.course_name, course_progress: obj.progress, course_total: obj.total }))
      objNewCategory.category_name = uniqCategory[i]
      objNewCategory.courses = arrCourses
      arrNewCategory.push(objNewCategory)
    }
    this.courses = arrNewCategory
  },
  methods: {
    back () {
      this.$router.push('/dashboard/admin/manageuser')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
