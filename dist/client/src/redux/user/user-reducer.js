"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    currentUser: null
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return Object.assign(Object.assign({}, state), { currentUser: action.payload });
        default:
            return state;
    }
};
exports.default = userReducer;
