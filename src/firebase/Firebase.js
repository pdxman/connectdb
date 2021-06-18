
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAn9l1H39S2dxx1N5ftuzWyG2F1hAfjCyU",
    authDomain: "bit-to-dos.firebaseapp.com",
    projectId: "bit-to-dos",
    storageBucket: "bit-to-dos.appspot.com",
    messagingSenderId: "232674594609",
    appId: "1:232674594609:web:beeeb10ef4dd473dcb6a10",
    measurementId: "G-31017EQ0P7"
  });

  let db = firebase.firestore()

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

  export default { firebase, db, googleProvider  } 
  