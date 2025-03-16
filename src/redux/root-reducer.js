import { combineReducers } from "redux";
import userRedux from "./user/slice";


export default combineReducers({
  user: userRedux,
});