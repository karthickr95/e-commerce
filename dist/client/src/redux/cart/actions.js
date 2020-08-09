"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearItemFromCartAction = exports.removeItemFromCartAction = exports.addItemToCartAction = exports.toggleCartPopupAction = void 0;
exports.toggleCartPopupAction = () => ({
    type: 'TOGGLE_CART_POPUP'
});
exports.addItemToCartAction = (item) => ({
    type: 'ADD_CART_ITEM',
    payload: item
});
exports.removeItemFromCartAction = (item) => ({
    type: 'REMOVE_CART_ITEM',
    payload: item
});
exports.clearItemFromCartAction = (item) => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
});
