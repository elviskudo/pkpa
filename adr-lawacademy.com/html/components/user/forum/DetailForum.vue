<template>
  <v-app>
    <div class="">
      <div class="tw-py-2 detailforum">
        <v-tabs
          v-model="tab"
          align-with-title
          class="tw-border-bottom"
        >
          <v-tabs-slider color="#FF9900" />

          <v-tab
            v-for="item in items"
            :key="item"
            class="tw-text-black"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-divider class="tw-mb-2" />

        <v-btn
          class="ma-2"
          color="orange darken-2"
          dark
          @click="$router.push('/dashboard/user/forum')"
        >
          <v-icon
            dark
            left
          >
            mdi-arrow-left
          </v-icon>Kembali
        </v-btn>

        <div class="tw-flex tw-flex-col tw-p-5">
          <div class="tw-flex tw-flex-between tw-mb-4">
            <v-avatar class="tw-left-0 isavatar">
              <v-img :src="avatar" />
            </v-avatar>
            <div class="tw-ml-3">
              <div class="tw-block">
                <div class="author-name tw-inline-block tw-mr-1">
                  {{ author_fullname }}
                </div>
                <span class="date">{{ $moment(post.created_at).fromNow() }}</span>
              </div>
              <div class="post-heading">
                {{ post.post_heading }}
              </div>
            </div>
          </div>
          <div class="tw-flex tw-flex-col">
            <div class="tw-ml-5 tw-mb-3 tw-text-sm tw-px-10 post-value remove-spacing">
              {{ post.post_value }}
            </div>
          </div>
          <div class="tw-flex tw-flex-row tw-px-11 tw-ml-6 remove-spacing">
            <a @click="likeMateri(postId)">
              <v-icon :id="postId" small color="#BDBDBD" class="tw-mr-2">
                {{ like_icon }}
              </v-icon>
            </a>
            <span class="tw-mr-4 count">{{ count_like }}</span>
            <a @click="disslikeMateri(postId)">
              <v-icon :id="dis+postId" small color="#BDBDBD" class="tw-mr-2">
                {{ disslike_icon }}
              </v-icon>
            </a>
            <span class="tw-mr-4 count">{{ count_disslike }}</span>
            <a>
              <v-icon small color="#BDBDBD" class="tw-mr-2">
                mdi-comment-outline
              </v-icon>
            </a>
            <span class="tw-mr-4 count">{{ count_comment }}</span>
          </div>
          <div class="tw-block tw-px-9 tw-ml-6 remove-spacing">
            <div class="tw-flex tw-mt-5">
              <v-avatar size="33" class="isavatar">
                <v-img :src="loggedInUser.image_url" />
              </v-avatar>
              <input
                :id="comment+postId"
                type="text"
                placeholder="Tulis Komentar..."
                class="
                  tw-ml-4
                  tw-inline-block
                  tw-text-sm
                  tw-bg-[#F5F5F5]
                  tw-appearance-none
                  tw-rounded-lg
                  tw-py-2
                  tw-px-3
                  tw-text-gray-700
                  tw-leading-tight
                  tw-w-full
                "
                @keyup.enter="createComment(postId)"
              >
            </div>
            <div v-for="tree in data_comment" :key="tree.id" class="tw-mt-4">
              <div v-if="tree.recomment.length > 0">
                <ul class="tree tw-mt-5">
                  <li class="tw-z-0">
                    <div class="detail-user tw-z-40 tw-flex">
                      <img
                        :src="tree.user.user_img"
                        class="avatar absolute"
                      >
                      <div
                        class="
                          tw-inline-block
                          tw-appearance-none
                          tw-rounded-lg
                          tw-py-2
                          tw-px-3
                          tw-leading-tight
                          comment-field
                        "
                      >
                        <div class="author-name tw-mb-2">
                          {{ tree.user.user_fullname }}
                        </div>
                        <p class="comment-value break-words">
                          {{ tree.comment_value }}
                        </p>
                      </div>
                    </div>
                    <div class="comment-option tw-ml-1 remove-spacing tw-mt-1 tw-mb-4">
                      <a class="option count tw-mr-3 remove-spacing" @click="likeComment(tree._id)">Suka</a>
                      <a
                        class="option remove-spacing count tw-mr-3"
                        @click="balasComment(tree._id, tree.user.user_id, tree.user.user_fullname, tree.user.user_img)"
                      >Balas</a>
                      <div class="float-right tw-pr-2">
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          {{ tree.uid_like.length }} Suka
                        </div>
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          |
                        </div>
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          {{ tree.recomment.length }} Balasan
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="tw-z-0 tw-m-0">
                    <ul class="response">
                      <li v-for="recomment in tree.recomment" :key="recomment.id" class="tw-z-0">
                        <div class="tw-z-40 detail-user tw-flex">
                          <img
                            :src="recomment.user.user_img"
                            class="avatar absolute"
                          >
                          <div
                            class="
                              tw-inline-block
                              tw-appearance-none
                              tw-rounded-lg
                              tw-py-2
                              tw-px-3
                              tw-leading-tight
                              comment-field
                            "
                          >
                            <div class="author-name tw-mb-2">
                              {{ recomment.user.user_fullname }} membalas {{ recomment.head_user.user_fullname }}
                            </div>
                            <p class="comment-value break-words">
                              {{ recomment.comment_value }}
                            </p>
                          </div>
                        </div>
                        <div class="comment-option tw-ml-1 tw-mt-1 remove-spacing tw-mb-4">
                          <a class="option remove-spacing count tw-mr-3" @click="likeReComment(recomment._id)">Suka</a>
                          <a class="option remove-spacing count tw-mr-3" @click="balasCommentChild(recomment._id, recomment.user.user_id, recomment.user.user_fullname, recomment.user.user_img)">Balas</a>
                          <div class="float-right tw-pr-2">
                            <div class="count remove-spacing tw-inline-block tw-ml-2">
                              {{ recomment.uid_like.length }} Suka
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div v-else>
                <ul class="treefalse tw-mt-5">
                  <li class="tw-z-0">
                    <div class="tw-z-40 detail-user tw-flex">
                      <img
                        :src="tree.user.user_img"
                        class="avatar absolute"
                      >
                      <div
                        class="
                          tw-inline-block
                          tw-ml-3
                          tw-appearance-none
                          tw-rounded-lg
                          tw-py-2
                          tw-px-3
                          tw-leading-tight
                          comment-field
                        "
                      >
                        <div class="author-name tw-mb-2">
                          {{ tree.user.user_fullname }}
                        </div>
                        <p class="comment-value break-words">
                          {{ tree.comment_value }}
                        </p>
                      </div>
                    </div>
                    <div class="comment-option tw-ml-5 tw-mt-1 tw-mb-4">
                      <a class="option remove-spacing count tw-mr-3" @click="likeComment(tree._id)">Suka</a>
                      <a class="option remove-spacing count tw-mr-3" @click="balasComment(tree._id, tree.user.user_id, tree.user.user_fullname, tree.user.user_img)">Balas</a>
                      <div class="float-right tw-pr-2">
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          {{ tree.uid_like.length }} Suka
                        </div>
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          |
                        </div>
                        <div class="count remove-spacing tw-inline-block tw-ml-2">
                          {{ tree.recomment.length }} Balasan
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm === true" class="tw-fixed tw-bottom-0 tw-z-40 tw-inline-block tw-w-full">
      <div class="tw-bg-white tw-px-8 tw-py-4 tw-border-t form-comment">
        <div class="tw-flex">
          <v-avatar size="33" class="isavatar">
            <v-img :src="loggedInUser.image_url" />
          </v-avatar>
          <input
            v-model="recomment"
            type="text"
            :placeholder="placeholderComment"
            class="
                  tw-ml-4
                  tw-inline-block
                  tw-text-sm
                  tw-bg-gray-200
                  tw-appearance-none
                  tw-rounded-lg
                  tw-py-2
                  tw-px-3
                  tw-text-gray-700
                  tw-leading-tight
                  tw-w-full
                "
            @keyup.enter="createReComment()"
          >
          <button type="button" @click="createReComment()">
            <v-icon color="#BDBDBD" class="tw-ml-2">
              mdi-send
            </v-icon>
          </button>
        </div>
      </div>
    </div>
    <div v-if="showFormChild === true" class="tw-fixed tw-bottom-0 tw-z-40 tw-inline-block tw-w-full">
      <div class="tw-bg-white tw-px-8 tw-py-4 tw-border-t form-comment">
        <div class="tw-flex">
          <v-avatar size="33" class="isavatar">
            <v-img :src="loggedInUser.image_url" />
          </v-avatar>
          <input
            v-model="recomment"
            type="text"
            :placeholder="placeholderComment"
            class="
                  tw-ml-4
                  tw-inline-block
                  tw-text-sm
                  tw-bg-gray-200
                  tw-appearance-none
                  tw-rounded-lg
                  tw-py-2
                  tw-px-3
                  tw-text-gray-700
                  tw-leading-tight
                  tw-w-full
                "
            @keyup.enter="createReCommentChild()"
          >
          <button type="button" @click="createReCommentChild()">
            <v-icon color="#BDBDBD" class="tw-ml-2">
              mdi-send
            </v-icon>
          </button>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
// import Graduated from '~/components/user/course/Graduated.vue'

export default {
  data: () => ({
    tab: null,
    items: [
      'Baru', 'Aktivitas ku'
    ],
    post: [],
    author_fullname: '',
    postId: '',
    newpost: [],
    count_like: '',
    count_disslike: '',
    count_comment: '',
    avatar: '',
    data_comment: [],
    comment: 'comment-',
    dis: 'disslike-',
    like_icon: 'mdi-thumb-up-outline',
    disslike_icon: 'mdi-thumb-down-outline',
    showForm: false,
    showFormChild: false,
    recommentId: '',
    placeholderComment: '',
    headId: '',
    headFullname: '',
    headImage: ''
  }),
  async fetch () {
    const res = await this.$axios.$get(`forum/data/${this.$route.params.slug}`)
    this.post = res.data
    this.author_fullname = res.data.author.user_fullname
    this.avatar = this.post.author.user_img
    this.count_like = res.data.post_detail.count_like
    this.count_disslike = res.data.post_detail.count_disslike
    this.count_comment = res.data.comment.length
    this.data_comment = res.data.comment
    this.postId = res.data._id
    if (res.data.post_detail.uid_like.includes(this.loggedInUser.id) === true) {
      this.like_icon = 'mdi-thumb-up'
    } else if (res.data.post_detail.uid_disslike.includes(this.loggedInUser.id) === true) {
      this.disslike_icon = 'mdi-thumb-down'
    } else {
      this.like_icon = 'mdi-thumb-up-outline'
      this.disslike_icon = 'mdi-thumb-down-outline'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  beforeMount () {
    // this.socket = this.$nuxtSocket({
    //   reconnection: false
    // })
    // this.socket.on('new-materi', (materi) => {
    //   this.$fetch()
    // })
  },
  methods: {
    balasComment (id, userId, userFullname, userImage) {
      this.placeholderComment = `Membalas ${userFullname}`
      this.recommentId = id
      this.headId = userId
      this.headFullname = userFullname
      this.headImage = userImage
      if (this.showForm === false) {
        this.showForm = true
      } else {
        this.showForm = false
      }
    },
    balasCommentChild (id, userId, userFullname, userImage) {
      this.placeholderComment = `Membalas ${userFullname}`
      this.recommentId = id
      this.headId = userId
      this.headFullname = userFullname
      this.headImage = userImage
      if (this.showFormChild === false) {
        this.showFormChild = true
      } else {
        this.showFormChild = false
      }
    },
    likeComment (id) {
      const data = {
        post_id: this.postId,
        comment_id: id,
        user_id: this.loggedInUser.id
      }
      this.$axios.$post('forum/data/comment/like', data)
      // this.socket.emit('send-materi', 'user like')
    },
    likeReComment (id) {
      const data = {
        post_id: this.postId,
        comment_id: id,
        user_id: this.loggedInUser.id
      }
      this.$axios.$post('forum/data/recomment/like', data).then(() => {
        // this.socket.emit('send-materi', 'user like')
      })
    },
    likeMateri (id) {
      const getSpesificLike = document.getElementById(id)
      const getSpesificDisslike = document.getElementById('disslike-' + id)
      const targetLike = getSpesificLike.classList
      const targetDisslike = getSpesificDisslike.classList
      const istarget = Array.from(targetLike).includes('mdi-thumb-up-outline')
      if (istarget === true) {
        const data = {
          post_id: id,
          user_id: this.loggedInUser.id,
          is_like: true
        }
        this.$axios.$post('forum/data/new/like', data).then(() => {
          targetLike.remove('mdi-thumb-up-outline')
          targetDisslike.remove('mdi-thumb-down')
          targetLike.add('mdi-thumb-up')
          targetDisslike.add('mdi-thumb-down-outline')
          // this.socket.emit('send-materi', 'user like')
        })
      } else {
        const data = {
          post_id: id,
          user_id: this.loggedInUser.id,
          is_like: 'like'
        }
        this.$axios.$post('forum/data/new/like', data).then(() => {
          targetLike.add('mdi-thumb-up-outline')
          targetLike.remove('mdi-thumb-up')
          // this.socket.emit('send-materi', 'user cancle like')
        })
      }
    },
    disslikeMateri (id) {
      const getSpesificLike = document.getElementById(id)
      const getSpesificDisslike = document.getElementById('disslike-' + id)
      const targetLike = getSpesificLike.classList
      const targetDisslike = getSpesificDisslike.classList
      const istarget = Array.from(targetDisslike).includes('mdi-thumb-down-outline')
      if (istarget === true) {
        const data = {
          post_id: id,
          user_id: this.loggedInUser.id,
          is_like: false
        }
        this.$axios.$post('forum/data/new/like', data).then(() => {
          targetLike.remove('mdi-thumb-up')
          targetDisslike.remove('mdi-thumb-down-outline')
          targetLike.add('mdi-thumb-up-outline')
          targetDisslike.add('mdi-thumb-down')
          // this.socket.emit('send-materi', 'user disslike')
        })
      } else {
        const data = {
          post_id: id,
          user_id: this.loggedInUser.id,
          is_like: 'disslike'
        }
        this.$axios.$post('forum/data/new/like', data).then(() => {
          targetDisslike.add('mdi-thumb-down-outline')
          targetDisslike.remove('mdi-thumb-down')
          // this.socket.emit('send-materi', 'user cancle disslike')
        })
      }
    },
    async createComment (id) {
      const commentval = document.getElementById('comment-' + id).value
      if (!commentval) {
        console.error('null')
      } else {
        // this.socket = this.$nuxtSocket({
        //   reconnection: false
        // })
        const newdata = {
          post_id: id,
          user_id: this.loggedInUser.id,
          user_img: this.loggedInUser.image_url,
          user_fullname: this.loggedInUser.fullname,
          comment_value: commentval
        }
        const resp = await this.$axios.$post('forum/data/comment', newdata)
        if (!resp.error) {
          // this.$swal({
          //   title: 'Berhasil!',
          //   text: 'Data Telah Di Tambahkan...',
          //   icon: 'success'
          // })
          document.getElementById('comment-' + id).value = ''
          // this.socket.emit('send-materi', 'user comment')
        }
      }
    },
    async createReComment () {
      // this.socket = this.$nuxtSocket({
      //   reconnection: false
      // })
      const newdata = {
        post_id: this.$route.params.slug,
        comment_id: this.recommentId,
        user_id: this.loggedInUser.id,
        user_img: this.loggedInUser.image_url,
        user_fullname: this.loggedInUser.fullname,
        comment_value: this.recomment,
        head_id: this.headId,
        head_fullname: this.headFullname,
        head_img: this.headImage
      }
      const resp = await this.$axios.$post('forum/data/recomment', newdata)
      if (!resp.error) {
        // this.$swal({
        //   title: 'Berhasil!',
        //   text: 'Data Telah Di Tambahkan...',
        //   icon: 'success'
        // })
        this.recomment = ''
        this.showForm = false
        // this.socket.emit('send-materi', 'user recomment')
      }
    },
    async createReCommentChild () {
      // this.socket = this.$nuxtSocket({
      //   reconnection: false
      // })
      const newdata = {
        post_id: this.$route.params.slug,
        comment_id: this.recommentId,
        user_id: this.loggedInUser.id,
        user_img: this.loggedInUser.image_url,
        user_fullname: this.loggedInUser.fullname,
        comment_value: this.recomment,
        head_id: this.headId,
        head_fullname: this.headFullname,
        head_img: this.headImage
      }
      const resp = await this.$axios.$post('forum/data/recomment/child', newdata)
      if (!resp.error) {
        // this.$swal({
        //   title: 'Berhasil!',
        //   text: 'Data Telah Di Tambahkan...',
        //   icon: 'success'
        // })
        this.recomment = ''
        this.showForm = false
        // this.socket.emit('send-materi', 'user recomment')
      }
    }
  }
}
</script>
<style scoped>
.comment-field{
  width: 96%;
  margin-left: 0px !important;
  background: #F5F5F5;
}

.comment-value{
  font-size: 14px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  line-height: 20px;
  color: #1D1D1D;
}

.avatar {
  border-radius: 100%;
  width: 38px;
  height: 38px;
  border: 4px solid #ffffff;
}

.isavatar {
  border: 0px;
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  top: 0px;
}

.count {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
  color: #858585;
  padding-top: 5px;
}

.date {
  font-size: 12px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
  color: #858585;
}

.post-heading{
  align-self: center;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.post-value{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: -10px;
  line-height: 19.6px;
}
.commentValue {
  font-size: 14px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
  color: #858585;
  padding-top: 0px;
}
i.v-icon::before {
  color: #858585 !important;
  font-size: 15px;
}
.author-name{
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 700 !important;
  font-size: 12px !important;
}

.v-tab.v-tab {
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
  color: #4A4A4A;
  text-transform: none !important;
  letter-spacing: 0px;
}

.tw-border-bottom{
  border-bottom: 1px solid #D1D5DB;
}

.comment-option .option {
  color: black;
}

.tw-max-w-90p {
  max-width: 90%;
}

.content {
  width: 5px;
  margin: 150px auto;
}
.tree ul {
  margin-left: 20px;
}

.response ul {
  margin-left: 0;
}

.tree li {
  list-style-type: none;
  margin-left: 20px;
  position: relative;
}

.tree li:first-child::before {
  content: "";
  position: absolute;
  top: 40%;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  border-radius: 0 0 0 0px;
  width: 0px;
  height: 15px;
}

.tree li:first-child::after {
  position: absolute;
  content: "";
  margin-top: 1em;
  top: 0%;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-radius: 0px 0 0 0;
  width: 0px;
  height: 100%;
}

.tree li::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  border-radius: 0 0 0 0px;
  width: 45px;
  height: 15px;
}

.tree li::after {
  position: absolute;
  content: "";
  margin-top: -20px;
  top: 0%;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-radius: 0px 0 0 0;
  width: 0px;
  height: 0px;
}

.tree li:last-child::after {
  display: none;
}

.tree li:last-child:before {
  border-radius: 0 0 0 24px;
  height: 20px;
  top: 0%;
}

ul.tree > li:first-child::before {
  display: inline;
}

ul.tree > li:first-child::after {
  border-radius: 0px 0 0 0;
}

ul.tree .detail-user {
  position: relative;
  margin-left: -48px;
}

ul.treefalse .detail-user {
  position: relative;
  margin-left: -30px;
}

.response li {
  list-style-type: none;
  margin-left: -10px;
  position: relative;
}

.response li::before {
  content: "";
  position: absolute;
  top: 45%;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  border-radius: 0 0 0 0px;
  width: 0px;
  min-height: 15px;
}

.response li::after {
  position: absolute;
  content: "";
  margin-top: 20px;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-radius: 0px 0 0 0;
  width: 0px;
  min-height: 100%;
}

.response li:last-child::after {
  display: none;
}

.response li:last-child:before {
  border-radius: 0 0 0 24px;
  height: 0%;
  top: 0%;
  width: 0px;
}

ul.response > li:first-child::before {
  content: "";
  position: absolute;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  border-radius: 0 0 0 0px;
  width: 0px;
  min-height: 0px;
  margin-top: 0%;
}

ul.response > li:first-child::after {
  position: absolute;
  content: "";
  top: 0%;
  margin-top: 20px;
  left: -30px;
  border-left: 2px solid #C4C4C4;
  border-radius: 0px 0 0 0;
  width: 0px;
  min-height: 100%;
  height: 100%;
}

ul.response .detail-user {
  position: relative;
  margin-left: -45px;
}

.form-comment{
  width: 76.48%;
}

.d-sm-none{
  display: none;
}

i.mdi-send::before {
    color: #FF9900 !important;
    font-size: 30px;
}
.detailforum{
  width: 64.7em;
}
@media only screen and (max-width: 1080px){
  .detailforum{
    width: 100%;
  }
  .comment-field{
    width: 87.3%;
    margin-left: 7px;
    background: #F5F5F5;
  }
  .form-comment{
    width: 97.1%;
  }

  .d-sm-none{
    display: inline;
  }

  i.v-icon::before {
    color: #FF9900 !important;
    font-size: 21px;
  }
  .remove-spacing{
    padding: 0px 0px 0px 0px !important;
    margin: 0px 0px 10px 0px !important;
  }
}

</style>

<style scoped lang="scss">
//  ::v-deep .v-application--wrap {
//     min-height: fit-content;
//     background-color: #E5E5E5;
//   }
</style>
<style scoped lang="scss">
::v-deep .container {
  height: 100% !important;
  width: 100% !important;
  background-color: #ffffff;
}
</style>
