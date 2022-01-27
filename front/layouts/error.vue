<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'EmptyLayout',
  layout: 'empty',
  // [Vue3のCompositionAPIがOptionsAPIよりも優れている理由をVue3エンジニアが解説！ | Ragate ブログ](https://www.ragate.co.jp/blog/articles/9888#:~:text=%E3%81%8C%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82-,props,-setup()%20%E9%96%A2%E6%95%B0%E3%81%AF)
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  setup (props) {
    const otherError = ref('An error occurred')
    const pageNotFound = ref('404 Not Found')
    // [useMeta](https://composition-api.nuxtjs.org/packages/useMeta)
    const title = ref<string | null>()

    useMeta(() => ({
      title: props.error.statusCode === 404 ? pageNotFound.value : otherError.value
    }))
    return { otherError, pageNotFound, title }
  },
  // [useMeta](https://composition-api.nuxtjs.org/packages/useMeta)
  head: {
  }
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
