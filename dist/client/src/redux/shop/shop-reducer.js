"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    isFetching: false,
    collections: null,
    errorMessage: undefined
};
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COLLECTIONS_START':
            return Object.assign(Object.assign({}, state), { isFetching: true });
        case 'FETCH_COLLECTIONS_SUCCESS':
            return Object.assign(Object.assign({}, state), { isFetching: false, collections: action.payload });
        case 'FETCH_COLLECTIONS_FAILURE':
            return Object.assign(Object.assign({}, state), { isFetching: false, errorMessage: action.payload });
        default:
            return state;
    }
};
exports.default = shopReducer;
