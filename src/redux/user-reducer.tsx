import { SET_CURRENT_USER, UserActionTypes } from './action-types'
import { User } from '../types/user-types'

type UserState = {
    currentUser: User | null
}

const initialState: UserState = {
    currentUser: null
}

const userReducer = (
    state: UserState = initialState,
    action: UserActionTypes
): UserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state
    }
}

export default userReducer