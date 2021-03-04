import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import { firebaseConfig } from './settings'

firebase.initializeApp(firebaseConfig)

const Auth = firebase.auth()

export { Auth }
