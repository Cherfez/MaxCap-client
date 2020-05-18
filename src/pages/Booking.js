import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Timeslots from "../components/Timeslots/index";
import { selectGym } from "../store/gym/selectors";
import { fetchGymById } from "../store/gym/actions";
import Loading from "../components/Loading";

import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";

import Jumbotron from "react-bootstrap/Jumbotron";

export default function Booking() {
  const { id } = useParams();
  // console.log("what is id?", id);
  const dispatch = useDispatch();
  const gymDetails = useSelector(selectGym);
  // console.log("details?", gymDetails);

  useEffect(() => {
    dispatch(fetchGymById(id));
  }, [dispatch, id]);

  const [startDate, setStartDate] = useState("");
  // console.log(startDate);
  const [times, setTimes] = useState(false);

  function checkDate() {
    const selectedDay = startDate.toString().substring(0, 3);
    // console.log("selectedDay", selectedDay);

    const selectedDate = startDate.toString().substring(0, 15);
    // console.log("selectedDate", selectedDate);

    const weekday = gymDetails.timeslots.filter((slot) => {
      return slot.weekday === selectedDay;
    });
    // console.log("weekday", weekday);

    if (weekday) {
      setTimes(<Timeslots info={weekday} date={selectedDate} gymId={id} />);
    }
  }

  return (
    <div>
      {gymDetails ? (
        <div id="booking">
          <Jumbotron fluid>
            <h1>{gymDetails.name}</h1>
          </Jumbotron>
          <div className="containerr">
            <div className="intro-gym">
              <div className="info-gym">
                <p>
                  Openingtimes:{" "}
                  <strong>
                    {parseFloat(gymDetails.openHrs).toFixed(2)} -{" "}
                    {parseFloat(gymDetails.closeHrs).toFixed(2)} hr
                  </strong>
                </p>
                <p>
                  Session time: <strong>2hr</strong>
                </p>
              </div>

              <div className="date">
                <DatePicker
                  dateFormat="eeeeeee dd-MM-yyyy"
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 7)}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setTimes(false);
                  }}
                  placeholderText="Select a date"
                />

                <button onClick={checkDate}>Check</button>
              </div>
            </div>
            {times}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
