<template>
  <v-app>
    <div>
      <v-carousel>
        <v-carousel-item
          :src="require('../../assets/images/banner/banner-01.jpeg')"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
        <v-carousel-item
          :src="require('../../assets/images/banner/banner-02.jpeg')"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
        <v-carousel-item
          :src="require('../../assets/images/banner/banner-03.jpeg')"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
        <v-carousel-item
          :src="require('../../assets/images/banner/Rectangle_210.png')"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div class="tw-flex tw-mx-auto">
            <v-card
              class="tw-mx-auto md:tw-ml-44 tw-my-32 tw-shadow-sm"
              max-width="500"
              max-height="500"
            >
              <v-card-text class="">
                <div class="tw-text-center">
                  <p class="tw-px-8 sm:tw-text-2xl tw-pt-6 tw-text-lg tw-font-bold tw-font-sans tw-text-black tw-text-left">
                    Pendidikan Khusus Profesi <br>Advokat (PKPA ONLINE)<br>
                    Kapan Saja Dimana Saja
                  </p>
                  <div class="tw-px-8 tw-text-left">
                    Raih cita-cita dengan satu langkah lebih dekat menjadi advokat dengan ADR Law Academy.
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <div class="tw-flex tw-px-10 tw-py-2">
                  <v-btn id="textcolor" class="tw-h-12 tw-mx-auto tw-mx-sm-0 tw-rounded tw-font-bold tw-w-52 tw-mb-4 tw-font-sans" color="#FF9900" @click="flinkregister()">
                    Daftar Sekarang
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </div>
        </v-carousel-item>
        <v-carousel-item
          :src="require('../../assets/images/banner/image_52.jpg')"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div class="tw-flex tw-mx-auto">
            <v-card
              class="tw-mx-auto md:tw-ml-44 tw-my-32 tw-shadow-sm"
              max-width="500"
              max-height="500"
            >
              <v-card-text class="">
                <div class="tw-text-center">
                  <p class="tw-px-8 tw-pt-4 sm:tw-text-2xl tw-text-lg tw-font-bold tw-font-sans tw-text-black tw-text-left">
		    Kurikulum PKPA ADR Law Academy
                  </p>
                  <div class="tw-px-8 tw-text-left">
		    Kurikulum PKPA ADR Law Academy memiliki 19 Materi Ajar dengan total 1.900 menit yang sama dengan 38 SKS, setara dengan Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 3 Tahun 2020 Tentang Standar Nasional Pendidikan Tinggi, yaitu sama dengan Program Profesi.
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <div class="tw-flex tw-px-10 lg:tw-px-8 tw-py-2">
                  <v-btn id="textcolor" class="tw-h-12 tw-mx-auto tw-mx-sm-0 tw-rounded tw-font-bold tw-w-52 tw-mb-4 tw-font-sans" color="#FF9900" @click="flinkregister()">
                    Daftar Sekarang
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    flinkregister () {
      if (this.isAuthenticated) {
        this.$swal('Anda sudah terdaftar!', '', 'info')
      } else {
        this.$router.push('/register')
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
