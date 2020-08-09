"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CartItemContainer = styled_components_1.default.div `
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
const CartItemImage = styled_components_1.default.img `
  width: 30%;
`;
const ItemDetailsContainer = styled_components_1.default.div `
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
const CartItem = (props) => {
    const { product: { imageUrl, name, price }, quantity } = props.item;
    return (<CartItemContainer>
            <CartItemImage src={imageUrl} alt='item'/>
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x &#x20B9;{price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>);
};
exports.default = CartItem;
