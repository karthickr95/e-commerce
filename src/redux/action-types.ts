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
export const REMOVE_CART_ITEM = 'remove_cart_item'
export const CLEAR_ITEM_FROM_CART = 'clear_item_from_cart'

type ToggleCartPopupAction = {
    type: typeof TOGGLE_CART_POPUP
}

type AddCartItemAction = {
    type: typeof ADD_CART_ITEM
    payload: Product
}

type RemoveCartItemAction = {
    type: typeof REMOVE_CART_ITEM
    payload: Product
}

type ClearItemFromCartAction = {
    type: typeof CLEAR_ITEM_FROM_CART
    payload: Product
}

export type CartActionTypes = ToggleCartPopupAction | AddCartItemAction | RemoveCartItemAction | ClearItemFromCartAction

/*-------------------------------------------------------------------------*/

export type ActionTypes = UserActionTypes | CartActionTypes

