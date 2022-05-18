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
    <v-container>
      <WelcomeAbout />
      <WelcomeWhyMeditation />
    </v-container>
  </div>
  <!-- TODO: ログイン済みユーザーのページ情報を追加する -->
</template>

<script>
import WelcomeAbout from '@/components/Welcome/WelcomeAbout'
import WelcomeWhyMeditation from '@/components/Welcome/WelcomeWhyMeditation'

export default {
  // [Nuxt - Layouts directory](https://nuxtjs.org/docs/directory-structure/layouts/#custom-layout)
  // layout({ store }) {
  //   return store.auth.isAuthenticated ? 'default' : 'welcome'
  // },

  name: 'PagesIndex',
  components: {
    WelcomeAbout,
    WelcomeWhyMeditation,
  },
  layout: 'welcome',
}
</script>
