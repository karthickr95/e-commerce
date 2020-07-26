import { Product, User } from '../types/types'

/*-------------------------------------------------------------------------*/

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

type SetCurrentUserAction = {
    type: typeof SET_CURRENT_USER
    payload: User | null
}

export type UserActionTypes = SetCurrentUserAction

/*-------------------------------------------------------------------------*/

export const TOGGLE_CART_POPUP = 'TOGGLE_CART_POPUP'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'

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

export type CartActionTypes =
    ToggleCartPopupAction
    | AddCartItemAction
    | RemoveCartItemAction
    | ClearItemFromCartAction

/*-------------------------------------------------------------------------*/

export const ADD_DIRECTORY_ITEM = 'ADD_DIRECTORY_ITEM'

type AddDirectoryItemAction = {
    type: typeof ADD_DIRECTORY_ITEM
}

export type DirectoryActionTypes = AddDirectoryItemAction

/*-------------------------------------------------------------------------*/

export const ADD_SHOP_ITEM = 'ADD_SHOP_ITEM'

type AddShopItemAction = {
    type: typeof ADD_SHOP_ITEM
}

export type ShopActionTypes = AddShopItemAction

/*-------------------------------------------------------------------------*/

export type ActionTypes = UserActionTypes | CartActionTypes | DirectoryActionTypes | ShopActionTypes

