import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Timeslots from "../components/Timeslots/index";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import DatePicker, { isValid, format } from "react-datepicker";
import { formatDistance, subDays } from "date-fns";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";

import { selectGym } from "../store/gym/selectors";
import { fetchGymById } from "../store/gym/actions";

export default function Booking() {
  const { id } = useParams();
  // console.log("what is id?", id);
  const dispatch = useDispatch();
  const gymDetails = useSelector(selectGym);
  console.log("details?", gymDetails);

  useEffect(() => {
    dispatch(fetchGymById(id));
  }, [dispatch, id]);

  const [startDate, setStartDate] = useState("");
  console.log(startDate);

  let times;
  if (startDate) {
    times = <Timeslots />;
  }

  function checkDate() {
    const selectedDay = startDate.toString().substring(0, 3);
    // console.log("selectedDay", selectedDay);

    const weekday = gymDetails.timeslots.filter((slot) => {
      return slot.weekday === selectedDay;
    });
    // console.log("weekday", weekday);
  }

  return (
    <div>
      {gymDetails ? (
        <div>
          <Jumbotron id="booking">
            <h1>{gymDetails.name}</h1>
          </Jumbotron>
          <Container>
            <div>
              <p>
                Openingtimes:{" "}
                <strong>
                  {gymDetails.openHrs} - {gymDetails.closeHrs} hr
                </strong>
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
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select a date"
            />

            <button onClick={checkDate}>Hi</button>
            {times}
          </Container>
        </div>
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
}
