<template>
  <!-- TODO: 最後にレスポンシブ対応する -->
  <!-- <div class="hidden-sm-and-down"> -->
  <v-bottom-navigation :value="value" color="primary" grow>
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: 'AppBottomNavigation',
  data() {
    return {
      value: undefined,
    }
  },
}
</script>
