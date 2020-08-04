import { ShopActionTypes } from './action-types'
import { Collection } from '../../types/types'

type CollectionState = {
    collections: { [key: string]: Collection } | null,
    isFetching: boolean,
    errorMessage: string | undefined
}

const initialState: CollectionState = {
    isFetching: false,
    collections: null,
    errorMessage: undefined
}

const shopReducer = (
    state: CollectionState = initialState,
    action: ShopActionTypes
): CollectionState => {
    switch (action.type) {
        case 'FETCH_COLLECTIONS_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_COLLECTIONS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case 'FETCH_COLLECTIONS_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer