import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import gyms from "./gym/reducer";
import timeslots from "./timeslots/reducer";
import bookings from "./bookings/reducer";

export default combineReducers({
  appState,
  user,
  gyms,
  timeslots,
  bookings,
});
