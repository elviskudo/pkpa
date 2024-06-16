<template>
  <v-app>
    <div v-if="data.length>0" class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-4 tw-m-4">
      <a v-for="item in data" :key="item.id" @click="ShowCertificate(item.course_id)">
        <div class="tw-grid tw-grid-rows-2 tw-shadow-2xl tw-border-gray-400 tw-bg-white tw-h-96 tw-rounded">
          <v-img
            :src="item.bg_img"
            alt="Bahasa Korea Percakapan Sehari - Hari"
            class="tw-mb-4 tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-mx-3 tw-px-2 tw-py-3">
            <span class="tw-text-md tw-pb-4">Sertifikat Lulus Mata Kuliah</span>
            <span class="tw-text-lg tw-font-bold tw-pb-4">{{ item.course_name }} </span>
            <span class="tw-text-sm tw-pb-4">Tanggal Diperoleh {{ $moment(item.created_at).format('DD MMMM YYYY') }}</span>
          </div>
        </div>
      </a>
    </div>
    <div v-else ref="notFound" />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  async fetch () {
    try {
      const res = await this.$axios.$get('show-course/course')
      this.data = res.data.filter(item => item.complete === '0').map(item => ({ course_id: item.course_id, bg_img: item.bg_img, course_name: item.course_name, created_at: item.created_at }))
      if (this.data.length === 0) {
        this.$refs.notFound.innerHTML = 'Data tidak ditemukan'
      }
    } catch (err) {
      // console.log(err)
    }
  },
  methods: {
    async ShowCertificate (id) {
      const file = await this.$axios.get(`view/certificate/course/${id}`, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/pdf',
          Accept: 'application/pdf'
        }
      })
      const pdf = new Blob([file.data], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(pdf)
      window.open(fileURL)

      // const fileURL = window.URL.createObjectURL(new Blob([file.data]))
      // const link = document.createElement('a')
      // link.href = fileURL
      // link.setAttribute('download', 'file.pdf') // or any other extension
      // document.body.appendChild(link)
      // link.click()
    }
  }
}
</script>
<style scoped>
.theme--light {
  background-color: #FFFFFF !important;
  border: none;
}
</style>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
    background-color: #E5E5E5;
  }
</style>

<style scoped lang="scss">
 ::v-deep .container {
    height: auto;
    width: 100% !important;
    background-color:#ffffff;
  }
</style>
