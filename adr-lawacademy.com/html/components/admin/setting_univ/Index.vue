<template>
  <div class="tw-px-12 tw-pt-8">
    <div class="tw-py-4">
      Setting laman universitas
    </div>
    <div class="tw-px-3 tw-mx-auto tw-flex tw-flex-wrap tw-flex-col md:tw-flex-row tw-items-center">
      <div v-for="item in universities" :key="item.id" class="md:tw-w-3/12">
        <div class="tw-flex tw-shadow-2xl tw-border-gray-400 tw-mx-6 tw-px-4 tw-py-5 tw-mb-5 tw-bg-white">
          <div class="tw-flex tw-flex-col tw-text-black space-y-2 tw-items-center">
            <v-img
              contain
              :lazy-src="item.logo_url"
              width="100"
              height="100"
              :src="item.logo_url"
              :alt="item.name"
              class="tw-cursor-pointer"
              @click="editPage(item.id)"
            />
            <p class="tw-pb-3 tw-text-center tw-text-sm" @click="editPage(item.id)">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAdmin">
      <div class="-tw-mx-3 md:tw-flex tw-items-start tw-px-6">
        <div class="md:tw-w-3/12 tw-items-center tw-justify-center">
          <div class="tw-flex tw-shadow-2xl tw-border-gray-400 tw-py-4 tw-px-4 tw-mx-6 tw-bg-white tw-justify-center tw-items-center">
            <div class="tw-flex tw-flex-col tw-text-black space-y-2 tw-items-center tw-justify-center">
              <a href="" @click.prevent="add">
                <img
                  contain
                  width="100"
                  height="150"
                  src="~/assets/images/icon/plus.svg"
                  class="tw-items-center tw-justify-center"
                >
                <p class="tw-py-4 tw-text-center tw-text-sm">
                  Tambah Universitas
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="tw-px-3 md:tw-w-3/4" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'University',
  data () {
    return {
      universities: {},
      isAdmin: false
    }
  },
  async fetch () {
    const universities = await this.$axios.$get('/university/setting')
    const newUnv = universities.data.map(obj => ({ id: obj.id, name: obj.name, img_url: obj.image_url, slug: obj.slug, logo_url: obj.logo_url }))
    this.universities = newUnv
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  mounted () {
    if (this.$auth.hasScope('superadmin')) {
      this.isAdmin = true
    } else if (this.$auth.hasScope('admin')) {
      this.isAdmin = false
    }
  },
  methods: {
    univPage (slug) {
      this.$router.push(`/university/${slug}`)
    },
    add () {
      this.$router.push('/dashboard/admin/setting-univ/add')
    },
    editPage (item) {
      this.$router.push(`/dashboard/admin/setting-univ/edit-setting-univ/${item}`)
    }
  }
}
</script>
