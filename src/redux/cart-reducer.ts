import { ADD_CART_ITEM, CartActionTypes, TOGGLE_CART_POPUP } from './action-types'
import { addProductToCart } from './cart-utils'
import { CartState } from './state-types'

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
                cartItems: addProductToCart(state.cartItems, action.payload)
            }
        }
        default:
            return state
    }
}

export default cartReducer