import { User } from '../../types/types'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export type SetCurrentUserAction = {
    type: typeof SET_CURRENT_USER
    payload: User | null
}

export type UserActionTypes = SetCurrentUserAction