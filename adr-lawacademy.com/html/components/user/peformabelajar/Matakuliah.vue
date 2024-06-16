<template>
  <v-app>
    <div
      v-for="crs in courses"
      :key="crs.id"
      class="tw-px-12"
    >
      <div class="md:tw-flex md:tw-flex-row tw-my-3 tw-px-2 tw-py-5 rounded" style="border: 1px solid #E0E0E0;">
        <NuxtLink :to="`/dashboard/user/course/${crs.id}/${crs.content_topic_id}`">
          <img
            :src="crs.bg_img"
            :alt="crs.course_name"
            class="tw-rounded img-course tw-object-cover tw-w-32 tw-mx-4"
          >
        </NuxtLink>
        <div class="tw-flex tw-flex-col tw-w-full md:tw-max-w-2xl md:tw-pl-4 md:tw-pr-12">
          <span class="tw-text-md tw-font-bold tw-px-4 tw-text-[#333333]">
            {{ crs.course_name }}
          </span>
          <span class="tw-text-sm tw-text-gray-400 tw-px-4 tw-py-2">
            Sub topik selesai:
            <span class="tw-text-black tw-font-bold">{{ crs.progress }}/{{ crs.total }}</span>
          </span>
          <div>
            <div class="tw-col-span-2 tw-mt-1.5">
              <div class="tw-bg-gray-200 tw-h-1 tw-mx-4">
                <div class="tw-bg-[#146EB4] tw-h-1" :style="'width: '+parseInt(crs.progress, 10)/parseInt(crs.total, 10)*100+'%'" />
              </div>
            </div>
            <div class="tw-col-span-1 tw-px-4 tw-font-semibold">
              {{ (parseInt(crs.progress, 10)/parseInt(crs.total, 10)*100).toFixed() }}% selesai
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      courses: []
    }
  },

  async fetch () {
    const res = await this.$axios.$get('/show-course/course')
    this.courses = res.data.map(obj => ({ id: obj.id, fullname: obj.fullname, package_name: obj.package_name, course_name: obj.course_name, bg_img: obj.bg_img, content_course_name: obj.content_course_name, category_name: obj.category_name, content_topic_id: obj.content_topic_id, tutors: obj.tutors, total: obj.total, progress: obj.progress }))
  }
}
</script>
<style scoped>
.theme--light {
  /* background-color: #FFFFFF !important; */
  border: none;
}
</style>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
    // background-color: #E5E5E5;
  }
  ::v-deep .v-expansion-panel {
    margin-bottom: 20px;
  }
</style>

<style scoped lang="scss">
 .container {
    height: auto !important;
    width: auto !important;
    background-color:#ffffff;
  }
</style>
