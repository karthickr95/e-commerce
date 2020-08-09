"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const firebase_utils_1 = require("../../firebase/firebase-utils");
const form_input_1 = __importDefault(require("../form-input/form-input"));
const button_1 = require("../button/button");
const button_2 = require("../button/button");
const SignInContainer = styled_components_1.default.div `
  width: 380px;
  display: flex;
  flex-direction: column;
`;
const SignInTitle = styled_components_1.default.h2 `
  margin: 10px 0;
`;
const ButtonsBarContainer = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
`;
const SignIn = () => {
    const [user, setUser] = react_1.useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const { email, password } = user;
        try {
            yield firebase_utils_1.auth.signInWithEmailAndPassword(email, password);
            setUser({ email: '', password: '' });
        }
        catch (e) {
            console.error(e);
        }
    });
    const handleInputChange = (e) => {
        setUser(Object.assign(Object.assign({}, user), { [e.target.name]: e.target.value }));
    };
    return (<SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <form_input_1.default name='email' type='email' label='Email' required autoComplete='' value={user.email} handleChange={handleInputChange}/>
                <form_input_1.default name='password' type='password' label='Password' required value={user.password} handleChange={handleInputChange}/>
                <ButtonsBarContainer>
                    <button_1.NormalButton type="submit">Sign In</button_1.NormalButton>
                    <button_2.GoogleSignInButton onClick={firebase_utils_1.signInWithGoogle}>Sign in with Google{''}</button_2.GoogleSignInButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>);
};
exports.default = SignIn;
