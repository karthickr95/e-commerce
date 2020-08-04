import { ShopActionTypes } from './action-types'
import { Collection } from '../../types/types'

type CollectionState = {
    collections: {
        [key: string]: Collection
    } | null
}

const initialState: CollectionState = {
    collections: null
}

const shopReducer = (
    state: CollectionState = initialState,
    action: ShopActionTypes
): CollectionState => {
    switch (action.type) {
        case 'UPDATE_COLLECTIONS':
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer