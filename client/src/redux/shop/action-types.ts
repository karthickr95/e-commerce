import { Collection } from '../../types/types'

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'

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