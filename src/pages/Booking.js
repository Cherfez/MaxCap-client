import React from "react";
import { useParams } from "react-router-dom";

import Timeslots from "../components/Timeslots/index";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Booking() {
  const { id } = useParams();
  // console.log("what is id?", id);

  return (
    <div>
      <Jumbotron id="booking">
        <h1>*Gym Name*</h1>
      </Jumbotron>
      <Container>
        <div>
          <p>
            Openingtimes: <strong>10:00 - 22:30 hr</strong>
          </p>
          <p>
            Session time: <strong>2hr</strong>
          </p>
          <p>
            Max capacity: <strong>10 per slot</strong>
          </p>
        </div>

        <Timeslots />
      </Container>
    </div>
  );
}
