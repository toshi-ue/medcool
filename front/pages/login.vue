<template>
  <v-container class="height-fullfilled d-flex justify-center align-center">
    <v-row>
      <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスでログイン
        </h2>
        <v-row>
          <v-col>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="blue accent-2"
              grow
              class="mb-3"
            >
              <v-tab to="/login">ログイン</v-tab>
              <v-tab to="/signup">アカウント登録</v-tab>
            </v-tabs>
            <v-row>
              <v-col sm="12">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <v-form
                      ref="login_form"
                      v-model="login_valid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="email"
                        label="メールアドレス"
                        required
                      />
                      <v-text-field
                        v-model="password"
                        label="パスワード"
                        required
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                      />
                      <v-alert v-if="loginErrorMsg" dense text type="error">
                        {{ loginErrorMsg }}
                      </v-alert>
                      <v-btn
                        :disabled="!login_valid"
                        color="blue darken-3"
                        class="my-4 white--text"
                        @click="login"
                      >
                        ログイン
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'welcome',
  data() {
    return {
      tab: null,
      login_valid: true,
      email: '',
      password: '',
      showPassword: false,
      loginErrorMsg: '',
      socialLoginErrorMsg: '',
    }
  },
  methods: {
    async login() {
      await this.$fire
        .signInWithEmailAndPassword(this.$fire.auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          const { email, uid } = user
          this.$store.dispatch('auth/setUser', { email, uid })
          this.$router.push({
            name: 'sample',
          })
          this.$store.dispatch('common/getToast', {
            msg: 'ログインしました',
            color: 'success',
          })
          this.$router.push({
            name: 'sample',
          })
        })
        .catch((error) => {
          // console.log('error:', error)
          // console.log('error code:', error.code)
          // console.log('error message:', error.message)
          const msg = this.$getFirebaseErrorMessage(this.email, error.code)
          this.$store.dispatch('common/getToast', {
            msg,
            color: 'error',
            timeout: -1,
          })
        })
    },
  },
}
</script>
