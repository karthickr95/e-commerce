"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const sign_in_1 = __importDefault(require("../components/signin/sign-in"));
const register_1 = __importDefault(require("../components/register/register"));
const SignInAndRegisterContainer = styled_components_1.default.div `
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;
const SignInRegisterPage = () => {
    return (<SignInAndRegisterContainer>
            <sign_in_1.default />
            <register_1.default />
        </SignInAndRegisterContainer>);
};
exports.default = SignInRegisterPage;
