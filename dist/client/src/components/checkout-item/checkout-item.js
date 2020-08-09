"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../../redux/cart/actions");
const CheckoutItemContainer = styled_components_1.default.div `
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageContainer = styled_components_1.default.div `
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContainer = styled_components_1.default.span `
  width: 23%;
`;
const QuantityContainer = styled_components_1.default(TextContainer) `
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;
const RemoveButton = styled_components_1.default.div `
  padding-left: 12px;
  cursor: pointer;
`;
const CheckoutItem = (props) => {
    const { product, product: { imageUrl, name, price }, quantity } = props.item;
    const dispatch = react_redux_1.useDispatch();
    return (<CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className='arrow' onClick={() => dispatch(actions_1.removeItemFromCartAction(product))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(actions_1.addItemToCartAction(product))}>
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButton onClick={() => dispatch(actions_1.clearItemFromCartAction(product))}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>);
};
exports.default = CheckoutItem;
