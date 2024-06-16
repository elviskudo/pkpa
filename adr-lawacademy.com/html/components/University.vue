<template>
  <div class="tw-max-w-screen-lg tw-mx-auto">
    <div class="tw-my-4 md:tw-ml-4">
      <div class="md:tw-mt-20 tw-mt-24 tw-grid md:tw-grid-cols-2 tw-grid-cols-1">
        <div class="tw-flex tw-flex-col tw-w-full tw-justify-center">
          <div class="tw-flex tw-pb-4 tw-items-center tw-justify-center">
            <v-img
              contain
              :lazy-src="universities.logo_url"
              width="100"
              height="100"
              :src="universities.logo_url"
              :alt="universities.name"
              class=""
            />
          </div>

          <p class="tw-uppercase tw-flex tw-justify-center tw-tracking-loose tw-w-full tw-font-bold tw-mb-4 lg:tw-text-3xl md:tw-text-lg">
            {{ universities.name }}
          </p>
          <!-- <p class="tw-leading-normal tw-mb-8 lg:tw-text-sm tw-justify-start">
            {{ universities.description }}
          </p> -->
        </div>
        <div class="tw-w-full">
          <img :src="universities.image_url" class="tw-w-full tw-h-full" :alt="universities.name">
        </div>
      </div>
    </div>
    <hr class="tw-w-full tw-border-1">
    <Gelombang />
    <hr class="tw-w-full tw-border-1">

    <!-- kurikulum pkpa-->
    <div class="tw-px-10 tw-pb-20 tw-mt-10">
      <div class="tw-flex tw-justify-center lg:tw-items-center tw-font-bold tw-text-3xl tw-mt-10 tw-mb-8">
        Profil Instruktur
      </div>
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-2 tw-items-center">
        <!-- <div class="tw-w-full tw-flex tw-flex-col tw-mb-10">
          <p class="tw-uppercase tw-tracking-normal tw-w-full tw-font-bold tw-mb-5">
            Kurikulum PKPA
          </p>
          <div class="tw-mt-2">
            <ul class="tw-list-disc tw-ml-8">
              <li class="tw-pb-2">
                Materi Dasar Umum
              </li>
              <li class="tw-pb-2">
                Materi Praktik Ligitasi
              </li>
              <li class="tw-pb-2">
                Materi Praktik Non Litigasi
              </li>
              <li class="tw-pb-2">
                Materi Pendukung
              </li>
            </ul>
          </div>
        </div>-->
        <!-- end -->
        <!-- lecturer -->
        <VueSlickCarousel v-bind="settings" class="tw-w-full md:tw-col-span-2 tw-px-8 my-10">
          <div v-for="profile in profiles" :key="index" class="tw-px-2">
            <v-card class="tw-mx-5 tw-mb-2 tw-flex col" max-width="350" max-height="1200">
              <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-gray-400 tw-max-w-1/2 tw-max-h-1/2 xl:tw-w-full xl:tw-h-full tw-mr-5 tw-pl-2 tw-pr-2 tw-bg-white">
                <div class="tw-flex tw-flex-col tw-rounded-full tw-w-24 tw-h-24 tw-items-center tw-justify-center ">
                  <img
                    :src="profile.image"
                    class="tw-items-right"
                    :alt="profile.name"
		                width="72"
                  >
                </div>
              </div>
              <div class="tw-flex tw-flex-col tw-justify-right tw-items-right tw-text-right">
                <span class=" tw-text-center tw-text-sm tw-pt-2 tw-font-bold">{{ profile.name }}</span>
                <span class=" tw-text-center tw-text-xs tw-pt-2 tw-text-gray-400"></span>
              </div>
              <div class="tw-text-left tw-items-center tw-px-2 tw-pb-2">
                <span class="tw-whitespace-pre-line tw-text-sm">
                  <span class="tw-text-center tw-font-bold">Profil Pengajar</span><br><br>

                  <b>Pendidikan Terakhir:</b>
	                {{ profile.last_education }}

                  <b class="color-[#C2C2C2]">Bidang Keahlian:</b>
		              {{ profile.skill }}

                  <b>Profil Singkat Dosen:</b>
		              {{ profile.summary }}

                  <b>Materi Ajar</b>
		              {{ profile.materi }}

                </span>
              </div>
            </v-card>
          </div>
        </VueSlickCarousel>
        <!-- End lecturer -->
        <!-- </div> -->
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-52" :style="{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: '100% 100%'}">
      <div class="tw-font-semibold md:tw-text-xl xl:tw-text-2xl tw-whitespace-pre-line tw-text-center">
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          <!-- "Bina Mulia Hukum dan Lingkungan Hidup
          dalam Pembangunan Nasional." -->
          {{ universities.motto }}
        </blockquote>
      </div>
    </div>

    <div class="tw-mx-auto tw-px-10 tw-py-5">
      <div class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5 tw-items-center tw-justify-center">
        <div class="tw-flex tw-flex-col tw-w-full tw-mb-2">
          <div class="tw-whitespace-pre-line">
            <p class="tw-uppercase tw-tracking-loose tw-w-full tw-font-bold tw-mb-4">
              Visi, Misi & Tujuan
            </p>
            <p class="tw-font-bold">
              Visi
            </p>
            <div class="tw-leading-normal tw-mb-2 tw-justify-start" v-html="universities.vision" />
            <p class="tw-font-bold lg:tw-text-lg md:tw-text-lg">
              Misi
            </p>
            <div class="tw-leading-normal tw-mb-2 tw-justify-start" v-html="universities.mission" />
          </div>
        </div>
        <div class="tw-col-span-1">
          <img class="tw-w-full tw-object-cover" src="~/assets/images/universitas/unpas/visi-misi.png">
        </div>
      </div>
    </div>
    <div class="tw-mx-auto tw-px-10 tw-py-5">
      <div class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5 tw-items-center tw-justify-center">
        <div class="">
          <img class="tw-w-full tw-object-cover" src="~/assets/images/universitas/unpas/tujuan.png">
        </div>
        <div class="tw-flex tw-flex-col tw-w-full">
          <div class="tw-whitespace-pre-line">
            <p class="tw-uppercase tw-tracking-loose tw-w-full tw-font-bold tw-mb-2">
              Tujuan
            </p>
            <div class="tw-leading-normal tw-mb-8 tw-justify-start" v-html="universities.goal" />
          </div>
        </div>
      </div>
    </div>
    <!-- testimoni -->
    <div class="tw-px-10 tw-py-8">
      <testimoni />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Gelombang from '~/components/university/Gelombang.vue'
import Testimoni from '~/components/home/Testimoni.vue'

import backgroundUrl from '~/assets/images/universitas/unpas/bg-binamulya.png'
export default {
  components: { VueSlickCarousel, Testimoni, Gelombang },
  data () {
    return {
      backgroundUrl,
      universities: {},
      profiles: [
        {
          name: 'Prof. Dr. Huala Adolf, S.H., LL.M., Ph.D.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/huala.jpeg',
          last_education: `S3 – National University of Singapore, Tahun 2003
S2 – University of Sheffield, England, Tahun 1995`,
          skill: `Hukum Arbitrase dan Alternatif Penyelesaian Sengketa (APS)`,
          summary: `Guru Besar Hukum Internasional, Universitas Padjadjaran, Periode 2008 – saat ini
Wakil Ketua Badan Arbitrase Nasional Indonesia (BANI), Periode 2015 – saat ini
Arbitrator, BANI Arbitration Center, Jakarta, Periode 2004 – saat ini
Arbitrator, Shanghai International Arbitration Centre, Periode 2015 – saat ini`,
          materi: 'Teori dan Praktik Arbitrase'
        },
        {
          name: 'Prof. Dr. Tarsisius Murwadji, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/tarsisius.jpeg',
          last_education: `S3 – Fakultas Hukum, Universitas Gadjah Mada, Tahun 2009
S2 – Fakultas Hukum, Universitas Indonesia, Tahun 1994`,
          skill: `Hukum Ekonomi`,
          summary: `Dosen Fakultas Hukum, Universitas Padjadjaran`,
          materi: 'Teknik Merger dan Akuisisi'
        },
        {
          name: 'Prof. Dr. H. Tan Kamello, S.H., M.S.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/kamello.jpg',
          last_education: `S3 – Fakultas Hukum, Universitas Sumatera Utara, Tahun 2002
S2 – Fakultas Hukum, Universitas Gadjah Mada, Tahun 1992`,
          skill: `Hukum Perdata dan Perbankan`,
          summary: `Dosen Program Sarjana  di USU, UMSU, UNIKA, IAIN-SU, UMA, UNHAM, Univ. Dharmawangsa, Univ. Al Azhar, Sekolah Tinggi Graha Kirana, dan Akademi Fisioterafi.
Badan Legislasi DPR-RI (staf ahli).
Badan Legislasi DPRD Medan (staf ahli).
Kantor Dinas Pendidikan Nasional Sumatera Utara (staf ahli).`,
          materi: 'Legal Reasoning, Rechtvinding (Penemuan Hukum), and Contracting'
        },
        {
          name: 'Dr. Dodi Abdulkadir, B.Sc., S.E., S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/dodi.jpeg',
          last_education: `S3 – Universitas Padjadjaran, Tahun 2011
S2 – Universitas Padjadjaran, Tahun 2015`,
          skill: `Dispute Resolution and Arbitration,
Capital Market and Investment,
Corporate and debt restructuring and litigation,
Compliance on governments and environmental.`,
          summary: `Ficorinvest Bank
Bank Umum Nasional
Indonesia Bank Restructuring Agency / Badan Penyehatan Perbankan Nasional (BPPN)
MR & Partners Law Office
Atmasasmita, Dodi dan Rekan Law Firm`,
          materi: 'Uji Kepatuhan Dari Segi Hukum (Legal Due Diligence)'
        },
        {
          name: 'Dr (Yuris) Dr (MP) Haji Teguh Samudera, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/yuris.jpeg',
          last_education: `S3 – Doktor Ilmu Manajemen, Universitas Negeri Jakarta, Tahun 2002
S3 – Doktor Ilmu Hukum, Universitas Borobudur, Jakarta, Tahun 2015`,
          skill: `Hukum Perusahaan
Kepailitan
Perbankan
Kewarisan
Pidana
Hukum Acara Mahkamah Konstitusi
Hukum Perdata`,
          summary: `Kepala Humas Lembaga Bantuan Hukum (LBH) Jakarta, Periode 1982-1983
Konsultan Hukum Badan Penyehatan Perbankan Nasional (BPPN), Periode 1999-2001
Rektor Universitas Kejuangan 45, Jakarta
Ketua Umum Ikatan Advokat Indonesia (IKADIN)
Ketua Umum Dewan Pimpinan Pusat (DPP) Federasi Advokat Republik Indonesia (FERARI)`,
          materi: `Peran dan Fungsi Organisasi Advokat
Etika dan Kode Etik Profesi Advokat`
        },
        {
          name: 'Dr. Hj. Ummi Maskanah, S.H., M.M., M.Hum.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/ummi.jpeg',
          last_education: `S2 – Universitas Gajah Mada, Yogyakarta
S3 – Universitas Parahyangan, Bandung`,
          skill: 'Hukum Acara',
          summary: `Tenaga Pengajar Fakultas Hukum Universitas Pasundan, Periode 1995 – sekarang
Kepala BBKH-Fakultas HUkum Universitas Pasundan, Periode 2004 – 2007
Tenaga Pengajar Fakultas Hukum Kristen Maranata, Periode 2009 – 2011`,
          materi: 'Teori dan Praktik Peradilan Pidana'
        },
        {
          name: 'Dr. Hj. Marni Emmy Mustafa, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/marni.jpeg',
          last_education: `S2 – Universitas Tarumanegara, Jakarta, Tahun 2002
S3 – Universitas Padjajaran, Bandung, Tahun 2026`,
          skill: 'Hukum Kekayaan Intelektual',
          summary: `Ketua Pengadilan Tinggi Jawa Barat, Periode 2013 – 2016 
Ketua Pengadilan Tinggi Sumatera Utara, Periode 2011 – 2012
Ketua Pengadilan Tinggi Kalimantan Selatan, Periode 2010 – 2011`,
          materi: 'Teori dan Praktik Alternatif Penyelesaian Sengketa (APS)'
        },
        {
          name: 'Dr. Rd. Dewi Asri Yustia, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/dewi.jpeg',
          last_education: `S3 – Ilmu Hukum (Hukum Pidana), Universitas Padjadjaran, Tahun 2015
S2 – Ilmu Hukum (Hukum Pidana), Universitas Indonesia, Tahun 2003`,
          skill: `Hukum Pidana`,
          summary: `Toweksa Madya (Masa Pengabdian 20 Tahun), Universitas Pasundan, Tahun 2017
Apresiasi Kinerja Penelitian Dosen Terbaik, Universitas Pasundan, Tahun 2017`,
          materi: 'Sistem Peradilan Indonesia'
        },
        {
          name: 'Dr. Berna Sudjana Ermaya, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/berna.jpeg',
          last_education: `S3 – Program Pascasarjana, Universitas Padjadjaran, Tahun 2012
S2 – Program Magister, Ilmu Hukum, Universitas Airlangga, Tahun 2004`,
          skill: `Hukum Tata Negara
Hukum Administrasi Negara`,
          summary: `Dosen Luar Biasa di beberapa Program Pascasarjana di Indonesia
Penasehat Hukum, Anggota Perhimpunan Advokat Indonesia (PERADI)`,
          materi: 'Teori dan Praktik Peradilan Administrasi Negara'
        },
        {
          name: 'Dr. Sugeng Prayitno, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/sugeng.jpeg',
          last_education: `S3 – Universitas Pasundan, Tahun 2021
S2 – Universitas Pasundan, Tahun 2015`,
          skill: `Hukum Ketenagakerjaan
Hukum Acara PHI`,
          summary: `Lulusan Terbaik DIKLAT Hakim Adhoc PHI
Ketua Pimpinan Cabang FSPMI,Bandung, Tahun 2013
Hakim Adhoc PHI pada PN Bandung Klas 1A Khusus, Tahun 2016 – saat ini`,
          materi: 'Teori dan Praktik Peradilan Hubungan Industrial (PHI)'
        },
        {
          name: 'Dr. Widati Wulandari, S.H., M.Crim.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/widati.jpeg',
          last_education: `S3 – Fakultas Hukum, Universitas Padjadjaran
S2 – Law Faculty, the University of Sydney`,
          skill: `Hukum Pidana, Kriminologi, Hukum Pidana Internasional, Hukum HAM`,
          summary: `Konsultan Hukum Biro Bantuan Hukum, UNPAD, Periode 1998 – saat ini
Dosen Fakultas Hukum, Universitas Padjadjaran, Periode 1998 – saat ini
Dosen Luar Biasa, Fakultas Hukum, Universitas Katolik Parahyangan, Periode 2007 – 2012`,
          materi: 'Teori dan Praktik Peradilan Hak Asasi Manusia (HAM)'
        },
        {
          name: 'Dr. Saim Aksinudin, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/saim.jpeg',
          last_education: `S3 – Ilmu Hukum, Universitas Pasundan, Bandung, Tahun 2016
S2 – Ilmu Hukum, Universitas Pasundan, Bandung, Tahun 2011`,
          skill: `Hukum Agraria`,
          summary: `Dosen tetap Fakultas Hukum Universitas Pasundan sejak tahun 2010`,
          materi: 'Teori dan Praktik Peradilan Perdata'
        },
        {
          name: 'Dr. H. Syamsul Anwar, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/syamsul.jpeg',
          last_education: `S3 – Hukum, Universitas Jayabaya
S2 – Hukum, Universitas Islam Bandung`,
          skill: `Hukum Acara`,
          summary: `Hakim Tinggi PTA Bandung. Periode 2021 – saat ini
Hakim Tinggi PTA Padang, Tahun 2012
Ketua Pengadilan Agama Majalengka, Tahun 2010`,
          materi: 'Teori dan Praktik Peradilan Agama'
        },
        {
          name: 'Dr. Fajar Sugianto, S.H., M.H.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/fajar.jpeg',
          last_education: `S3 – Universitas 17 Agustus 1945, Surabaya, Tahun 2011
S2 – Universitas 17 Agustus 1945, Surabaya, Tahun 2008`,
          skill: `Hukum Bisnis`,
          summary: `Dosen Tetap Fakultas Hukum Universitas Pelita Harapan
Tenaga Ahli Kajian Sub Nasional Doing Business di 34 Provinsi pada Kementerian Investasi/Badan Koordinasi Penanaman Modal
Tenaga Ahli Indeks Efektivitas Pencegahan dan Pemberantasan TPPU TPPT pada Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)
Of Counsel Ginza Seiwa Law Office, Tokyo`,
          materi: 'Teknik Analisis Kontrak'
        },
        {
          name: 'Dr. Ahmad Redi, S.H., M.H., M.Si',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/ahmad.jpeg',
          last_education: `S2 – Universitas Indonesia, Tahun 2010
S3 – Universitas Indonesia, Tahun 2013`,
          skill: `Hukum Pembentukan Peraturan Perundang-undangan
Hukum Tata Negara dan Administrasi Negara
Hukum Sumber Daya Alam dan Lingkungan Hidup
Hukum Pertambangan`,
          summary: `Dosen Universitas Borobudur, Jakarta
Direktur Eksekutif Kolegium Jurist Institute`,
          materi: 'Penelusuran Hukum dan Dokumentasi Hukum'
        },
        {
          name: 'Dinni Melanie, S.H., M.E.',
          image: 'https://pkpa.s3.ap-southeast-1.amazonaws.com/profiles/dinni.jpeg',
          last_education: `S1 – Sarjana Hukum, Universitas Indonesia
S2 – Magister Ekonomi, Universitas Indonesia`,
          skill: `Hukum Persaingan Usaha
Hukum Acara Persaingan Usaha`,
          summary: `Komisioner Komisi Pengawas Persaingan Usaha, Periode 2018-2023
Panitera dan Investigator pada Sekretariat Komisi Pengawas Persaingan Usaha, Periode 2003-2018`,
          materi: `Teori dan Praktik Hukum Persaingan Usaha
Teori dan Praktik Pengadilan Niaga`
        },
      ],
      settings: {
        dots: true,
        infinite: true,
        // variableWidth: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 340,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  async fetch () {
    const universities = await this.$axios.$get(`/university/?slug=${this.$route.params.slug}`)
    this.universities = universities.data.universities[0]
  }
}
</script>
