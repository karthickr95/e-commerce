import { User } from '../../types/types'
import { SetCurrentUserAction } from './action-types'

export const addUserAction = (user: User | null): SetCurrentUserAction => ({
    type: 'SET_CURRENT_USER',
    payload: user
})