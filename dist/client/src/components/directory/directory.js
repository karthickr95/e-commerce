"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const directory_selector_1 = require("../../redux/directory/directory-selector");
const menu_item_1 = __importDefault(require("../menu-item/menu-item"));
const DirectoryMenuContainer = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Directory = () => {
    const directorySections = react_redux_1.useSelector(directory_selector_1.selectDirectorySections);
    return (<DirectoryMenuContainer>
            {directorySections.map(section => <menu_item_1.default key={section.id} {...section}/>)}
        </DirectoryMenuContainer>);
};
exports.default = Directory;
