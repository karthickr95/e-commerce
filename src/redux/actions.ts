import { CartProduct, Product, User } from '../types/types'
import {
    ActionTypes,
    ADD_CART_ITEM,
    SET_CURRENT_USER,
    TOGGLE_CART_POPUP
} from './action-types'

export const addUserAction = (user: User | null): ActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
})

export const toggleCartPopupAction = (): ActionTypes => ({ type: TOGGLE_CART_POPUP })

export const addItemToCartAction = (item: Product): ActionTypes => ({
    type: ADD_CART_ITEM,
    payload: item
})