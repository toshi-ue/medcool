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
                    <!--
                      lazy-validation を付加すると validationが通ってしまい初期画面でボタンが有効になってしまう
                      [v-form API — Vuetify](https://vuetifyjs.com/en/api/v-form/)
                      -->
                    <v-form ref="form" v-model="isValid">
                      <!-- TODO: nicknameを追加できるようにする -->
                      <!-- <v-text-field
                        v-model="nickname"
                        label="ニックネーム"
                        required
                        validate-on-blur
                      /> -->
                      <v-text-field
                        v-model="email"
                        label="メールアドレス"
                        required
                        :rules="[rules.required, rules.email]"
                      />

                      <v-text-field
                        v-model="password"
                        label="パスワード"
                        clearable
                        counter
                        hint="6文字以上の英数字"
                        minlength="10"
                        required
                        :rules="[rules.required, rules.min]"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
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
                        clearable
                        counter
                        required
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[
                          rules.required,
                          rules.matchPassword,
                          rules.min,
                        ]"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                      />

                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>

                      <v-btn
                        :disabled="!isValid || loading"
                        :loading="loading"
                        block
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
            <!-- <v-divider class="my-8" /> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// validate-on-blur
//
// :disabled="!isValid || loading"
export default {
  name: 'Signup',
  data() {
    return {
      registerErrorMsg: '',
      tab: null,
      // nickname: '',
      isValid: false,
      email: '',
      loading: false,
      password: '',
      passwordConfirmation: '',
      rules: {
        email: (value) => {
          const pattern =
            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
          return pattern.test(value) || 'メールアドレスの形式が正しくありません'
        },
        matchPassword: (value) =>
          value === this.password || 'パスワードと一致していません',
        min: (value) =>
          (value && value.length >= 6) || '6文字以上の英数字が必須です',
        required: (value) => !!value || `入力必須です`,
      },
      showPassword: false,
    }
  },
  methods: {
    async signUp(context) {
      this.loading = true

      await this.$store
        .dispatch('auth/signUp', {
          email: this.email,
          password: this.password,
        })
        .then((userCredential) => {
          const user = userCredential.user
          const token = userCredential.user.accessToken
          this.$axios.setToken(token, 'Bearer')

          this.$store.dispatch('auth/setUser', {
            // TODO: nicknameを追加する
            // displayName: this.nickname,
            email: this.email,
            uid: user.uid,
          })

          const params = { email: this.email, uid: user.uid }
          this.$axios
            .$post('api/v1/users/registrations', params)
            .then((res) => {
              console.log(res)

              this.$store.dispatch('common/getToast', {
                msg: '登録しました',
                color: 'success',
              })
              this.$router.push({
                name: 'sample',
              })
            })
            .catch((error) => {
              // console.log('error code:', error.message)
              // console.log('error.response:', error.response)
              // console.log('error.response.data:', error.response.data)
              // console.log(this.$fire.auth.currentUser)
              this.$fire
                .deleteUser(this.$fire.auth.currentUser)
                .then((res) => {})
                .catch((error) => {
                  console.log(error)
                })

              this.$store.dispatch('common/getToast', {
                msg: error.response.data,
                timeout: -1,
              })
            })
            .finally(() => {
              this.loading = false
            })
        })
        .catch((error) => {
          console.log('error2:', error)
          console.log('error.code', error.code)

          const msg = this.$getFirebaseErrorMessage(this.email, error.code)
          console.log(msg)
          this.$store.dispatch('common/getToast', {
            msg,
            color: 'error',
            timeout: -1,
          })
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
