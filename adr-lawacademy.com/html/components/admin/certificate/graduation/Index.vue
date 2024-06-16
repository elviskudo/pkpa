<template>
  <v-app>
    <v-card>
      <div class="tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-3 tw-mt-5">
        <div class="tw-font-bold tw-text-lg">
          Sertifikat Kelulusan
        </div>
      </div>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="data"
        class="elevation-1"
      >
        <template #[`item.id`]="{ item }">
          {{ data.indexOf(item) + 1 }}
        </template>
        <template #top>
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-10 tw-px-3">
            <div>
              <label class="tw-relative tw-block">
                <input
                  v-model="search"
                  class="tw-form-input tw-w-full tw-bg-white placeholder:tw-font-italic tw-border tw-border-slate-400 tw-drop-shadow-md tw-rounded-md tw-py-3 tw-pl-3 tw-pr-10 focus:tw-outline-none"
                  placeholder="Enter your keyword to search"
                  type="text"
                >

                <span class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3">
                  <fa :icon="['fas', 'search']" style="color: orange" />
                </span>
              </label>
            </div>
          </div>
          <!-- <v-toolbar
            flat
          >
            <v-toolbar-title>Sertifikat Kelulusan</v-toolbar-title>
            <v-divider
              class="tw-mx-4"
              inset
              vertical
            />
            <v-spacer />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
            <v-spacer />
          </v-toolbar> -->
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon
            small
            class="tw-mr-2"
            @click="viewItem(item.id)"
          >
            mdi mdi-eye
          </v-icon>
        </template>
        <template #no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <client-only>
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        :filename="`Sertifikat ${modalData.fullname}`"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="100%"

        @progress="onProgress($event)"
        @beforeDownload="beforeDownload($event)"
        @hasDownloaded="hasDownloaded($event)"
        ref="html2Pdf"
        v-show="modal"
      >
        <section class="pdf-content-wrapper" slot="pdf-content">
          <div class="pdf-content" ref="document">
            <img :src="modalData.certificate" alt="Certificate" width="1000" height="100%" crossOrigin="anonymous">
            <div class="pdf-content-text">
              <span style="font-size: 30px;"><b>{{ modalData.fullname }}</b></span>
              <!-- <br><br><br><br><br><br><br><br>
              <span style="font-size: 25px;"><i>{{ modalData.course_name }}</i></span>
              <br><br>
              <span style="font-size: 16px;"><i>Pada Tanggal</i></span>
              <br>
              <span style="font-size: 16px;"><u>{{ modalData.created_at }}</u></span> -->
              <br><br><br><br><br><br><br><br><br><br><br><br>
              <span style="font-size: 16px;"><u>{{ `Jakarta, ${modalData.created_at}` }}</u></span>
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </client-only>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'No',
        align: 'start',
        sortable: false,
        value: 'id'
      },
      { text: 'Nomor Sertifikat', value: 'certificate_no' },
      { text: 'Nama', value: 'fullname' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    modal: false,
    modalData: {
      certificate: '',
      fullname: '',
      course_name: '',
      created_at: ''
    },
    data: []
  }),

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const res = await this.$axios.$get('/user-activity/data-certificate')
      this.data = res.data
    },
    async viewItem (id) {
      const { default: VueHtml2pdf } = await import('vue-html2pdf')

      const file = await this.$axios.get(`view/certificate/pkpa`, {
        // responseType: 'blob',
        // headers: {
        //   'Content-Type': 'application/pdf',
        //   Accept: 'application/pdf'
        // }
        userId: id
      })
      // const pdf = new Blob([file.data], { type: 'application/pdf' })
      // const fileURL = URL.createObjectURL(pdf)
      // window.open(fileURL)
      const { certificate, fullname, course_name, created_at } = await file.data.data
      const timestamp = new Date().getTime();
      const imageWithTimestamp = certificate.includes('?') ? `${certificate}&v=${timestamp}` : `${certificate}?v=${timestamp}`;
      this.modalData = {
        certificate: imageWithTimestamp || '',
        fullname: fullname || '',
        course_name: course_name || '',
        created_at: created_at || ''
      }
      console.log('file', file)
      console.log('certificate', certificate)
      console.log('fullname', fullname)
      console.log('course_name', course_name)
      console.log('created_at', created_at)
      console.log('timestamp', timestamp)
      console.log('imageWithTimestamp', imageWithTimestamp)
      console.log('this.modalData', this.modalData)
      this.modal = true
      console.log('this.modal', this.modal)
      setTimeout(this.$refs.html2Pdf.generatePdf, 1000)
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
  margin-top: 30px;
  width: 100%;
  height: 100%;
}
.pdf-content-text {
  position: absolute;
  top: 350px;
  text-align: center;
  z-index: 1;
}
</style>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
