<template>
  <v-app>
    <div>
      <div class="tw-flex">
        <div class="tw-flex tw-flex-row tw-p-3 tw-px-0">
          <div>
            <a
              class="tw-text-xs sm:tw-text-sm sm:tw-px-5 tw-p-3 tw-py-4 content-menu"
              :class="{ 'tw-border-yellow': kelasActive }"
              @click="fKontenKelas()"
            >
              <v-icon
                :class="{ 'tw-text-yellow': kelasActive }"
              >mdi-book-open
              </v-icon>
              Konten Kelas
            </a>
          </div>
          <div>
            <a
              class="tw-text-xs sm:tw-text-sm sm:tw-px-5 tw-p-3 tw-py-4 content-menu"
              :class="{ 'tw-border-yellow': forumActive }"
              @click="fShowForum()"
            >
              <v-icon :class="{ 'tw-text-yellow': forumActive }">mdi-forum</v-icon>
              Forum
            </a>
          </div>
        </div>
      </div>
      <v-divider />
      <div v-if="showForum" id="forum" class="tw-px-6">
        <!-- <p class="tw-p-4 tw-mt-0">
              Tambah Diskusi Baru
            </p> -->
        <v-divider class="tw-mb-5" />
        <form method="post" @submit.prevent="createNewPost">
          <label class="tw-font-semibold tw-text-[#1D1D1D]">Tambah Diskusi Baru</label>
          <div class="tw-mt-3">
            <label class="tw-text-sm">Diskusi Untuk</label>
            <select
              v-model="ftarget"
              class="
                      tw-form-select
                      tw-block
                      tw-appearance-none
                      tw-w-full
                      tw-rounded
                      tw-p-3
                      custom-border
                      tw-mt-1
                      tw-text-sm
                    "
              name="ftarget"
            >
              <option value="everyone" style="color: #1D1D1D !important;" selected>
                Everyone
              </option>
              <option value="dosen">
                Dosen
              </option>
            </select>
          </div>
          <div class="my-2">
            <label class="tw-text-sm">Judul Diskusi</label>
            <textarea
              v-model="fjudul"
              name="fjudul"
              class="
                      tw-block
                      tw-appearance-none
                      tw-w-full
                      tw-rounded
                      tw-p-3
                      custom-border
                      tw-mt-1
                      tw-text-sm
                    "
            />
          </div>
          <div class="tw-mb-3">
            <label class="tw-text-sm">Materi Diskusi</label>
            <textarea
              v-model="fvalue"
              class="
                      tw-block
                      tw-appearance-none
                      tw-w-full
                      tw-rounded
                      tw-p-3
                      custom-border
                      tw-mt-1
                      tw-text-sm
                      tw-resize-y
                      tw-h-40
                    "
              name="fvalue"
            />
          </div>
          <v-btn
            class="tw-w-full"
            color="#FF9900 !important"
            type="submit"
          >
            <span class="tw-text-white tw-font-semibold">Kirim</span>
          </v-btn>
        </form>
      </div>
      <div v-if="kontenKelas" id="kontenkelas" class="">
        <!--menu-->
        <div v-for="mn in menus" :key="mn.id" class="tw-pt-4">
          <div class="tw-relative tw-w-full tw-justify-start tw-pb-2 tw-mb-2 tw-shadow-sm" style="border-bottom: 1px solid #E0E0E0;">
            <a
              class="
                    tw-inline-flex
                    tw-items-center
                    tw-justify-between
                    tw-w-full
                    tw-bg-white
                    tw-text-black-200
                    tw-rounded
                    hover:tw-bg-gray-200
                    tw-py-4 tw-px-9
                    tw-cursor-pointer
                    focus:tw-outline-none
                    tw-mr-2
                    tw-text-sm
                  "
              style="color: black; min-width: 264.325px;"
              @click.prevent="mn.open = !mn.open"
            >
              {{ mn.name }}
              <div class="tw-ml-2">
                <svg
                  class="tw-w-5 tw-h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <div v-show="mn.open" class="tw-text-gray-700">
              <div
                id="headlessui-menu-items-117"
                class="
                      tw-w-full
                      tw-right-0
                      tw-mt-2
                      origin-top-right
                      tw-bg-white
                      divide-y divide-gray-100
                      tw-outline-none
                    "
                aria-labelledby="headlessui-menu-button-1"
                role="menu"
              >
                <div class="tw-w-full" style="border-top: 1px solid rgb(224, 224, 224);">
                  <div class="">
                    <v-list-item
                      v-for="submn in mn.submenu"
                      :key="submn.id"
                      style="padding: 0;"
                    >
                      <v-list-item-content v-if="submn.progress_id" style="cursor: pointer; padding-top: 0; padding-bottom: 0;" @click="fcontent(submn)">
                        <v-list-item-title :style="$route.path.split('/')[5]==submn.id ? 'font-size: 12px; color: #FF9900;background: #FFFAF2; padding: 16px 20px 16px 20px; border-radius: 3px; width:264.325px;' : 'padding: 16px 20px 16px 20px; font-size:12px; width:264.325px;'">
                          <v-icon v-if="submn.progress_id" color="green">
                            mdi-check-bold
                          </v-icon>
                          <v-icon style="color: #146EB4 !important;">
                            {{ submn.icon }}
                          </v-icon>
                          {{ submn.name }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content v-else>
                        <v-list-item-title :style="$route.path.split('/')[5]==submn.id ? 'font-size: 12px; color: #FF9900;background: #fffaf2; padding: 16px 20px 16px 20px; border-radius: 3px; width:264.325px;' : 'padding: 16px 20px 16px 20px; font-size:12px; width:264.325px;'">
                          <v-icon v-if="submn.progress_id" color="green">
                            mdi-check-bold
                          </v-icon>
                          <v-icon style="color: #146EB4 !important;">
                            {{ submn.icon }}
                          </v-icon>
                          {{ submn.name }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      menus: [],
      ftarget: 'everyone',
      fjudul: null,
      fvalue: null,
      forumActive: false,
      kelasActive: true,
      notifications: [],
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
      ],
      showForum: false,
      kontenKelas: true,
      forumBtn: true
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  async mounted () {
    if (this.$route.path.includes('forum')) {
      this.forumActive = true
      this.kelasActive = false
      this.showForum = true
      this.kontenKelas = false
    } else {
      this.forumActive = false
      this.kelasActive = true
      this.showForum = false
      this.kontenKelas = true
    }
    try {
      const res = await this.$axios.$get(`/course/course-topic-menu/${this.$route.params.content}`)
      const arrTopics = res.data.map(item => item.topic_id)
      const uniqTopics = [...new Set(arrTopics)]
      const arrMenu = []
      for (let i = 0; i < uniqTopics.length; i++) {
        const menu = {}
        const arrSubmenu = []
        const arrOpen = []
        let temp = false
        for (let j = 0; j < res.data.length; j++) {
          const submenu = {}
          let open = null
          if (uniqTopics[i] === res.data[j].topic_id) {
            // eslint-disable-next-line eqeqeq
            if (this.$route.path.split('/')[5] == res.data[j].content_topic_id) {
              open = true
            } else {
              open = false
            }
            if (open === true) {
              temp = open
            }
            menu.id = res.data[j].topic_id
            menu.name = res.data[j].topic_name
            submenu.id = res.data[j].content_topic_id
            submenu.name = res.data[j].content_topic_name
            submenu.icon = res.data[j].icon
            submenu.progress_id = res.data[j].progress_id
            submenu.content_type_id = res.data[j].content_type_id
            arrSubmenu.push(submenu)
            arrOpen.push(open)
          }
        }
        menu.submenu = arrSubmenu
        menu.open = temp
        arrMenu.push(menu)
      }
      this.menus = arrMenu
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async fcontent (data) {
      // add counter access content
      if (data.content_type_id === 1) {
        const params = {
          package_content_course_id: this.$route.params.content,
          content_topic_id: data.id
        }
        await this.$axios.$post('history-access-content', params)
      }
      this.$router.push(`/dashboard/user/course/${this.$route.params.content}/${data.id}`)
    },
    fShowForum () {
      this.showForum = true
      this.kontenKelas = false
      this.forumBtn = true
      this.$router.push('/dashboard/user/forum')
      this.forumActive = true
      this.kelasActive = false
    },
    fKontenKelas () {
      this.showForum = false
      this.kontenKelas = true
      this.forumActive = false
      this.kelasActive = true
      this.$router.push('/dashboard/user/course')
    },
    async createNewPost () {
      // this.socket = this.$nuxtSocket({
      //   reconnection: false
      // })
      const dataMateri = {
        user_id: this.loggedInUser.id,
        user_img: this.loggedInUser.image_url,
        user_fullname: this.loggedInUser.fullname,
        post_heading: this.fjudul,
        post_target: this.ftarget,
        post_value: this.fvalue,
        count_like: 0,
        count_disslike: 0,
        count_comment: 0
      }
      const resp = await this.$axios.$post('forum/data', dataMateri)
      if (!resp.error) {
        this.$socket.main.emit('send-materi', resp.data)
        this.$swal({
          title: 'Berhasil!',
          text: 'Data Telah Di Tambahkan...',
          icon: 'success'
        }).then((result) => {
          // console.log(result)
          if (result.isConfirmed === false || result.isConfirmed === true) {
            this.ftarget = ''
            this.fjudul = ''
            this.fvalue = ''
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.tw-border-yellow {
  border-bottom: 2px solid #ff9900;
}
.tw-text-yellow {
  color: #ff9900;
}
.content-menu {
  color: #18181b;
  text-decoration: none;
}
.custom-border {
  border: 1px solid #d1d5db;
}
.clr {
  background-color: #fffaf2;
}
textarea {
  resize: none;
}
select:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #FF9900;
  box-shadow: 0 0 2px #FF9900;
}
</style>
