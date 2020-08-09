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
const button_1 = require("../button/button");
const form_input_1 = __importDefault(require("../form-input/form-input"));
const RegisterContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 380px;
`;
const RegisterTitle = styled_components_1.default.h2 `
  margin: 10px 0;
`;
const Register = () => {
    const [registerState, setRegisterState] = react_1.useState({
        confirmPassword: '',
        displayName: '',
        email: '',
        password: ''
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = registerState;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = yield firebase_utils_1.auth.createUserWithEmailAndPassword(email, password);
            yield firebase_utils_1.createUserProfileDocument(user, displayName);
            setRegisterState({
                confirmPassword: "",
                displayName: "",
                email: "",
                password: ""
            });
        }
        catch (e) {
            console.error(e);
        }
    });
    const handleInputChange = (e) => {
        setRegisterState(Object.assign(Object.assign({}, registerState), { [e.target.name]: e.target.value }));
    };
    return (<RegisterContainer>
            <RegisterTitle>I do not have account</RegisterTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <form_input_1.default type='text' name='displayName' required value={registerState.displayName} handleChange={handleInputChange} label='Display Name'/>
                <form_input_1.default type='email' name='email' required value={registerState.email} handleChange={handleInputChange} label='Email'/>
                <form_input_1.default type='password' name='password' required value={registerState.password} handleChange={handleInputChange} label='Password'/>
                <form_input_1.default type='confirmPassword' name='confirmPassword' required value={registerState.confirmPassword} handleChange={handleInputChange} label='Confirm Password'/>
                <button_1.NormalButton type='submit'>Register</button_1.NormalButton>
            </form>
        </RegisterContainer>);
};
exports.default = Register;
