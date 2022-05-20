<template>
  <div class="height-fullfilled d-flex justify-center align-center">
    <div class="merits">
      <v-row>
        <v-col cols="12" align="center">
          <!-- TODO: 見出しのグラフィティを変更する -->
          <h4 class="mt-4 text-h4 font-weight-regular">なぜ瞑想？</h4>
        </v-col>
      </v-row>
      <v-row v-for="(merit, index) in merits" :key="index">
        <v-col cols="4" class="img-goodhand-wrapper">
          <img
            src="@/assets/image/hand_good.webp"
            alt="hand_good.webp"
            class="img-responsive"
          />
        </v-col>
        <v-col cols="8" class="my-auto text-h6">
          {{ merit }}
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col>
          <p class="text-center">
            <v-btn to="/signup" color="blue lighten-2" block x-large nuxt>
              <span class="white--text text-h6 font-weight-bold"
                >さっそくはじめよう!!</span
              >
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      merits: [
        'ストレスの軽減・リラックス効果',
        '集中力の向上',
        '睡眠の質の向上',
      ],
    }
  },
}
</script>
