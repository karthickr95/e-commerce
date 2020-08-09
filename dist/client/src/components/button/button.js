"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSignInButton = exports.InvertedButton = exports.NormalButton = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
exports.NormalButton = (props) => (<styles_1.StyledNormalButton {...props}>{props.children}</styles_1.StyledNormalButton>);
exports.InvertedButton = (props) => (<styles_1.StyledInvertedButton {...props}>{props.children}</styles_1.StyledInvertedButton>);
exports.GoogleSignInButton = (props) => (<styles_1.StyledGoogleSignInButton {...props}>{props.children}</styles_1.StyledGoogleSignInButton>);
