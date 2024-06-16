<template>
  <v-app>
    <div class="tw-text-xs">
      <!-- <v-card
        class="tw-mx-auto"
        height="900"
        width="300"
      > -->
      <v-navigation-drawer
        white
        permanent
      >
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="loggedInUser.image_url" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ loggedInUser.fullname }}</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>

            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <!-- <v-icon>mdi-chevron-left</v-icon> -->
            </v-btn>
          </v-list-item>

          <v-divider />
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            sub-group
          >
            <template #activator>
              <!-- <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content> -->
              <v-list-item-content active-class="deep-purple--text text--accent-4" @click="go(item.title)">
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </template>
            <v-list-item-group
              class="tw-pl-10"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item v-for="child in item.items" :key="child.title" :to="child.route" link sub-group>
                <v-list-item-content active-class="deep-purple--text text--accent-4">
                  <v-list-item-title v-text="child.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <!-- </v-card> -->
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  mounted () {
    if (this.$auth.hasScope('superadmin')) {
      this.items = [
        {
          action: 'mdi-view-dashboard',
          title: 'Beranda'
        },
        {
          action: 'mdi-account-multiple-plus',
          title: 'Manajemen Pendaftar',
          route: '/dashboard/admin/registrant'
        },
        {
          action: 'mdi-account-group-outline',
          items: [{ title: 'Peserta', route: '/dashboard/admin/user' }, { title: 'Administrator', route: '/dashboard/admin/administrator/admin-univ' }, { title: 'Monitoring User', route: '/dashboard/admin/manageuser' }, { title: 'Monitoring Sesi Online', route: '/dashboard/admin/monitoring-online-session' }],
          title: 'Manajemen Pengguna'
        },
        {
          action: 'mdi-server',
          title: 'Manajemen Kategori',
          route: '/dashboard/admin/category'
        },
        {
          action: 'mdi-book-open-variant',
          items: [{ title: 'Mata Kuliah', route: '/dashboard/admin/course' }, { title: 'Topik', route: '/dashboard/admin/topic' }, { title: 'Konten', route: '/dashboard/admin/content' }],
          title: 'Bank Konten'
        },
        {
          action: 'mdi-server',
          title: 'Manajemen Mata Kuliah',
          route: '/dashboard/admin/matakuliah'
        },
        {
          action: 'mdi-server',
          route: '/dashboard/admin/manage-batch',
          title: 'Manajemen Gelombang'
        },
        {
          action: 'mdi-clipboard-list',
          // items: [{ title: 'List Item' }],
          title: 'Tugas'
        },
        {
          action: 'mdi-monitor',
          items: [{ title: 'Sesi Online', route: '/dashboard/admin/live-streaming/online-session' }, { title: 'Ujian Akhir', route: '/dashboard/admin/live-streaming/final-exam' }],
          title: 'Live Streaming'
        },
        {
          action: 'mdi-school',
          items: [{ title: 'Sertifikat Penyelesaian', route: '/dashboard/admin/certificate/completion' }, { title: 'Sertifikat Kelulusan', route: '/dashboard/admin/certificate/graduation' }],
          title: 'Sertifikat'
        },
        {
          action: 'mdi-forum',
          items: [{ title: 'Forum', route: '/dashboard/user/forum' }],
          title: 'Forum'
        },
        {
          action: 'mdi-cloud-question',
          // items: [{ title: 'List Item' }],
          title: 'Manajemen Kuisioner'
        },
        {
          action: 'mdi-cash-multiple',
          // items: [{ title: 'List Item' }],
          title: 'Manajemen Keuangan'
        },
        {
          action: 'mdi-bullhorn',
          // items: [{ title: 'List Item' }],
          title: 'Media Promosi'
        },
        {
          action: 'mdi-office-building',
          // items: [{ title: 'List Item' }],
          title: 'Pengaturan Laman Univ'
        },
        {
          action: 'mdi-map',
          items: [{ title: 'Homepage', route: '/dashboard/admin/setting-page/homepage' }, { title: 'FAQ', route: '/dashboard/admin/setting-page/faq' }, { title: 'Syarat dan Ketentuan', route: '/dashboard/admin/setting-page/toc' }, { title: 'Kontak', route: '/dashboard/admin/setting-page/contact' }],
          title: 'Pengaturan Laman'
        },
        {
          action: 'mdi-bell',
          // items: [{ title: 'List Item' }],
          title: 'Notifikasi'
        },
        {
          action: 'mdi-arrow-right-circle',
          // items: [{ title: 'List Item' }],
          title: 'Logout'
        }
      ]
    } else if (this.$auth.hasScope('admin')) {
      this.items = [
        {
          action: 'mdi-flower-tulip',
          title: 'Beranda'
        },
        {
          action: 'mdi-account-group-outline',
          items: [{ title: 'Peserta', route: '/dashboard/admin/user' }, { title: 'Administrator', route: '/dashboard/admin/administrator/admin-univ' }, { title: 'Monitoring User', route: '/dashboard/admin/manageuser' }, { title: 'Monitoring Sesi Online', route: '/dashboard/admin/monitoring-online-session' }],
          title: 'Manajemen Pengguna'
        },
        {
          action: 'mdi-book-open-variant',
          items: [{ title: 'Mata Kuliah', route: '/dashboard/admin/course' }, { title: 'Topik', route: '/dashboard/admin/topic' }, { title: 'Konten', route: '/dashboard/admin/content' }],
          title: 'Bank Konten'
        },
        {
          action: 'mdi-server',
          title: 'Manajemen Mata Kuliah',
          route: '/dashboard/admin/matakuliah'
        },
        {
          action: 'mdi-server',
          route: '/dashboard/admin/manage-batch',
          title: 'Manajemen Gelombang'
        },
        {
          action: 'mdi-clipboard-list',
          // items: [{ title: 'List Item' }],
          title: 'Tugas'
        },
        {
          action: 'mdi-desktop-mac',
          items: [{ title: 'Sesi Online', route: '/dashboard/admin/live-streaming/online-session' }, { title: 'Ujian Akhir', route: '/dashboard/admin/live-streaming/final-exam' }],
          title: 'Live Streaming'
        },
        {
          action: 'mdi-school',
          items: [{ title: 'Sertifikat Penyelesaian', route: '/dashboard/admin/certificate/completion' }, { title: 'Sertifikat Kelulusan', route: '/dashboard/admin/certificate/graduation' }],
          title: 'Sertifikat'
        },
        {
          action: 'mdi-forum',
          items: [{ title: 'List Item' }],
          title: 'Forum'
        },
        {
          action: 'mdi-office-building',
          // items: [{ title: 'List Item' }],
          title: 'Pengaturan Laman Univ'
        },
        // {
        //   action: 'mdi-map',
        //   items: [{ title: 'Homepage', route: '/dashboard/admin/setting-page/homepage' }, { title: 'FAQ', route: '/dashboard/admin/setting-page/faq' }, { title: 'Syarat dan Ketentuan', route: '/dashboard/admin/setting-page/toc' }, { title: 'Kontak', route: '/dashboard/admin/setting-page/contact' }],
        //   title: 'Pengaturan Laman'
        // },
        {
          action: 'mdi-bell',
          // items: [{ title: 'List Item' }],
          title: 'Notifikasi'
        },
        {
          action: 'mdi-arrow-right-circle',
          // items: [{ title: 'List Item' }],
          title: 'Logout'
        }
      ]
    } else if (this.$auth.hasScope('tutor')) {
      this.items = [
        {
          action: 'mdi-flower-tulip',
          title: 'Beranda'
        },
        {
          action: 'mdi-account-group-outline',
          route: '/dashboard/admin/manageuser',
          title: 'Monitoring User'
        },
        {
          action: 'mdi-clipboard-list',
          // items: [{ title: 'List Item' }],
          title: 'Tugas'
        },
        {
          action: 'mdi-forum',
          items: [{ title: 'List Item' }],
          title: 'Forum'
        },
        {
          action: 'mdi-bell',
          // items: [{ title: 'List Item' }],
          title: 'Notifikasi'
        },
        {
          action: 'mdi-arrow-right-circle',
          // items: [{ title: 'List Item' }],
          title: 'Logout'
        }
      ]
    }
  },
  methods: {
    go (route) {
      if (route === 'Manajemen Pendaftar') {
        this.$router.push('/dashboard/admin/registrant')
      }
      if (route === 'Beranda') {
        this.$router.push('/dashboard/admin')
      }
      if (route === 'Manajemen Kategori') {
        this.$router.push('/dashboard/admin/category')
      }
      if (route === 'Manajemen Mata Kuliah') {
        this.$router.push('/dashboard/admin/package')
      }
      if (route === 'Manajemen Gelombang') {
        this.$router.push('/dashboard/admin/manage-batch')
      }
      if (route === 'Tugas') {
        this.$router.push('/dashboard/admin/task')
      }
      if (route === 'Pengaturan Laman Univ') {
        this.$router.push('/dashboard/admin/setting-univ')
      }
      if (route === 'Manajemen Keuangan') {
        this.$router.push('/dashboard/admin/manage-trx')
      }
      if (route === 'Monitoring User') {
        this.$router.push('/dashboard/admin/manageuser')
      }
      if (route === 'Media Promosi') {
        this.$router.push('/dashboard/admin/media-promotion')
      }
      if (route === 'Logout') {
        this.$auth.logout()
      }
    }
  }
}
</script>
<style scoped>
::v-deep .v-list-group--sub-group.v-list-group--active .v-list-item__icon.v-list-group__header__prepend-icon .v-icon {
  transform: none !important;
}
::v-deep .v-list-item__title {
  font-size: 0.9rem !important;
}
/* .v-autocomplete.v-select--is-menu-active .v-input__icon--append .v-icon {
    transform: none;
  } */
</style>
