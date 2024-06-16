<template>
  <div class="">
    <div class="">
      <v-list three-line>
        <template v-for="item in post">
          <v-list-item
            v-if="item.post_target === 'dosen'"
            :key="item.title"
            class="pa-0 tw-px-8 tw-py-5 tw-border-bottom tw-bg-sky"
            style="padding: 20px 50px !important;"
          >
            <v-list-item-avatar>
              <v-img :src="item.author.user_img" />
            </v-list-item-avatar>

            <v-list-item-content>
              <!-- invisible lg:visible -->
              <div class="tw-flex">
                <div class="author-name tw-inline-block tw-mr-1 tw-text-[#858585]">
                  {{ item.author.user_fullname }}
                </div>
                <span class="color: #858585;">{{ $moment(item.created_at).fromNow() }}</span>
              </div>
              <v-list-item-title v-html="item.post_heading" />
              <div class="tw-flex tw-flex-col">
                <div class="tw-flex tw-flex-between tw-mt-1 tw-cursor-pointer tw-w-3/5" @click="fdetailForum(item._id)">
                  <v-list-item-subtitle v-html="item.post_value" />
                </div>
                <div class="tw-flex tw-flex-row tw-mt-2">
                  <div v-if="item.post_detail.uid_like.includes(loggedInUser.id) === true">
                    <a @click="likeMateri(item._id)">
                      <v-icon :id="item._id" small color="#BDBDBD" class="tw-mr-2">
                        mdi-thumb-up
                      </v-icon>
                    </a>
                  </div>
                  <div v-if="item.post_detail.uid_like.includes(loggedInUser.id) === false">
                    <a @click="likeMateri(item._id)">
                      <v-icon :id="item._id" small color="#858585" class="tw-mr-2">
                        mdi-thumb-up-outline
                      </v-icon>
                    </a>
                  </div>
                  <span class="tw-mr-4 count">{{ item.post_detail.count_like }}</span>

                  <div v-if="item.post_detail.uid_disslike.includes(loggedInUser.id) === true">
                    <a @click="disslikeMateri(item._id)">
                      <v-icon :id="dis+item._id" small color="#BDBDBD" class="tw-mr-2">
                        mdi-thumb-down
                      </v-icon>
                    </a>
                  </div>
                  <div v-if="item.post_detail.uid_disslike.includes(loggedInUser.id) === false">
                    <a @click="disslikeMateri(item._id)">
                      <v-icon :id="dis+item._id" small color="#858585" class="tw-mr-2">
                        mdi-thumb-down-outline
                      </v-icon>
                    </a>
                  </div>
                  <span class="tw-mr-4 count">{{ item.post_detail.count_disslike }}</span>
                  <a>
                    <v-icon small color="#858585" class="tw-mr-2">
                      mdi-comment-outline
                    </v-icon>
                  </a>
                  <span class="tw-mr-4 count">{{ item.comment.length }}</span>
                </div>
              </div>
              <div v-if="showComment === item._id" :id="iscomment+item._id" class="block">
                <div class="tw-mt-5">
                  <v-avatar size="33" class="float-left tw-mr-5">
                    <v-img :src="loggedInUser.imageUrl" />
                  </v-avatar>
                  <div class="author-name block">
                    {{ loggedInUser.fullname }}
                  </div>
                  <span class="commentValue">{{ commentVal }}</span>
                </div>
              </div>
              <div v-else />
              <div class="block tw-px-0">
                <div class="tw-flex tw-mt-5">
                  <v-avatar size="33">
                    <v-img :src="loggedInUser.image_url" />
                  </v-avatar>
                  <input
                    :id="comment+item._id"
                    type="text"
                    placeholder="Tulis Komentar..."
                    class="
                        tw-ml-4
                        inline-block
                        tw-text-sm
                        tw-bg-[#FFFFFF]
                        appearance-none
                        tw-rounded-lg
                        tw-py-2
                        tw-px-3
                        tw-text-gray-700
                        leading-tight
                        tw-w-3/5
                    "
                    @keyup.enter="createComment(item._id)"
                  >
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-else
            :key="item.title"
            class="pa-0 tw-px-8 tw-py-5 tw-border-bottom"
            style="padding: 20px 50px !important;"
          >
            <v-list-item-avatar>
              <v-img :src="item.author.user_img" />
            </v-list-item-avatar>

            <v-list-item-content>
              <!-- invisible lg:visible -->
              <div class="tw-flex">
                <div class="author-name tw-inline-block tw-mr-1 tw-text-[#858585]">
                  {{ item.author.user_fullname }}
                </div>
                <span style="color: #858585;">{{ $moment(item.created_at).fromNow() }}</span>
              </div>
              <v-list-item-title v-html="item.post_heading" />
              <div class="tw-flex tw-flex-col">
                <div class="tw-flex tw-flex-between tw-mt-1 tw-cursor-pointer tw-w-3/5" @click="fdetailForum(item._id)">
                  <v-list-item-subtitle v-html="item.post_value" />
                </div>
                <div class="tw-flex tw-flex-row tw-mt-2">
                  <div v-if="item.post_detail.uid_like.includes(loggedInUser.id) === true">
                    <a @click="likeMateri(item._id)">
                      <v-icon :id="item._id" small color="#BDBDBD" class="tw-mr-2">
                        mdi-thumb-up
                      </v-icon>
                    </a>
                  </div>
                  <div v-if="item.post_detail.uid_like.includes(loggedInUser.id) === false">
                    <a @click="likeMateri(item._id)">
                      <v-icon :id="item._id" small color="#858585" class="tw-mr-2">
                        mdi-thumb-up-outline
                      </v-icon>
                    </a>
                  </div>
                  <span class="tw-mr-4 count">{{ item.post_detail.count_like }}</span>

                  <div v-if="item.post_detail.uid_disslike.includes(loggedInUser.id) === true">
                    <a @click="disslikeMateri(item._id)">
                      <v-icon :id="dis+item._id" small color="#BDBDBD" class="tw-mr-2">
                        mdi-thumb-down
                      </v-icon>
                    </a>
                  </div>
                  <div v-if="item.post_detail.uid_disslike.includes(loggedInUser.id) === false">
                    <a @click="disslikeMateri(item._id)">
                      <v-icon :id="dis+item._id" small color="#858585" class="tw-mr-2">
                        mdi-thumb-down-outline
                      </v-icon>
                    </a>
                  </div>
                  <span class="tw-mr-4 count">{{ item.post_detail.count_disslike }}</span>
                  <a>
                    <v-icon small color="#858585" class="tw-mr-2">
                      mdi-comment-outline
                    </v-icon>
                  </a>
                  <span class="tw-mr-4 count">{{ item.comment.length }}</span>
                </div>
              </div>
              <div v-if="showComment === item._id" :id="iscomment+item._id" class="block">
                <div class="tw-mt-5">
                  <v-avatar size="33" class="float-left tw-mr-5">
                    <v-img :src="loggedInUser.imageUrl" />
                  </v-avatar>
                  <div class="author-name block">
                    {{ loggedInUser.fullname }}
                  </div>
                  <span class="commentValue">{{ commentVal }}</span>
                </div>
              </div>
              <div v-else />
              <div class="block tw-px-0">
                <div class="tw-flex tw-mt-5">
                  <v-avatar size="33">
                    <v-img :src="loggedInUser.image_url" />
                  </v-avatar>
                  <input
                    :id="comment+item._id"
                    type="text"
                    placeholder="Tulis Komentar..."
                    class="
                        tw-ml-4
                        inline-block
                        tw-text-sm
                        tw-bg-[#F5F5F5]
                        appearance-none
                        tw-rounded-lg
                        tw-py-2
                        tw-px-3
                        tw-text-gray-700
                        leading-tight
                        tw-w-3/5
                    "
                    @keyup.enter="createComment(item._id)"
                  >
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    post: [],
    newpost: [],
    comment: 'comment-',
    dis: 'disslike-',
    iscomment: 'iscomment-',
    showComment: '',
    commentVal: ''
  }),
  async fetch () {
    const res = await this.$axios.$get('forum/data/activity')
    this.post = res.data
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  beforeMount () {
    // this.socket = this.$nuxtSocket({
    //   reconnection: false
    // })
    this.$socket.main.on('new-materi', (materi) => {
      this.$fetch()
    })
  },
  mounted () {
    // this.socket = this.$nuxtSocket({
    //   reconnection: false
    // })
  },
  methods: {
    fdetailForum (id) {
      this.$router.push(`/dashboard/user/detail-forum/${id}`)
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
          this.$socket.main.emit('send-materi', 'user like')
          this.$fetch()
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
          this.$socket.main.emit('send-materi', 'user cancle like')
          this.$fetch()
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
          this.$socket.main.emit('send-materi', 'user disslike')
          this.$fetch()
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
          this.$socket.main.emit('send-materi', 'user cancle disslike')
          this.$fetch()
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
          this.$socket.main.emit('send-comment', newdata)
          this.$swal({
            title: 'Berhasil!',
            text: 'Data Telah Di Tambahkan...',
            icon: 'success'
          })
          document.getElementById('comment-' + id).value = ''
          this.$socket.main.emit('send-materi', 'user create comment')
          this.commentVal = commentval
          this.showComment = id
          this.$fetch()
        }
      }
    }
  }
}
</script>
<style scoped>
.count {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  line-height: 16px;
  color: #858585;
  padding-top: 1px;
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

.tw-flex .v-list-item__subtitle {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
}

.v-list-item__title {
  align-self: center;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.theme--light {
  /* background-color: #FFFFFF !important; */
  border: none;
}
.tw-border-bottom{
  border-bottom: 1px solid rgb(209, 213, 219, 0.45);
}
.v-card {
  width: 100%;
  margin-right: 0px;
  margin-left: 0px;
}

.tw-bg-sky{
  background: #EAF6FF;
  border-top: 1px solid rgba(20, 110, 180, 0.4);
  border-bottom: 1px solid rgba(20, 110, 180, 0.4);
}

.v-list--three-line .v-list-item .v-list-item__subtitle, .v-list-item--three-line .v-list-item__subtitle {
  white-space: initial;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  cursor: pointer !important;
}

@media only screen and (max-width: 1080px){
  .tw-w-3\/5 {
    width: 100%;
  }

  .d-sm-none{
    display: inline;
  }

  i.v-icon::before {
    color: #858585 !important;
    font-size: 21px;
  }
}
</style>

<style lang="scss">
.v-window__container {
  margin-top: 0em;
}

.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 0px;
}

@media only screen and (max-width: 1080px){
  .v-card {
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
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
    background-color:#ffffff;
  }
</style>
