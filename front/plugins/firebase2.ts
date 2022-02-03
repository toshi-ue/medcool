// [SpringBoot + Nuxt構成でGoogle認証を実現する - 革命のブログ](https://blog.frevo-works.co.jp/entry/2022/01/12/170921)
import type { Plugin, NuxtConfig } from '@nuxt/types'
import { initializeApp, FirebaseApp, getApps, getApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification,
  deleteUser,
  User,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: void
  }
}

declare module '@nuxt/types' {
  // [Nuxt.js + Nuxt Compostion API + TypeScriptでmicroCMSを利用してSSGをする | polidog lab](https://polidog.jp/2020/11/01/nuxt-microcms/)
  interface Context {
    $firebase: void
  }
  interface NuxtAppOptions {
    $firebase: void
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $firebase: void
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const firebase: Plugin = ({ $config }: NuxtConfig, inject: any) => {
  console.log('$config type', typeof $config)
  console.log('inject type', typeof inject)
  const firebaseConfig = {
    apiKey: $config.firebase.apiKey,
    authDomain: $config.firebase.authDomain,
    projectId: $config.firebase.projectId,
    storageBucket: $config.firebase.storageBucket,
    messagingSenderId: $config.firebase.messagingSenderId,
    appId: $config.firebase.appId,
    measurementId: $config.firebase.measurementId
  }

  !getApps().length ? initializeApp(firebaseConfig) : getApp()

  const createUser = (email: string, password: string) => {
    return new Promise<User | false>((resolve, reject) => {
      createUserWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
        const user = userCredential.user
        if (user) {
          resolve(user)
          console.log('1', user)
        } else {
          console.log('2', user)
          resolve(false)
          console.log('3', user)
        }
      })
    })
  }

  const setErrorMessage = (errorCode: any) => {
    console.log('error code', errorCode)
    console.log('error type', typeof errorCode)
    switch (errorCode) {
      case 'auth/invalid-email':
        // this.message = 'メールアドレスの形式に誤りがあります。'
        break
      case 'auth/email-already-in-use':
        // this.message = '入力されたメールアドレスは既に使用されています。'
        break
      case 'auth/weak-password':
        // this.message = 'パスワードは6文字以上で入力してください。'
        break
      default:
        // this.message = '新規登録に失敗しました。'
        break
    }
  }

  inject('firebase', {
    createUser, setErrorMessage
  })
}

export default firebase
