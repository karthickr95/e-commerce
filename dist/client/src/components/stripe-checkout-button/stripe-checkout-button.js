"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_stripe_checkout_1 = __importDefault(require("react-stripe-checkout"));
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H9TzAIBCK5SdsgKA9KjlcoAlZ0brByReiPX4fuVmhe4lr2CMzfV4KbFFdLC48GStZtg9y28SS5GOnKsWZ8HBrTf00MCc54e0O';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    const rupeeSymbol = new Intl.NumberFormat('en-IN', {
        currency: 'INR',
        style: 'currency'
    }).format(price);
    return (<react_stripe_checkout_1.default label='Pay Now' name='E-Commerce POC' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' currency='INR' description={`Your total is ${rupeeSymbol}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}/>);
};
exports.default = StripeCheckoutButton;
