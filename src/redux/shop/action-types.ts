import { Collection } from '../../types/types'

const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'

export type FetchCollectionsStartAction = {
    type: typeof FETCH_COLLECTIONS_START
}

export type FetchCollectionsSuccessAction = {
    type: typeof FETCH_COLLECTIONS_SUCCESS
    payload: { [key: string]: Collection }
}

export type FetchCollectionsFailureAction = {
    type: typeof FETCH_COLLECTIONS_FAILURE
    payload: string
}

export type ShopActionTypes =
    FetchCollectionsStartAction
    | FetchCollectionsSuccessAction
    | FetchCollectionsFailureAction