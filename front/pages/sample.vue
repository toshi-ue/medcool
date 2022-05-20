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
    <v-row>
      <v-col>
        <button type="button" name="button" @click="getMsg">
          RailsからAPIを取得する
        </button>
        <div v-for="(msg, i) in msgs" :key="i">
          {{ msg }}
        </div></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'S2Sample',
  middleware: 'authenticated',
  data() {
    return { msgs: [] }
  },
  methods: {
    async signOut() {
      await this.$store
        .dispatch('auth/signOut')
        .then(() => {
          this.$store.dispatch('auth/setUser', null)
          this.$store.dispatch('common/getToast', {
            msg: 'ログアウトしました',
            color: 'success',
          })
          this.$router.push({
            name: 'login',
          })
        })
        .catch((error) => {
          const msg = this.$getFirebaseErrorMessage(
            this.$store.state.auth.currentUser.email,
            error.code
          )
          this.$store.dispatch('common/getToast', {
            msg,
            color: 'error',
            timeout: -1,
          })
        })
    },
    async getMsg() {
      await this.$axios.$get('api/v1/users').then((res) => {
        this.msgs.push(res)
      })
    },
  },
}
</script>
