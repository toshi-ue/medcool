<template>
  <div>
    before-login.vue
    <nuxt />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const value = ref(undefined)
    return { value }
  }
})
</script>
