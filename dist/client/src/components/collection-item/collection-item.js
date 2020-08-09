"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../../redux/cart/actions");
const button_1 = require("../button/button");
const CollectionItemContainer = styled_components_1.default.div `
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
const AddButton = styled_components_1.default(button_1.InvertedButton) `
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
const BackgroundImage = styled_components_1.default.div `
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
const CollectionFooterContainer = styled_components_1.default.div `
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const NameContainer = styled_components_1.default.span `
  width: 90%;
  margin-bottom: 15px;
`;
const PriceContainer = styled_components_1.default.span `
  width: 10%;
  text-align: right;
`;
const CollectionItem = (props) => {
    const { imageUrl, name, price } = props.product;
    const dispatch = react_redux_1.useDispatch();
    return (<CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(actions_1.addItemToCartAction(props.product))}>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>);
};
exports.default = CollectionItem;
