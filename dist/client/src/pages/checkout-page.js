"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const cart_selector_1 = require("../redux/cart/cart-selector");
const checkout_item_1 = __importDefault(require("../components/checkout-item/checkout-item"));
const stripe_checkout_button_1 = __importDefault(require("../components/stripe-checkout-button/stripe-checkout-button"));
const CheckoutPageContainer = styled_components_1.default.div `
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;
const CheckoutHeaderContainer = styled_components_1.default.div `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const HeaderBlockContainer = styled_components_1.default.div `
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
const TotalContainer = styled_components_1.default.div `
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
const WarningContainer = styled_components_1.default.div `
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
const CheckoutPage = () => {
    const cartItems = react_redux_1.useSelector(cart_selector_1.selectCartItems);
    const cartTotalPrice = react_redux_1.useSelector(cart_selector_1.selectCartTotalPrice);
    return (<CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(item => <checkout_item_1.default key={item.product.id} item={item}/>)}
            <TotalContainer>TOTAL: &#x20B9;{cartTotalPrice}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </WarningContainer>
            <stripe_checkout_button_1.default price={cartTotalPrice}/>
        </CheckoutPageContainer>);
};
exports.default = CheckoutPage;
