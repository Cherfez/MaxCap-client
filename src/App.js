import React, { useEffect } from "react";
// import "./App.css";
import "./styling/mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { getUserWithStoredToken } from "./store/user/actions";
import { useDispatch } from "react-redux";

import Homepage from "./pages/Homepage";
import Gyms from "./pages/Gyms";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Confirm from "./pages/Confirm";

import Navigation from "./components/Navigation/index";
import MessageBox from "./components/MessageBox";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/gyms" component={Gyms} />
        <Route exact path="/gyms/:id/booking" component={Booking} />
        {/* <Route path="/booking/:id" component={Booking} /> */}
        <Route path="/gyms/:id/booking/:bookingId" component={Confirm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
