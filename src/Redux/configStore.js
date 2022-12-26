import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
   // Place child reducers here
});

export const store = legacy_createStore(rootReducer);
