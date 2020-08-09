"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserAction = void 0;
exports.addUserAction = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});
