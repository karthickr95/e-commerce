import { User } from '../types/user-types'
import { ActionTypes, SET_CURRENT_USER } from './action-types'

export const addUserAction = (user: User | null): ActionTypes => ({
    type: SET_CURRENT_USER,
    user: user
})