import { combineReducers } from "redux";
import sessionReducer from "./session/sessionSlice";

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
