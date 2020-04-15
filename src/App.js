import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Gyms from "./pages/Gyms";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

import Navigation from "./components/Navigation/index";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/gyms" component={Gyms} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
