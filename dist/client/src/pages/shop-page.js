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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const collection_overview_1 = __importDefault(require("../components/collections-overview/collection-overview"));
const collection_page_1 = __importDefault(require("./collection-page"));
const with_spinner_1 = __importDefault(require("../components/hoc/with-spinner/with-spinner"));
const actions_1 = require("../redux/shop/actions");
const shop_selector_1 = require("../redux/shop/shop-selector");
const ShopPage = ({ match }) => {
    const isCollectionsFetching = react_redux_1.useSelector(shop_selector_1.selectIsCollectionFetching);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        dispatch(actions_1.fetchCollectionsStartAsync());
    }, []);
    const CollectionOverviewWithSpinner = with_spinner_1.default(collection_overview_1.default);
    const CollectionPageWithSpinner = with_spinner_1.default(collection_page_1.default);
    return (<div>
            <react_router_dom_1.Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>}/>
            <react_router_dom_1.Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionsFetching} {...props}/>}/>
        </div>);
};
exports.default = ShopPage;
