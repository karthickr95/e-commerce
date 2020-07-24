import { Product, User } from '../types/types'

/*-------------------------------------------------------------------------*/

export const SET_CURRENT_USER = 'set_current_user'

type SetCurrentUserAction = {
    type: typeof SET_CURRENT_USER
    payload: User | null
}

export type UserActionTypes = SetCurrentUserAction

/*-------------------------------------------------------------------------*/

export const TOGGLE_CART_POPUP = 'toggle_cart_popup'
export const ADD_CART_ITEM = 'add_cart_item'

type ToggleCartPopupAction = {
    type: typeof TOGGLE_CART_POPUP
}

type AddCartItemAction = {
    type: typeof ADD_CART_ITEM
    payload: Product
}

export type CartActionTypes = ToggleCartPopupAction | AddCartItemAction

/*-------------------------------------------------------------------------*/

export type ActionTypes = UserActionTypes | CartActionTypes

