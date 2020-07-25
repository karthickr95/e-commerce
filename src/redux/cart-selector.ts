import { createSelector } from 'reselect'
import { AppState } from './store'
import { CartState } from './state-types'

const selectCart = (state: AppState): CartState => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
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