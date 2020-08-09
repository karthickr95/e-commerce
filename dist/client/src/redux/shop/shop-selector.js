"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsCollectionFetching = exports.selectCollection = exports.selectShopCollectionsForPreview = exports.selectShopCollections = void 0;
const reselect_1 = require("reselect");
const selectShop = (state) => state.shop;
exports.selectShopCollections = reselect_1.createSelector([selectShop], shop => shop.collections);
exports.selectShopCollectionsForPreview = reselect_1.createSelector([exports.selectShopCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : []);
exports.selectCollection = (collectionUrlParam) => reselect_1.createSelector([exports.selectShopCollections], collections => collections ? collections[collectionUrlParam] : null);
exports.selectIsCollectionFetching = reselect_1.createSelector([selectShop], shop => shop.isFetching);
