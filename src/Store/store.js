import { legacy_createStore } from "redux";
import { reducers } from "./reducers/index";


const store = legacy_createStore(reducers);

export {store}
