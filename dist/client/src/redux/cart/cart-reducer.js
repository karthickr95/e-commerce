"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    isHidden: true,
    cartItems: []
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_POPUP': {
            return Object.assign(Object.assign({}, state), { isHidden: !state.isHidden });
        }
        case 'ADD_CART_ITEM': {
            return Object.assign(Object.assign({}, state), { cartItems: addItemToCart(state.cartItems, action.payload) });
        }
        case 'REMOVE_CART_ITEM': {
            return Object.assign(Object.assign({}, state), { cartItems: removeItemFromCart(state.cartItems, action.payload) });
        }
        case 'CLEAR_ITEM_FROM_CART': {
            return Object.assign(Object.assign({}, state), { cartItems: clearItemFromCart(state.cartItems, action.payload) });
        }
        default:
            return state;
    }
};
exports.default = cartReducer;
const addItemToCart = (oldItems, newItem) => {
    const existingCartItem = oldItems.find(item => item.product.id === newItem.id);
    if (existingCartItem) {
        return oldItems.map(item => {
            if (item.product.id === newItem.id) {
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
    }
    return [...oldItems, {
            product: newItem,
            quantity: 1
        }];
};
const removeItemFromCart = (oldItems, removeItem) => {
    const existingCartItem = oldItems.find(item => item.product.id === removeItem.id);
    if (existingCartItem && existingCartItem.quantity === 1) {
        return oldItems.filter(item => item.product.id !== removeItem.id);
    }
    return oldItems.map(item => {
        if (item.product.id === removeItem.id) {
            return {
                product: item.product,
                quantity: item.quantity - 1
            };
        }
        return item;
    });
};
const clearItemFromCart = (oldItems, clearItem) => {
    return oldItems.filter(item => item.product.id !== clearItem.id);
};
