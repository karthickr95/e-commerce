"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCurrentUser = void 0;
const reselect_1 = require("reselect");
const selectUser = (state) => state.user;
exports.selectCurrentUser = reselect_1.createSelector([selectUser], user => user.currentUser);
