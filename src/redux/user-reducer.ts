import { SET_CURRENT_USER, UserActionTypes } from './action-types'
import { UserState } from './state-types'

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
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer