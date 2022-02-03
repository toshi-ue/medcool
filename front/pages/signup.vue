
<template>
  <v-card max-width="500" class="p-4 mt-10 mx-auto">
    signup.vue
    <v-snackbar
      v-model="snackbar"
      color="error"
      top
      right
    />
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              label="メールアドレス"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :append-icon="isPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isPasswordShow ? 'text' : 'password'"
              label="パスワード"
              @click:append="isPasswordShow = !isPasswordShow"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <div class="w-100 px-4">
        <v-btn
          x-large
          color="blue"
          block
          class="mx-auto mb-5"
          @click="login()"
        >
          新規登録
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'before-login',
  setup() {
    const { $firebase } = useContext()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const isPasswordShow = ref(false)

    // onMounted(() => {
    //   console.log($firebase)
    // })

    return { email, password, isPasswordShow }
  }
})
</script>
