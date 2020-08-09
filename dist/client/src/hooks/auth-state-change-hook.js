"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFirebaseAuth = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const firebase_utils_1 = require("../firebase/firebase-utils");
const actions_1 = require("../redux/user/actions");
exports.useFirebaseAuth = () => {
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        const unSubscribeListenerForAuth = firebase_utils_1.auth.onAuthStateChanged((userAuth) => __awaiter(void 0, void 0, void 0, function* () {
            if (userAuth != null) {
                const userRef = yield firebase_utils_1.createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    var _a, _b, _c;
                    const user = {
                        id: snapshot.id,
                        createdAt: (_a = snapshot.data()) === null || _a === void 0 ? void 0 : _a.createdAt.toDate(),
                        displayName: (_b = snapshot.data()) === null || _b === void 0 ? void 0 : _b.displayName,
                        email: (_c = snapshot.data()) === null || _c === void 0 ? void 0 : _c.email
                    };
                    dispatch(actions_1.addUserAction(user));
                });
            }
            else {
                dispatch(actions_1.addUserAction(null));
            }
        }));
        return () => {
            unSubscribeListenerForAuth();
        };
    }, []);
};
