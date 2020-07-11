import firebase from "firebase/app";
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV_LSPVZ4rE6PBiyrA8-7U4ho4NjcEvjk",
    authDomain: "e-commerce-poc.firebaseapp.com",
    databaseURL: "https://e-commerce-poc.firebaseio.com",
    projectId: "e-commerce-poc",
    storageBucket: "e-commerce-poc.appspot.com",
    messagingSenderId: "693989830659",
    appId: "1:693989830659:web:a6d3db3254f5f11d411e36",
    measurementId: "G-LRPYXJNM2H"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase

export const signInWithGoogle = () => auth.signInWithPopup(provider)