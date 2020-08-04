import { Collection } from '../../types/types'
import { UpdateCollectionsAction } from './action-types'

export const updateCollectionsAction = (collections: { [key: string]: Collection }): UpdateCollectionsAction => ({
    type: 'UPDATE_COLLECTIONS',
    payload: collections
})