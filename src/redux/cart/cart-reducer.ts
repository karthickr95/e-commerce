import { CartProduct, Product } from '../../types/types'
import {
    ADD_CART_ITEM,
    CLEAR_ITEM_FROM_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_POPUP,
    CartActionTypes
} from './action-types'

export type CartState = {
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

/*---------------------------------------------------------------------------------------------------------*/
//Util functions

const addItemToCart = (oldItems: CartProduct[], newItem: Product): CartProduct[] => {

    const existingCartItem = oldItems.find(item => item.product.id === newItem.id)

    if (existingCartItem) {
        return oldItems.map(item => {
            if (item.product.id === newItem.id) {
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
    }

    return [...oldItems, {
        product: newItem,
        quantity: 1
    }]
}

const removeItemFromCart = (oldItems: CartProduct[], removeItem: Product): CartProduct[] => {

    const existingCartItem = oldItems.find(item => item.product.id === removeItem.id)

    if (existingCartItem && existingCartItem.quantity === 1) {
        return oldItems.filter(item => item.product.id !== removeItem.id)
    }

    return oldItems.map(item => {
        if(item.product.id === removeItem.id) {
            return {
                product: item.product,
                quantity: item.quantity - 1
            }
        }
        return item
    })
}

const clearItemFromCart = (oldItems: CartProduct[], clearItem: Product): CartProduct[] => {
    return oldItems.filter(item => item.product.id !== clearItem.id)
}