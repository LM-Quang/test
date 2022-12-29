import { combineReducers, legacy_createStore } from "redux";
import { testReducer } from "./Reducers/testReducer.js";
const rootReducer = combineReducers({
   // Place child reducers here
   testReducer,
});

const store = legacy_createStore(rootReducer);
export default store;
