import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loremReducer } from "./reducer";

export const store = createStore(loremReducer, applyMiddleware(thunk));
