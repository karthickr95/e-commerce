"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const directory_1 = __importDefault(require("../components/directory/directory"));
const HomePageContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: normal;
`;
const HomePage = () => (<HomePageContainer>
        <directory_1.default />
    </HomePageContainer>);
exports.default = HomePage;
