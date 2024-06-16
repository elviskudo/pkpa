<template>
  <ul class="md:tw-pl-6 ">
    <sidenav-item title="Home" to="/">
      <users-icon />
    </sidenav-item>

    <sidenav-item title="Mata Kuliah" to="/dashboard/user/myclass">
      <medias-icon />
    </sidenav-item>

    <sidenav-item title="Sesi Online" to="/dashboard/user/online-session">
      <contact-icon />
    </sidenav-item>

    <!-- <sidenav-item title="Ujian Akhir" to="/dashboard/user/final-exam">
      <servers-icon />
    </sidenav-item> -->

    <sidenav-item title="Sertifikat" to="/dashboard/user/certificate">
      <certivicate />
    </sidenav-item>

    <sidenav-item title="Peforma Belajar" to="/dashboard/user/performance-study">
      <terminal-icon />
    </sidenav-item>

    <sidenav-item title="Notifikasi" to="/dashboard/user/notification">
      <recycle-bin-icon />
    </sidenav-item>

    <sidenav-item title="Pengaturan" to="/dashboard/setting">
      <documentation-icon />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue'

/* ICONS */
import UsersIcon from './icons/Users.vue'
import MediasIcon from './icons/Medias.vue'
import ContactIcon from './icons/Contact.vue'
// import ServersIcon from './icons/Servers.vue'
import TerminalIcon from './icons/Terminal.vue'
import SettingsIcon from './icons/Settings.vue'
import RecycleBinIcon from './icons/RecycleBin.vue'
import DocumentationIcon from './icons/Documentation.vue'
import Certivicate from './icons/Certi.vue'

export default {
  name: 'SidenavItems',
  components: {
    UsersIcon,
    MediasIcon,
    SidenavItem,
    ContactIcon,
    // ServersIcon,
    TerminalIcon,
    // eslint-disable-next-line vue/no-unused-components
    SettingsIcon,
    RecycleBinIcon,
    DocumentationIcon,
    Certivicate
  }
}
</script>
