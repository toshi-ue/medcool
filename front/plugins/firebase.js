import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  browserSessionPersistence,
  deleteUser,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export default ({ $config }, inject) => {
  const firebaseConfig = {
    apiKey: $config.firebase.apiKey,
    appId: $config.firebase.appId,
    authDomain: $config.firebase.authDomain,
    measurementId: $config.firebase.measurementId,
    messagingSenderId: $config.firebase.messagingSenderId,
    projectId: $config.firebase.projectId,
    storageBucket: $config.firebase.storageBucket,
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
  const auth = getAuth(app)

  inject('fire', {
    auth,
    browserSessionPersistence,
    deleteUser,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    setPersistence,
    signInWithEmailAndPassword,
    signOut,
  })
}
