import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Timeslots from "../components/Timeslots/index";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import DatePicker from "react-datepicker";
import { formatDistance, subDays } from "date-fns";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const { id } = useParams();
  // console.log("what is id?", id);
  const [startDate, setStartDate] = useState(null);

  let times;
  if (startDate) {
    times = <Timeslots />;
  }

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

        <DatePicker
          dateFormat="eeeeeee dd-MM-yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          maxDate={addDays(new Date(), 7)}
          placeholderText="Select a date"
        />

        {times}
      </Container>
    </div>
  );
}
