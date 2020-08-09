"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCartTotalPrice = exports.selectCartItemsCount = exports.selectIsCartPopupHidden = exports.selectCartItems = void 0;
const reselect_1 = require("reselect");
const selectCart = (state) => state.cart;
exports.selectCartItems = reselect_1.createSelector([selectCart], cart => cart.cartItems);
exports.selectIsCartPopupHidden = reselect_1.createSelector([selectCart], cart => cart.isHidden);
exports.selectCartItemsCount = reselect_1.createSelector([exports.selectCartItems], cartItems => cartItems
    .reduce((accumulatedQuantity, cartItem) => {
    return accumulatedQuantity + cartItem.quantity;
}, 0));
exports.selectCartTotalPrice = reselect_1.createSelector([exports.selectCartItems], cartItems => cartItems
    .reduce((accumulatedTotal, cartItem) => {
    return accumulatedTotal + cartItem.quantity * cartItem.product.price;
}, 0));
