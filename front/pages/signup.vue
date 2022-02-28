<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="5">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスで登録
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
                      ref="register_form"
                      v-model="register_valid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="email"
                        label="メールアドレス"
                        required
                        validate-on-blur
                      />

                      <v-text-field
                        ref="register_password"
                        v-model="password"
                        label="パスワード"
                        required
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        validate-on-blur
                        @click:append="showPassword = !showPassword"
                      >
                        <!-- <template v-slot:progress>
                          <v-progress-linear
                            :value="score.value"
                            :color="score.color"
                            absolute
                            height="2"
                          />
                        </template> -->
                      </v-text-field>
                      <v-text-field
                        v-model="passwordConfirmation"
                        label="パスワード（確認）"
                        required
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        validate-on-blur
                        @click:append="showPassword = !showPassword"
                      />

                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>

                      <v-btn
                        :disabled="!register_valid"
                        color="blue darken-3"
                        class="mr-4 white--text"
                        @click="signUp"
                      >
                        登録
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider class="my-8" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'S2Signup',
  // layout: 'sampleSignUp',
  data() {
    return {
      registerErrorMsg: '',
      tab: null,
      register_valid: true,
      email: '',
      password: '',
      passwordConfirmation: '',
      showPassword: false,
    }
  },
  methods: {
    async signUp() {
      await this.$fire
        .createUserWithEmailAndPassword(
          this.$fire.auth,
          this.email,
          this.password
        )
        .then((userCredential) => {
          const user = userCredential.user
          console.log('user:', user)
          const { email, uid } = user
          this.$store.dispatch('auth/setUser', { email, uid })
          this.$router.push({
            name: 'sample',
          })
        })
        .catch((error) => {
          console.log('error:', error)
          console.log('error code:', error.code)
          console.log('error message:', error.message)
          // TODO: エラーメッセージを追加する
          // TODO: フラッシュメッセージを表示させる
          // auth/email-already-in-use
        })
    },
  },
}
</script>
