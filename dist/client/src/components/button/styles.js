"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledGoogleSignInButton = exports.StyledInvertedButton = exports.StyledNormalButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonStyle = styled_components_1.default.button `
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
exports.StyledNormalButton = styled_components_1.default(ButtonStyle) `
  background-color: black;
  color: white;
  border: none;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
exports.StyledInvertedButton = styled_components_1.default(ButtonStyle) `
  background-color: black;
  color: white;
  border: none;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
exports.StyledGoogleSignInButton = styled_components_1.default(ButtonStyle) `
  background-color: black;
  color: white;
  border: none;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
