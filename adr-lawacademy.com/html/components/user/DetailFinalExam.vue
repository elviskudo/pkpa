/* eslint-disable vue/no-multiple-template-root */
<template>
  <v-app>
    <div class="tw-mx-auto tw-h-screen">
      <div class="tw-rounded-lg tw-shadow-xl tw-bg-white tw-justify-center tw-mx-auto">
        <div
          class="container"
        >
          <div class="tw-p-4 tw-text-white tw-bg-yellow-500 tw-rounded-md tw-shadow-md tw-mb-8">
            <div class="tw-flex tw-items-center tw-justify-center tw-w-full">
              <span class="tw-text-1xl tw-font-semibold tw-tracking-wider tw-uppercase">Ujian Akhir</span>
            </div>
          </div>
          <div class="tw-flex tw-flex-col">
            <span class="tw-text-lg tw-font-bold tw-px-8 tw-mb-4">Deskripsi</span>
            <span class="tw-text-md tw-px-8 tw-mb-12">
              Martial arts are codified systems and traditions of combat practiced for a number of reasons such as self-defense; military and law enforcement applications; competition; physical, mental, and spiritual development; entertainment; and the preservation of a nation's intangible cultural heritage.[1]
              Although the term martial art has become associated with the fighting arts of East Asia, it originally referred to the combat systems of Europe as early as the 1550s. The term is derived from Latin and means "arts of Mars", the Roman god of war.[2] Some authors have argued that fighting arts or fighting systems would be more appropriate on the basis that many martial arts were never "martial" in the sense of being used or created by professional warriors.[3]
            </span>
            <span class="tw-text-lg tw-font-bold tw-px-8 tw-mb-4">Panelis</span>
            <span class="tw-text-md tw-px-8">Prof. Dr. Romli Atmasasmita, SH., LL.M</span>
            <span class="tw-text-md tw-px-8">Dr. Dodi S. Abdulakdir, B.Sc., SE., SH. MH</span>
            <span class="tw-text-md tw-px-8">Maya Narzalina, SH, MH</span>
            <span class="tw-text-md tw-px-8">Septo Ahady Amanat Romli Atmasasmita, SH., LL.M
            </span>
            <span class="tw-mb-10" />
            <span class="tw-text-lg tw-font-bold tw-px-8 tw-mb-4">Waktu Ujian</span>
            <span class="tw-text-md tw-px-8">Kamis,21 Agustus 2021
            </span>
            <span class="tw-text-md tw-px-8">Pukul 11.30
            </span>
          </div>
          <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-justify-between tw-px-8">
              <input
                type="text"
                name="pass"
                placeholder="Tempat Tanggal lahir"
                class="tw-form-input"
                value="https:\\meet.google.com\xxt343"
              >
              <v-btn
                class="tw-px-4 tw-py-4"
                color="#FF9900 !important"
              >
                Copy URL
              </v-btn>
            </div>
          </div>
          <span class="tw-px-8">
            <v-btn
              class="tw-px-8"
              color="#FF9900 !important"
            >
              Link Streaming
            </v-btn>
          </span>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'Judul Sesi online',
        align: 'start',
        sortable: false,
        value: 'judul'
      },
      {
        text: 'Tanggal',
        value: 'tanggal'
      },
      {
        text: 'Waktu',
        value: 'waktu'
      },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      judul: '',
      tanggal: '',
      waktu: '',
      jam: ''
    },
    defaultItem: {
      judul: '',
      tanggal: '',
      waktu: '',
      jam: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          judul: 'Ujian Akhir PKPA',
          tanggal: '20 April 2021',
          waktu: '13.00'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    add () {
      this.$router.push('/dashboard/admin/add-category')
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
    width: 1000px;
    background-color:#ffffff;
  }
</style>
