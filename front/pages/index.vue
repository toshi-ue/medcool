<template>
  <div>
    <v-container class="slides">
      <div class="slide">
        <WelcomeAbout />
      </div>
      <div class="slide">
        <WelcomeWhyMeditation />
      </div>
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
<style>
/*
FIXME: ワンページスクロールが効かない
[【CSS】scroll-snapでスナップ（引っかかり）のあるスクロールがまったくカン・タン・だ！ - クモのようにコツコツと](https://www.i-ryo.com/entry/2019/08/31/134603#%E7%B8%A6%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AE%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97scroll-snap-type-y-mandatory)
[CSSのscroll-snapが効かない場合の対処法 | sakura*sakura](https://sakura.monte-verita.biz/5321)
[CSSのスクロールスナップの便利な使い方、実装の注意点を徹底解説 | コリス](https://coliss.com/articles/build-websites/operation/css/usecase-of-css-scroll-snap.html)
代替案
[Vue.jsのライブラリvue-scroll-snapをインストールしてOne Page Scrollを実装する手順 | mebee](https://mebee.info/2020/02/28/post-5744/)
*/
.slide {
  /* overflow-y: scroll; */
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.slides {
  /* overflow: scroll; */

  /* position: relative; */
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
</style>
