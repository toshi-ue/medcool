<template>
  <v-toolbar-title>
    <nuxt-link to="/">
      {{ $config.APP_NAME }}
    </nuxt-link>
  </v-toolbar-title>
</template>
<script>
export default {
  name: 'AppTitle',
  data() {
    return {}
  },
}
</script>
<style>
/*
FIXME:
layout側でstyle属性を指定しても全体に反映されない
逆にcomponent側で指定すると全体に適用される
*/

/*
nuxtlink a:link change color で検索
https://nuxtjs.org/examples/routing/active-link-classes/
*/

a.nuxt-link-active,
a.nuxt-link-exact-active {
  color: white;
  text-decoration: none;
}
</style>
