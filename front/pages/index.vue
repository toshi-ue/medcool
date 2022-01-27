<template>
  <!-- [Nuxt.js+Vuetify+axiosで外部APIから取得した情報を表示するまで](https://zenn.dev/satonopan/articles/eca27c1b4f0b93) -->
  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
  <div>
    <button type="button" name="button" @click="getMsg">
      RailsからAPIを取得する
    </button>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    // [javascript - How to use $axios Nuxt module inside of setup() from composition API? - Stack Overflow](https://stackoverflow.com/questions/67393513/how-to-use-axios-nuxt-module-inside-of-setup-from-composition-api)
    const { $axios } = useContext()
    // [vue.js - How to set up Vue 3 Composition API (Typescript) to push user-inputted value to array - Stack Overflow](https://stackoverflow.com/questions/70728551/how-to-set-up-vue-3-composition-api-typescript-to-push-user-inputted-value-to)
    const msgs = ref<string[]>([])

    const getMsg = async (): Promise<void> => {
      // msgs.value = await $axios.$get('api/v1/users')
      // msgs.value.push(await $axios.$get('api/v1/users'))
      await $axios.get('api/v1/users').then((res) => {
        msgs.value.push(res.data)
      })
    }

    return {
      msgs, getMsg
    }
  }
})
</script>
