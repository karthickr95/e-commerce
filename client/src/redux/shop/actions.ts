import { ThunkAction } from 'redux-thunk'
import { Collection } from '../../types/types'
import {
    FetchCollectionsFailureAction,
    FetchCollectionsStartAction,
    FetchCollectionsSuccessAction
} from './action-types'

import { firestore, getCollectionsFromCollectionsSnapshot } from '../../firebase/firebase-utils'

export const fetchCollectionsStart = (): FetchCollectionsStartAction => ({
    type: 'FETCH_COLLECTIONS_START'
})

export const fetchCollectionsSuccess = (collections: { [key: string]: Collection }): FetchCollectionsSuccessAction => ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collections
})

export const fetchCollectionsFailure = (error: string): FetchCollectionsFailureAction => ({
    type: 'FETCH_COLLECTIONS_FAILURE',
    payload: error
})

export const fetchCollectionsStartAsync = (): ThunkAction<any, any, any, any> => dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
        .get()
        .then(snapshot => {
            const collectionsMap = getCollectionsFromCollectionsSnapshot(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)))
}
