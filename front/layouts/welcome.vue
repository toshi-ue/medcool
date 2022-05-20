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
<style>
.height-fullfilled {
  height: 100vh;
}

.width-fullfilled {
  width: 100%;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
