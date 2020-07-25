import { CartState } from './state-types'

import {
    ADD_CART_ITEM,
    CartActionTypes,
    CLEAR_ITEM_FROM_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_POPUP
} from './action-types'

import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart
} from './cart-utils'


const initialState: CartState = {
    isHidden: true,
    cartItems: []
}

const cartReducer = (
    state: CartState = initialState,
    action: CartActionTypes
): CartState => {
    switch (action.type) {
        case TOGGLE_CART_POPUP : {
            return {
                ...state,
                isHidden: !state.isHidden
            }
        }
        case ADD_CART_ITEM : {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }
        case REMOVE_CART_ITEM : {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }
        case CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        }
        default:
            return state
    }
}

export default cartReducer