import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

import { Jumbotron } from "react-bootstrap";

export default function Confirm() {
  const user = useSelector(selectUser);
  // console.log("user", user);
  const { id, bookingId } = useParams();
  // console.log("what is id?", id);
  // console.log("what is bookingId?", bookingId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div id="confirm">
      <Jumbotron fluid>
        <h1>Booking confirmed</h1>
      </Jumbotron>

      <div className="containerr">
        <div id="confirm-booking">
          <h6>Thank you for booking, {user.name}</h6>
          <p>
            We have send you an email with the confirmation of your booking.{" "}
            Please have the confirmation e-mail ready on arrival at the gym.{" "}
            <br />
            Bookings can also be seen on your profile.
          </p>
        </div>

        <div id="confirm-info">
          <h5>Additional info</h5>
          <ul>
            <li>
              Be considerate of other climbers and only book one session a day.
            </li>
            <li>
              Access to the gym is onlyy allowed on the allocated timeslots.
            </li>
            <li>After the session leave the building as quick as possible</li>
            <li>Cancelling sessions is possible through your profile</li>
            <li>
              Can't make the booked session? Let the climbing gym know or cancel
              your booking
            </li>
            <li>For any other questions, please contact your climbing gym.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
