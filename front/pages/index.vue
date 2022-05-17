<template>
  <!-- <div>
    <button type="button" name="button" @click="getMsg">
      RailsからAPIを取得する
    </button>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
  </div> -->
  <!-- <div>index.vue</div> -->
  <div>
    <v-container class="height-fullfilled width-fullfilled">
      <v-row class="height-fullfilled" justify="center" align-content="center">
        <v-col align="center">
          <!-- TODO: h1タグのグラフィティを変更する -->
          <h1 class="text-h2">Medcool</h1>
          <h3 class="mt-4 text-h5">
            瞑想を習慣化して<br />毎日 Happy、Powerfulに!!
          </h3>
          <img src="@/assets/image/woman_yoga_meisou.webp" class="img-woman" />
          <p>
            <v-btn color="blue lighten-2" block x-large
              ><span class="white--text text-h6 font-weight-bold"
                >はじめる</span
              >
            </v-btn>
          </p>
          <p>
            <v-btn block x-large
              ><span class="text-h6 font-weight-regular">なぜ瞑想？</span>
            </v-btn>
          </p>

          <p>
            <v-btn block x-large>
              <span class="text-h6 font-weight-regular">使い方</span>
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- TODO: ログイン済みユーザーのページ情報を追加する -->
</template>

<script>
export default {
  // [Nuxt - Layouts directory](https://nuxtjs.org/docs/directory-structure/layouts/#custom-layout)
  // layout({ store }) {
  //   return store.auth.isAuthenticated ? 'default' : 'welcome'
  // },

  name: 'PagesIndex',
  components: {},
  layout: 'welcome',
}
</script>
