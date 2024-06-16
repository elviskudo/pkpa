<template>
  <div>
    <div v-if="numData>0" class="tw-grid tw-grid-cols-1 md:grid-cols-3 tw-gap-4">
      <a class="tw-flex tw-flex-col tw-justify-start tw-items-start tw-shadow-2xl tw-border-gray-400  tw-w-72 tw-mr-5 tw-pl-2 tw-pr-2 tw-bg-white" @click="showCertificate">
        <img :src="data.certificate" height="200px" width="500px" alt="" class="tw-mb-4">
        <span class="tw-text-md tw-pb-4">Sertifikat Kelulusan</span>
        <span class="tw-text-lg tw-font-bold tw-pb-4">{{ data.course_name }} </span>
        <span class="tw-text-sm tw-pb-4">Tanggal Diperoleh {{ $moment(data.created_at).format('DD MMMM YYYY') }}</span>
      </a>
    </div>

    <client-only>
      <vue-html2pdf
        v-show="modal"
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        :filename="modalData.certificate_no"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="100%"

        @progress="onProgress($event)"
        @beforeDownload="beforeDownload($event)"
        @hasDownloaded="hasDownloaded($event)"
      >
        <section slot="pdf-content" class="pdf-content-wrapper">
          <div ref="document" class="pdf-content">
            <img :src="modalData.certificate" alt="Certificate" width="1000" height="100%" crossOrigin="anonymous">
            <div class="pdf-content-text">
              <span class="font-sfpro pdf-content-number">{{ modalData.certificate_no }}</span>
              <span class="font-bigcaslon pdf-content-name" ref="dynamicText">{{ modalData.fullname }}</span>
              <span class="font-sfpro pdf-content-created">{{ modalData.created_at }}</span>
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      data: {},
      numData: 0,
      modal: false,
      modalData: {
        certificate: '',
        fullname: '',
        course_name: '',
        created_at: ''
      }
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
    resizeText() {
      const containerWidth = 600;
      const dynamicText = this.$refs.dynamicText;
      let textWidth = dynamicText.offsetWidth;

      while (textWidth > containerWidth && parseInt(window.getComputedStyle(dynamicText).fontSize) > 0) {
        const currentFontSize = parseInt(window.getComputedStyle(dynamicText).fontSize);
        dynamicText.style.fontSize = (currentFontSize - 1) + 'px';
        textWidth = dynamicText.offsetWidth;
      }
    },
    async showCertificate () {
      const { default: VueHtml2pdf } = await import('vue-html2pdf')

      const file = await this.$axios.get('view/certificate/pkpa', {
        // responseType: 'blob',
        // headers: {
        //   'Content-Type': 'application/pdf',
        //   Accept: 'application/pdf'
        // },
        userId: this.data.id
      })
      // console.log('certificate', file)

      const { certificate, certificate_no, course_name, created_at, fullname } = await file.data.data
      const timestamp = new Date().getTime();
      const imageWithTimestamp = certificate.includes('?') ? `${certificate}&v=${timestamp}` : `${certificate}?v=${timestamp}`;
      this.modalData = {
        certificate: imageWithTimestamp || '',
        certificate_no: certificate_no || '',
        course_name: course_name || '',
        created_at: created_at || '',
        fullname: fullname || '',
      }
      this.modal = true
      setTimeout(() => {
        this.resizeText()
        this.$refs.html2Pdf.generatePdf()
      }, 1000)
    },
    onProgress (e) {
      console.log('onProgress', e)
    },
    beforeDownload (e) {
      console.log('beforeDownload', e)
    },
    hasDownloaded (e) {
      console.log('hasDownloaded', e)
    }
  }
}
</script>

<style scoped>
.theme--light {
  background-color: #ffffff !important;
  border: none;
}
.pdf-content-wrapper {
  width: 100%;
  height: 100%;
}
.pdf-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
/* .pdf-content-label {
  position: absolute;
  top: 70px;
  right: 165px;
  z-index: 1;
} */
.pdf-content-text {
  position: absolute;
  top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 600px;
  z-index: 1;
}
.font-bigcaslon {
  font-family: 'Big Caslon';
  font-size: 80px;
}
.font-sfpro {
  font-family: 'SF Pro';
  font-size: 20px;
}
.pdf-content-name {
  position: absolute;
  bottom: 380px;
}
.pdf-content-created {
  position: absolute;
  bottom: 230px;
}
</style>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: fit-content;
  background-color: #e5e5e5;
}
::v-deep .container {
  height: auto;
  width: 100% !important;
  background-color: #ffffff;
}
</style>
