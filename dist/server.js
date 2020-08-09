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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV !== 'production') {
    Promise.resolve().then(() => __importStar(require('dotenv'))).then((dotenv) => dotenv.config());
}
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(body_parser_1.default);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
    console.log('Press CTRL-C to stop\n');
});
app.post('./payment', (req, res) => {
});
