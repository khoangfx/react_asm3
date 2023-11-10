import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

//tao 1 cai kho chung
const composedEnhancers = composeWithDevTools(); // cau hinh devtool redux
const store = createStore(rootReducer, composedEnhancers);

export default store;
