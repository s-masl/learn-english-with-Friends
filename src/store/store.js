import {combineReducers, createStore} from "redux";
import learn from "./reducers/learn";
import settings from "./reducers/settings";


const reducers = combineReducers({learn, settings})

const store = createStore(reducers)

export default store;