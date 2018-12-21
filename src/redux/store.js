import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const combinedReducers = combineReducers(reducers);
const store = createStore(combinedReducers);

export default store;
