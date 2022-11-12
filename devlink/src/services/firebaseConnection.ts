
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2y6729885qbdTIu5dBmpEoyCrXZ-Y0D0",
  authDomain: "devlink-e869c.firebaseapp.com",
  projectId: "devlink-e869c",
  storageBucket: "devlink-e869c.appspot.com",
  messagingSenderId: "888638611984",
  appId: "1:888638611984:web:53e58b7ad0277f74ce6095",
  measurementId: "G-4MVH01EPG8"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {
  db,
  auth
}
