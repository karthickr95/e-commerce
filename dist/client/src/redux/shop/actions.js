"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCollectionsStartAsync = exports.fetchCollectionsFailure = exports.fetchCollectionsSuccess = exports.fetchCollectionsStart = void 0;
const firebase_utils_1 = require("../../firebase/firebase-utils");
exports.fetchCollectionsStart = () => ({
    type: 'FETCH_COLLECTIONS_START'
});
exports.fetchCollectionsSuccess = (collections) => ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collections
});
exports.fetchCollectionsFailure = (error) => ({
    type: 'FETCH_COLLECTIONS_FAILURE',
    payload: error
});
exports.fetchCollectionsStartAsync = () => dispatch => {
    const collectionRef = firebase_utils_1.firestore.collection('collections');
    dispatch(exports.fetchCollectionsStart());
    collectionRef
        .get()
        .then(snapshot => {
        const collectionsMap = firebase_utils_1.getCollectionsFromCollectionsSnapshot(snapshot);
        dispatch(exports.fetchCollectionsSuccess(collectionsMap));
    })
        .catch(error => dispatch(exports.fetchCollectionsFailure(error.message)));
};
