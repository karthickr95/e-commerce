"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectDirectorySections = void 0;
const reselect_1 = require("reselect");
const selectDirectory = (state) => state.directory;
exports.selectDirectorySections = reselect_1.createSelector([selectDirectory], directory => directory.sections);
