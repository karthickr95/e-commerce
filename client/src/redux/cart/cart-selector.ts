import { createSelector } from 'reselect'
import { AppState } from '../store'
import { CartState } from './cart-reducer'

const selectCart = (state: AppState): CartState => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectIsCartPopupHidden = createSelector(
    [selectCart],
    cart => cart.isHidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems
        .reduce((accumulatedQuantity, cartItem) => {
                return accumulatedQuantity + cartItem.quantity
            }
            , 0
        )
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems
        .reduce((accumulatedTotal, cartItem) => {
                return accumulatedTotal + cartItem.quantity * cartItem.product.price
            }
            , 0
        )
)