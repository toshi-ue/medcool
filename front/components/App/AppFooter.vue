<template>
  <!-- TODO: 最後にレスポンシブ対応する -->
  <!-- <div class="hidden-sm-and-down"> -->
  <div>
    <v-footer class="d-flex justify-center">
      <!-- <span>&copy; {{ new Date().getFullYear() }} ~ </span> -->
      <nuxt-link to="/">
        <span>&copy; 2022 ~ {{ $config.APP_NAME }}</span>
      </nuxt-link>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {}
  },
}
</script>
