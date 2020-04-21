import React, { useEffect } from "react";
// import "./App.css";
import "./styling/mobile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { getUserWithStoredToken } from "./store/user/actions";

import Homepage from "./pages/Homepage";
import Gyms from "./pages/Gyms";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";

import Navigation from "./components/Navigation/index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/gyms" component={Gyms} />
        <Route path="/booking/:id" component={Booking} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
