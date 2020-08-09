"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const collection_item_1 = __importDefault(require("../collection-item/collection-item"));
const CollectionPreviewContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const TitleContainer = styled_components_1.default.h1 `
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
const PreviewContainer = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
`;
const CollectionPreview = ({ title, items, match, history, routeName }) => {
    return (<CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
            <PreviewContainer>
                {items
        .filter((item, index) => index < 4)
        .map(item => (<collection_item_1.default key={item.id} product={item}/>))}
            </PreviewContainer>
        </CollectionPreviewContainer>);
};
exports.default = CollectionPreview;
