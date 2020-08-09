import { Product } from '../../types/types'
import {
    ToggleCartPopupAction,
    AddCartItemAction,
    ClearItemFromCartAction,
    RemoveCartItemAction
} from './action-types'

export const toggleCartPopupAction = (): ToggleCartPopupAction => ({
    type: 'TOGGLE_CART_POPUP'
})

export const addItemToCartAction = (item: Product): AddCartItemAction => ({
    type: 'ADD_CART_ITEM',
    payload: item
})

export const removeItemFromCartAction = (item: Product): RemoveCartItemAction => ({
    type: 'REMOVE_CART_ITEM',
    payload: item
})

export const clearItemFromCartAction = (item: Product): ClearItemFromCartAction => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
})