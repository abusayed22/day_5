import allReducers from "./allReducers";
import { combineReducers } from "redux";

const Reducers = combineReducers({
    reducers:allReducers
})
export default Reducers;