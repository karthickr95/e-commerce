import { createSelector } from 'reselect'
import { AppState } from '../store'

const selectUser = (state: AppState) => state.user


export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)