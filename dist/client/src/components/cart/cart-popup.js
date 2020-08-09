"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const cart_item_1 = __importDefault(require("./cart-item"));
const button_1 = require("../button/button");
const actions_1 = require("../../redux/cart/actions");
const cart_selector_1 = require("../../redux/cart/cart-selector");
const CartPopupContainer = styled_components_1.default.div `
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
const CheckoutButton = styled_components_1.default(button_1.NormalButton) `
  margin-top: auto;
`;
const EmptyMessage = styled_components_1.default.span `
  font-size: 18px;
  margin: 50px auto;
`;
const CartItems = styled_components_1.default.div `
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const CartPopup = (props) => {
    const { history } = props;
    const dispatch = react_redux_1.useDispatch();
    const cartItems = react_redux_1.useSelector(cart_selector_1.selectCartItems);
    return (<CartPopupContainer>
            <CartItems>
                {cartItems.length
        ? cartItems.map(item => <cart_item_1.default key={item.product.id} item={item}/>)
        : <EmptyMessage>Your Cart is empty</EmptyMessage>}
            </CartItems>
            <CheckoutButton onClick={() => {
        dispatch(actions_1.toggleCartPopupAction());
        history.push('/checkout');
    }}>
                GO TO CHECKOUT
            </CheckoutButton>
        </CartPopupContainer>);
};
exports.default = react_router_dom_1.withRouter(CartPopup);
