<template>
  <v-app>
    <v-card>
      <v-tabs
        v-model="tab"
        align-with-title
      >
        <v-tabs-slider color="yellow" />
        <v-tab href="#admin">
          Admin
        </v-tab>
        <v-tab href="#tutor">
          Tutor
        </v-tab>
        <v-tab href="#panelis">
          Dewan Panelis
        </v-tab>
      </v-tabs>

      <v-tabs-items :value="tab">
        <v-tab-item value="admin">
          <v-card flat>
            <v-card-text>
              <admin />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tutor">
          <v-card flat>
            <v-card-text>
              <tutor />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item value="panelis">
          <v-card flat>
            <v-card-text>
              <dewanPanelis />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
import Admin from '~/components/admin/administrator/admin_univ/Index.vue'
import Tutor from '~/components/admin/administrator/tutor/Index.vue'
import DewanPanelis from '~/components/admin/administrator/dewan_panelis/Index.vue'
// import Graduated from '~/components/user/course/Graduated.vue'

export default {
  components: { Admin, Tutor, DewanPanelis },
  computed: {
    tab: {
      set (tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } })
      },
      get () {
        return this.$route.query.tab
      }
    }
  },
  mounted () {
    // if (this.$auth.hasScope('superadmin')) {
    //   this.components = { Admin, Tutor, DewanPanelis }
    // } else if (this.$auth.hasScope('admin')) {
    //   this.components = { Tutor, DewanPanelis }
    // }
  }
}
</script>
<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>
