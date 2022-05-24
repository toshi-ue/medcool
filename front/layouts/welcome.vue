<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <WelcomeAppFooter />
  </v-app>
</template>
<script>
import WelcomeAppFooter from '@/components/Welcome/WelcomeAppFooter'
export default {
  components: {
    WelcomeAppFooter,
  },
}
</script>
