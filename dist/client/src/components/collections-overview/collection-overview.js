"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const collection_preview_1 = __importDefault(require("../collection-preview/collection-preview"));
const shop_selector_1 = require("../../redux/shop/shop-selector");
const CollectionsOverviewContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const CollectionOverview = (props) => {
    const collections = react_redux_1.useSelector(shop_selector_1.selectShopCollectionsForPreview);
    return (<CollectionsOverviewContainer>
            {collections.map((collection) => (<collection_preview_1.default key={collection.id} title={collection.title} items={collection.items} routeName={collection.routeName} {...props}/>))}
        </CollectionsOverviewContainer>);
};
exports.default = CollectionOverview;
