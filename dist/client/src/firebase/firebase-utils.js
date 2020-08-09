"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInWithGoogle = exports.firestore = exports.auth = exports.getCollectionsFromCollectionsSnapshot = exports.createUserProfileDocument = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/analytics");
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
    apiKey: 'AIzaSyBV_LSPVZ4rE6PBiyrA8-7U4ho4NjcEvjk',
    authDomain: 'e-commerce-poc.firebaseapp.com',
    databaseURL: 'https://e-commerce-poc.firebaseio.com',
    projectId: 'e-commerce-poc',
    storageBucket: 'e-commerce-poc.appspot.com',
    messagingSenderId: '693989830659',
    appId: '1:693989830659:web:a6d3db3254f5f11d411e36',
    measurementId: 'G-LRPYXJNM2H'
};
app_1.default.initializeApp(firebaseConfig);
app_1.default.analytics();
exports.createUserProfileDocument = (userAuth, displayNameOptional) => __awaiter(void 0, void 0, void 0, function* () {
    const userRef = exports.firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = yield userRef.get();
    if (!userSnapshot.exists) {
        const displayName = userAuth.displayName ? userAuth.displayName : displayNameOptional;
        const email = userAuth.email;
        const createdAt = new Date();
        try {
            yield userRef.set({
                displayName,
                email,
                createdAt
            }).then(() => console.log('success'));
        }
        catch (e) {
            console.log('Error creating user : ', e.message);
        }
    }
    return userRef;
});
function getCollectionsFromCollectionsSnapshot(collectionsSnapShot) {
    const collections = collectionsSnapShot.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        };
    });
    return collections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}
exports.getCollectionsFromCollectionsSnapshot = getCollectionsFromCollectionsSnapshot;
exports.auth = app_1.default.auth();
exports.firestore = app_1.default.firestore();
const googleAuthProvider = new app_1.default.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
exports.signInWithGoogle = () => exports.auth.signInWithPopup(googleAuthProvider);
exports.default = app_1.default;
