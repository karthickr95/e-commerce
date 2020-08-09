"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const user_selector_1 = require("../../redux/user/user-selector");
const cart_selector_1 = require("../../redux/cart/cart-selector");
const crown_svg_1 = require("../../assets/crown.svg");
const cart_button_1 = __importDefault(require("../cart/cart-button"));
const cart_popup_1 = __importDefault(require("../cart/cart-popup"));
const firebase_utils_1 = require("../../firebase/firebase-utils");
const HeaderContainer = styled_components_1.default.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const LogoContainer = styled_components_1.default(react_router_dom_1.Link) `
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const OptionsContainer = styled_components_1.default.div `
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const OptionLink = styled_components_1.default(react_router_dom_1.Link) `
  padding: 10px 15px;
  cursor: pointer;
`;
const Header = () => {
    const currentUser = react_redux_1.useSelector(user_selector_1.selectCurrentUser);
    const isCartPopupHidden = react_redux_1.useSelector(cart_selector_1.selectIsCartPopupHidden);
    const signOutUser = () => {
        firebase_utils_1.auth.signOut();
    };
    return (<HeaderContainer>
            <LogoContainer to='/'>
                <crown_svg_1.ReactComponent className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser
        ? <OptionLink as='div' onClick={signOutUser}>SIGN OUT</OptionLink>
        : <OptionLink to='/signin'>SIGN IN</OptionLink>}
                <cart_button_1.default />
            </OptionsContainer>
            {isCartPopupHidden ? null : <cart_popup_1.default />}
        </HeaderContainer>);
};
exports.default = Header;
