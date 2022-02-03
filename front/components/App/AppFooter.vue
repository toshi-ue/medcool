<template>
  <!-- TODO: 最後にレスポンシブ対応する -->
  <!-- <div class="hidden-sm-and-down"> -->
  <div>
    <v-footer class="d-flex justify-center">
      <!-- <span>&copy; {{ new Date().getFullYear() }} ~ </span> -->
      <span>&copy; 2022 ~ {{ $appName }}</span>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    //
  }
})
</script>
