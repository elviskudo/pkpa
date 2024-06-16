<template>
  <ul class="md:tw-pl-6">
    <sidenav-item title="Dashboard" to="/dashboard/user/myclass">
      <users-icon />
    </sidenav-item>

    <sidenav-item title="Informasi Umum" to="/dashboard/setting">
      <medias-icon />
    </sidenav-item>

    <sidenav-item title="Data Pribadi" to="/dashboard/setting/personal-data">
      <contact-icon />
    </sidenav-item>

    <sidenav-item title="Ubah Kata Sandi" to="/dashboard/setting/change-password">
      <servers-icon />
    </sidenav-item>

    <sidenav-item title="Informasi Universitas" to="/dashboard/setting/info-univercity">
      <certivicate />
    </sidenav-item>

    <sidenav-item title="Unggah Dokumen" to="/dashboard/setting/upload-doc">
      <terminal-icon />
    </sidenav-item>
    <div class="md:tw-hidden">
      <!-- <sidenav-item title="Profile" to="/dashboard/setting">
        <settingsIcon />
      </sidenav-item> -->

      <a @click="logout"><sidenav-item title="Logout">
        <recycleBinIcon />
      </sidenav-item>
      </a>
    </div>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue'

/* ICONS */
import UsersIcon from './icons/Users.vue'
import MediasIcon from './icons/Medias.vue'
import ContactIcon from './icons/Contact.vue'
import ServersIcon from './icons/Servers.vue'
import TerminalIcon from './icons/Terminal.vue'
// import SettingsIcon from './icons/Settings.vue'
import RecycleBinIcon from './icons/RecycleBin.vue'
// import DocumentationIcon from './icons/Documentation.vue'
import Certivicate from './icons/Certi.vue'

export default {
  name: 'SidenavItems',
  components: {
    UsersIcon,
    MediasIcon,
    SidenavItem,
    ContactIcon,
    ServersIcon,
    TerminalIcon,
    // SettingsIcon,
    RecycleBinIcon,
    // DocumentationIcon,
    Certivicate
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
