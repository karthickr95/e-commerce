import { User } from '../types/user-types'

export const SET_CURRENT_USER = 'set_current_user'

type SetCurrentUserAction = {
    type: typeof SET_CURRENT_USER
    user: User | null
}

export type UserActionTypes = SetCurrentUserAction

export type ActionTypes = UserActionTypes

