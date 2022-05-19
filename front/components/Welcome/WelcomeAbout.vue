<template>
  <div class="height-fullfilled d-flex justify-center align-center">
    <div>
      <v-row>
        <v-col cols="12" align="center">
          <!-- TODO: h1タグのグラフィティを変更する -->
          <h1 class="text-h2">Medcool</h1>
        </v-col>
        <v-col cols="12" align="center">
          <h3 class="mt-4 text-h5">
            <p>みんなで瞑想するアプリです!!</p>
            <p>瞑想を習慣化して</p>
            <p>毎日 Happy、Powerfulにすごそう!!</p>
          </h3>
          <img
            src="@/assets/image/woman_yoga_meisou.webp"
            class="img-responsive"
          />
        </v-col>
      </v-row>
      <v-row class=""
        ><v-col class="text-center"
          ><v-icon class="animated bounce" x-large
            >mdi-chevron-down</v-icon
          ></v-col
        ></v-row
      >
    </div>
  </div>
</template>
<style lang="scss">
// [【CSS】スクロールを促す華麗なアニメーション20選 | フォトピザ](https://photopizza.design/css_prompt_scrolling/)
.animated {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
.bounce {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
  }
  60% {
    -webkit-transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
