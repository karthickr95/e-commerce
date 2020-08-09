"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const shop_selector_1 = require("../redux/shop/shop-selector");
const collection_item_1 = __importDefault(require("../components/collection-item/collection-item"));
const CollectionPageContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const CollectionTitle = styled_components_1.default.h2 `
  font-size: 38px;
  margin: 0 auto 30px;
`;
const CollectionItemsContainer = styled_components_1.default.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;
const CollectionPage = ({ match }) => {
    const collection = react_redux_1.useSelector(shop_selector_1.selectCollection(match.params.collectionId));
    return (<CollectionPageContainer>
            <CollectionTitle>{collection === null || collection === void 0 ? void 0 : collection.title}</CollectionTitle>
            <CollectionItemsContainer>
                {collection === null || collection === void 0 ? void 0 : collection.items.map(item => <collection_item_1.default key={item.id} product={item}/>)}
            </CollectionItemsContainer>
        </CollectionPageContainer>);
};
exports.default = CollectionPage;
