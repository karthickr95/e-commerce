import { ADD_CART_ITEM, CartActionTypes, TOGGLE_CART_POPUP } from './action-types'
import { CartProduct } from '../types/types'

type CartState = {
    isHidden: boolean
    cartItems: CartProduct[]
}

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

            const existingCartItem = state.cartItems.find(item => item.product.id === action.payload.id)

            const newItems = (): CartProduct[] => {
                if (existingCartItem) {
                    return state.cartItems.map(item => {
                        if (item.product.id === action.payload.id) {
                            return {
                                product: item.product,
                                quantity: item.quantity + 1
                            }
                        }
                        return item
                    })
                }

                return [...state.cartItems, {
                    product: action.payload,
                    quantity: 1
                }]
            }

            return {
                ...state,
                cartItems: newItems()
            }
        }
        default:
            return state
    }
}

export default cartReducer