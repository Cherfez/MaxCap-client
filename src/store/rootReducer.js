import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import gyms from "./gym/reducer";

export default combineReducers({
  appState,
  user,
  gyms,
});
