// import { reducer as AppRedux } from "../Redux/AppRedux/reducer";
// import { reducer as AuthRedux } from "../Redux/AuthRedux/reducer";
import { reducer as MobileReducer } from "./Mobile/reducer";

import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, legacy_createStore } from "redux";

const rootReducer = combineReducers({ MobileReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
