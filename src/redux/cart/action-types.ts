import { Product } from '../../types/types'

export const TOGGLE_CART_POPUP = 'TOGGLE_CART_POPUP'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'

export type ToggleCartPopupAction = {
    type: typeof TOGGLE_CART_POPUP
}

export type AddCartItemAction = {
    type: typeof ADD_CART_ITEM
    payload: Product
}

export type RemoveCartItemAction = {
    type: typeof REMOVE_CART_ITEM
    payload: Product
}

export type ClearItemFromCartAction = {
    type: typeof CLEAR_ITEM_FROM_CART
    payload: Product
}

export type CartActionTypes =
    ToggleCartPopupAction
    | AddCartItemAction
    | RemoveCartItemAction
    | ClearItemFromCartAction
