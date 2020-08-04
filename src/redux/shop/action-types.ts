import { Collection } from '../../types/types'

const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'

export type UpdateCollectionsAction = {
    type: typeof UPDATE_COLLECTIONS
    payload: { [key: string]: Collection }
}

export type ShopActionTypes = UpdateCollectionsAction