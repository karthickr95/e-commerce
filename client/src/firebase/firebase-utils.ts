import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { Collection, Product } from '../types/types'

// noinspection SpellCheckingInspection
const firebaseConfig = {
    apiKey: 'AIzaSyBV_LSPVZ4rE6PBiyrA8-7U4ho4NjcEvjk',
    authDomain: 'e-commerce-poc.firebaseapp.com',
    databaseURL: 'https://e-commerce-poc.firebaseio.com',
    projectId: 'e-commerce-poc',
    storageBucket: 'e-commerce-poc.appspot.com',
    messagingSenderId: '693989830659',
    appId: '1:693989830659:web:a6d3db3254f5f11d411e36',
    measurementId: 'G-LRPYXJNM2H'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const createUserProfileDocument = async (userAuth: firebase.User, displayNameOptional?: string): Promise<firebase.firestore.DocumentReference> => {

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapshot = await userRef.get()

    if (!userSnapshot.exists) {
        const displayName = userAuth.displayName ? userAuth.displayName : displayNameOptional
        const email = userAuth.email
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt
            }).then(() => console.log('success'))
        } catch (e) {
            console.log('Error creating user : ', e.message)
        }
    }

    return userRef
}

export function getCollectionsFromCollectionsSnapshot (
    collectionsSnapShot: firebase.firestore.QuerySnapshot
): { [key: string]: Collection } {
    const collections = collectionsSnapShot.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        } as Collection
    })

    return collections.reduce((accumulator: { [key: string]: Collection }, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

export default firebase