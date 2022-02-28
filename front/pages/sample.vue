<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col :sm="12" :md="8">
        <p class="text-center">ログインユーザのみ閲覧可能なコンテンツ</p>
        <div class="pa-5">
          <v-btn
            block
            color="indigo darken-1"
            nuxt
            to="/sample_sample"
            class="white--text"
          >
            サンプルページへ
          </v-btn>
        </div>
        <div class="pa-5">
          <v-btn block outlined color="grey darken-3" @click="signOut">
            ログアウト
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'S2Sample',
  middleware: 'authenticated',
  methods: {
    async signOut() {
      await this.$fire
        .signOut(this.$fire.auth)
        .then(() => {
          this.$store.dispatch('auth/setUser', null)
          this.$router.push({
            name: 'login',
          })
        })
        .catch((error) => {
          console.log('error:', error)
          // TODO: エラーメッセージを追加する
          // TODO: フラッシュメッセージを表示させる
          // auth/email-already-in-use
        })
    },
  },
}
</script>
