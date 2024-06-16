<template>
  <v-app>
    <v-card>
      <v-card-title class="tw-text-h5">
        Edit Tugas
      </v-card-title>
      <v-divider />
      <v-form>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-1">
          <span class="tw-col-span-1 tw-text-gray-400">Nama</span>
          <span class="tw-col-span-3 tw-text-bold">{{ content.fullname }}</span>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-1">
          <span class="tw-col-span-1 tw-text-gray-400">NIP</span>
          <span class="tw-col-span-3 tw-text-bold">{{ content.reg_no }}</span>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-1">
          <span class="tw-col-span-1 tw-text-gray-400">Gelombang</span>
          <span class="tw-col-span-3 tw-text-bold">{{ content.phase }}</span>
        </div>
        <div class="tw-grid tw-grid-cols-4 tw-px-3 tw-py-1">
          <span class="tw-col-span-1 tw-text-gray-400">Universitas</span>
          <span class="tw-col-span-3 tw-text-bold">{{ content.university_name }}</span>
        </div>
        <div class="tw-flex tw-flex-col tw-px-3 tw-pt-5">
          <span class="tw-text-gray-400">Tugas</span>
          <span class="tw-font-bold tw-py-2">{{ content.title }}</span>
          <div v-html="content.description" />
          <!-- <span class="tw-font-semibold tw-py-2">{{ content.description }}</span> -->
        </div>
        <div class="tw-flex tw-flex-col tw-px-3 tw-py-10">
          <span class="tw-text-gray-400">Lampiran</span>
          <div class="tw-flex tw-flex-row tw-items-center">
            <span class="tw-text-sm tw-pr-2">pdf</span>
            <a
              @click="openFile(content.url_question)"
            >
              <span>{{ content.originalname_question }}</span>
            </a>
          </div>
        </div>
        <v-divider />
        <div class="tw-flex tw-flex-col tw-px-3 tw-py-10">
          <span class="tw-text-gray-400">Jawaban</span>
          <div class="tw-flex tw-flex-row tw-items-center">
            <span class="tw-text-sm tw-pr-2">pdf</span>
            <a
              @click="openFile(content.url_answer)"
            >
              <span>{{ content.originalname_answer }}</span>
            </a>
          </div>
        </div>
        <v-divider />
        <div class="tw-grid tw-grid-cols-3 tw-px-3 tw-py-3">
          <div class="tw-col-span-3">
            <label class="tw-text-12">Beri Nilai</label><br>
          </div>
          <div class="tw-col-span-2">
            <input v-model="score" type="number" class="tw-form-input">
          </div>
        </div>
        <br>
        <div class="tw-grid tw-grid-cols-2 tw-p-4 tw-gap-4">
          <v-btn
            class="tw-px-4 tw-py-4"
            color="warning"
            @click="back()"
          >
            Kembali
          </v-btn>
          <v-btn
            type="submit"
            class="tw-px-4 tw-py-4"
            color="warning"
            @click.prevent="submit"
          >
            Simpan
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
      content: {},
      score: null
    }
  },
  async mounted () {
    const res = await this.$axios.$get(`answer-task/${this.$route.params.id}`)
    this.content = res.data[0]
    this.score = res.data[0].score
  },
  methods: {
    async submit () {
      const data = {
        score: this.score
      }
      try {
        const res = await this.$axios.$put(`answer-task/${this.$route.params.id}`, data)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
          this.$router.push('/dashboard/admin/task')
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
    openFile (file) {
      window.open(file, '_blank')
    },
    back () {
      this.$router.push('/dashboard/admin/task')
    }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
