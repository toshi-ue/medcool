<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-toolbar-title v-text="$appName" />
      <app-title />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <app-bottom-navigation />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
// [Nuxt.js + TypeScript + Composition APIで作るSPA - Qiita](https://qiita.com/mmclsntr/items/15acb44ab1746f097a89#layoutsdefaultvue-%E3%81%AEtypescript--composition-api%E5%8C%96)
import { defineComponent, ref, SetupContext } from '@nuxtjs/composition-api'
// https://stackoverflow.com/questions/58474763/nuxt-typescript-error-nuxttypescript-cannot-find-module-my-module
// import AppFooter from '@/components/App/AppFooter'
import AppBottomNavigation from '@/components/App/AppBottomNavigation.vue'
import AppFooter from '@/components/App/AppFooter.vue'
import AppTitle from '@/components/App/AppTitle.vue'

interface Item{
  icon: string,
  title: string,
  to: string
}

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    AppBottomNavigation,
    AppFooter,
    AppTitle
  },
  setup (_, context: SetupContext) {
    // console.log(context.root.$appName)
    const clipped = ref(false)
    const drawer = ref(false)
    // const fixed = ref(false)
    const items = ref<Item[]>([
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ])
    const miniVariant = ref(false)
    const right = ref(true)
    const rightDrawer = ref(false)
    // const title = ref('Vuetify.js')
    const title = ref(context.root.$appName)

    // return { clipped, drawer, fixed, items, miniVariant, right, rightDrawer, title }
    return { clipped, drawer, items, miniVariant, right, rightDrawer, title }
  }
})
</script>
