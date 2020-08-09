"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const styled_components_1 = __importDefault(require("styled-components"));
const shopping_bag_svg_1 = require("../../assets/shopping-bag.svg");
const actions_1 = require("../../redux/cart/actions");
const cart_selector_1 = require("../../redux/cart/cart-selector");
const CartButtonContainer = styled_components_1.default.div `
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ShoppingBagIcon = styled_components_1.default(shopping_bag_svg_1.ReactComponent) `
  width: 24px;
  height: 24px;
`;
const ItemCountContainer = styled_components_1.default.span `
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
const CartButton = () => {
    const dispatch = react_redux_1.useDispatch();
    const cartCount = react_redux_1.useSelector(cart_selector_1.selectCartItemsCount);
    return (<CartButtonContainer onClick={() => dispatch(actions_1.toggleCartPopupAction())}>
            <ShoppingBagIcon />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartButtonContainer>);
};
exports.default = CartButton;
