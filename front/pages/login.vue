
<template>
  <div>
    login.vue
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'before-login',
  setup() {
    const { $firebase } = useContext()

    const email = ref('')
    const password = ref('')
    const isPasswordShow = ref(false)
    onMounted(() => {
      console.log($firebase)
    })

    return { email, password, isPasswordShow }
  }
})
</script>
