import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGyms } from "../store/gym/actions";
import { Link } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";

export default function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGyms());
  }, [dispatch]);

  return (
    <div id="homepage">
      <Jumbotron fluid>
        <h1>MaxCap.</h1>
      </Jumbotron>
      <div className="containerr">
        <h2>Welcome climber!</h2>
        <p>
          MaxCap will help you to book a climbing session at your favorite
          climbing gym. We will also help you keep track of your bookings, so
          you will never miss another session. <br />
          If you're ready to make a booking, or just to browse gyms, click the
          button below to see the gyms we are working with. <br />
          <br />
          Happy climbing and stay safe!
        </p>
        <Link to="/gyms">
          <button>Search your gym!</button>
        </Link>
      </div>
    </div>
  );
}
