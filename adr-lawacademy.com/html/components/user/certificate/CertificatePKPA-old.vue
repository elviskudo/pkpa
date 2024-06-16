<template>
  <div>
    <div v-if="numData>0" class="tw-grid tw-grid-cols-1 md:grid-cols-3 tw-gap-4">
      <a @click="showCertificate(2)">
        <div class="tw-flex tw-flex-col tw-justify-start tw-items-start tw-shadow-2xl tw-border-gray-400  tw-w-72 tw-mr-5 tw-pl-2 tw-pr-2 tw-bg-white">
          <img :src="data.certificate" height="200px" width="500px" alt="" class="tw-mb-4">
          <span class="tw-text-md tw-pb-4">Sertifikat Kelulusan</span>
          <span class="tw-text-lg tw-font-bold tw-pb-4">{{ data.course_name }} </span>
          <span class="tw-text-sm tw-pb-4">Tanggal Diperoleh {{ $moment(data.created_at).format('DD MMMM YYYY') }}</span>
        </div>
      </a>
    </div>
    <div v-if="openModal" class="modal">
    <!-- <client-only>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"

        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content"> -->
          <div ref="document">
            <div style="background-repeat: no-repeat; background-attachment: fixed; background-size: 850px 650px; background-position: center; height: 800px" :style="{ 'background-image': 'url(' + certificate + ')' }">
              <div style="padding-top: 440px; margin-right: 25px; text-align: center;">
                <div style="text-align: center;">
                  <span style="font-size: 30px;"><b>{{ fullname }}</b></span>
                  <br><br>
                  <br><br>
                  <br><br><br><br>
                  <span style="font-size: 25px;"><i>{{ course_name }}</i></span>
                  <br><br>
                  <span style="font-size: 16px;"><i>Pada Tanggal</i></span>
                  <br>
                  <span style="font-size: 16px;"><u>{{ created_at }}</u></span>
                </div>
              </div>
            </div>
          </div>
        <!-- </section>
      </vue-html2pdf>
    </client-only> -->
      <a @click="closeModal()">Close</a>
    </div>
    <div v-else>
      <span>Data tidak ditemukan</span>
    </div>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'

export default {
  data () {
    return {
      data: {},
      openModal: false,
      closeModal: false,
      numData: 0,
      certificate: '',
      fullname: '',
      course_name: '',
      created_at: ''
    }
  },
  async fetch () {
    try {
      const res = await this.$axios.$get('user-activity/user')
      if (!res.error) {
        this.data = res.data[0]
        this.numData = res.data.length
      } else {
        this.numData = 0
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async showCertificate () {
      const file = await this.$axios.get(`view/certificate/pkpa`, {
//        responseType: 'blob',
        // headers: {
        //   'Content-Type': 'application/pdf',
        //   Accept: 'application/pdf'
        // },
	      userId: this.data.id
      })
      console.log('certificate', file)

      const response = file.data
      this.certificate = response.certificate
      this.fullname = response.fullname
      this.course_name = response.course_name
      this.created_at = response.created_at
      this.openModal = true

      html2pdf(this.$refs.document, {
        margin: 1,
        filename: 'certificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
      })

/*      const pdf = new Blob([file.data], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(pdf)
      window.open(fileURL)
*/
      // const fileURL = window.URL.createObjectURL(new Blob([file.data]))
      // const link = document.createElement('a')
      // link.href = fileURL
      // link.setAttribute('download', 'file.pdf') // or any other extension
      // document.body.appendChild(link)
      // link.click()
    }
  },
  closeModal() {
    this.openModal = false
  }
}
</script>
<style scoped>
.theme--light {
  background-color: #FFFFFF !important;
  border: none;
}
.modal {
    width: 850px;
    margin-left: 200px;
    height: 520px;
    background: white;
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
