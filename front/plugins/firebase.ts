// [nuxt-firebase-9/firebase.js at main · mchoiruln/nuxt-firebase-9](https://github.com/mchoiruln/nuxt-firebase-9/blob/main/plugins/firebase.js)
// https://zenn.dev/tai_hatake/articles/c0d754bb7ae230
import type { NuxtConfig } from '@nuxt/types'
import { initializeApp, FirebaseApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification,
  deleteUser
} from 'firebase/auth'

declare module 'vue/types/vue' {
  interface Vue {
    $fire: void
  }
}

declare module '@nuxt/types' {
  // [Nuxt.js + Nuxt Compostion API + TypeScriptでmicroCMSを利用してSSGをする | polidog lab](https://polidog.jp/2020/11/01/nuxt-microcms/)
  // interface Context {
  //   $fire: void
  // }
  interface NuxtAppOptions {
    $fire: void
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $fire: void
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ $config }: NuxtConfig, inject: any) => {
  const firebaseConfig = {
    apiKey: $config.firebase.apiKey,
    authDomain: $config.firebase.authDomain,
    projectId: $config.firebase.projectId,
    storageBucket: $config.firebase.storageBucket,
    messagingSenderId: $config.firebase.messagingSenderId,
    appId: $config.firebase.appId,
    measurementId: $config.firebase.measurementId
  }
  const app: FirebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  inject('fire', {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence,
    sendEmailVerification,
    deleteUser
  })
}
