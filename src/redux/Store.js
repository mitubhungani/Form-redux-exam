import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { userReducer } from "./UserReducers";
import { thunk } from "redux-thunk";

const combineAllReducers = combineReducers({
    user:userReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = legacy_createStore(
  combineAllReducers,
  composeEnhancers(applyMiddleware(thunk))
);
