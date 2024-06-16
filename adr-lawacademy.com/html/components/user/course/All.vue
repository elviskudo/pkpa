<template>
  <v-app class="tw-mr-8 tw-ml-7">
    <v-expansion-panels
      v-model="panel"
      multiple
      class="tw-mt-6"
    >
      <v-expansion-panel
        v-for="c in courses"
        :key="c.id"
        class="tw-rounded tw-mb-4 tw-py-5 tw-font-semibold"
      >
        <v-expansion-panel-header class="tw-font-semibold">
          {{ c.category_name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="tw-pt-6">
          <div v-for="crs in c.courses" :key="crs.id" class="">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-pb-4">
              <div v-if="c.category_name.toLowerCase().trim() !== 'materi dasar' && checkComplete > 0">
                <img
                  :src="crs.bg_img"
                  :alt="crs.course_name"
                  class="tw-my-2 tw-rounded tw-object-cover tw-filter tw-grayscale"
                  width="200px"
                >
              </div>
              <div v-else>
                <NuxtLink :to="`/dashboard/user/course/${crs.id}/${crs.content_topic_id}`">
                  <img
                    :src="crs.bg_img"
                    :alt="crs.course_name"
                    class="tw-my-2 tw-rounded tw-object-cover tw-filter tw-grayscale-0"
                    width="200px"
                  >
                </NuxtLink>
              </div>
              <div class="tw-flex tw-flex-col tw-w-full">
                <span class="tw-text-lg tw-font-bold tw-px-4">
                  {{ crs.course_name }}
                </span>
                <div class="tw-px-4 tw-py-2">
                  <span v-for="tutor in crs.tutors" :key="tutor.id" class="tw-text-sm tw-font-normal tw-text-[#858585]">
                    {{ tutor.fullname }}
                  </span>
                </div>
                <div class="tw-flex">
                  <div class="tw-mt-1.5 tw-w-full md:tw-w-60">
                    <div class="tw-rounded tw-bg-gray-200 tw-h-2 tw-ml-4 tw-mr-1">
                      <div class="tw-rounded tw-bg-[#FF9900] tw-h-2" :style="'width: '+parseInt(crs.progress, 10)/parseInt(crs.total, 10)*100+'%'" />
                    </div>
                  </div>
                  <div class="tw-px-1">
                    {{ (parseInt(crs.progress, 10)/parseInt(crs.total, 10)*100).toFixed() }}%
                    <span v-if="(parseInt(crs.progress, 10)/parseInt(crs.total, 10)*100).toFixed() == 100">
                      <span>Selesai</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr class="tw-mb-6">
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      panel: [0],
      disabled: false,
      readonly: false,
      courses: [],
      checkComplete: 0
    }
  },
  async mounted () {
    const res = await this.$axios.$get('/show-course/course')
    const arrCategory = res.data.map(item => item.category_name)
    this.checkComplete = res.data.filter(item => item.category_name.toLowerCase().trim() === 'materi dasar').reduce((sum, item) => parseInt(item.complete) + sum, 0)
    const uniqCategory = [...new Set(arrCategory)]
    const arrNewCategory = []
    for (let i = 0; i < uniqCategory.length; i++) {
      const objNewCategory = {}
      const arrCourses = res.data.filter(item => uniqCategory[i] === item.category_name).map(obj => ({ id: obj.id, fullname: obj.fullname, package_name: obj.package_name, course_name: obj.course_name, bg_img: obj.bg_img, content_course_name: obj.content_course_name, category_name: obj.category_name, content_topic_id: obj.content_topic_id, tutors: obj.tutors, total: obj.total, progress: obj.progress }))
      objNewCategory.category_name = uniqCategory[i]
      objNewCategory.courses = arrCourses
      arrNewCategory.push(objNewCategory)
    }
    this.courses = arrNewCategory
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
 ::v-deep .v-slide-group__wrapper {
    // background-color: #E5E5E5;
    min-height: fit-content;
  }
</style>
<style scoped lang="scss">
  .container {
    height: 100% !important;
    width: 100% !important;
    // background-color:#ffffff;
  }
</style>
