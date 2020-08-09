import { User } from '../../types/types'
import { UserActionTypes } from './action-types'

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
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer