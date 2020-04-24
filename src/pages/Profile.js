import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile() {
  const user = useSelector(selectUser);
  // console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div id="profile">
      <Jumbotron fluid>
        <h1>Welcome, {user.name}</h1>
      </Jumbotron>
      <Container>
        <div className="userInfo">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phonenr: {user.phone}</p>
          <p>certified: {user.isBelayer}</p>
        </div>

        <div>
          <h2>Bookings</h2>
          {user.bookings ? (
            user.bookings.map((booking) => {
              return (
                <div className="userBooking">
                  <p>
                    <strong>Gym:</strong> {booking.gymId}{" "}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                  </p>
                  <p>
                    <strong>Timeslot:</strong> {booking.timeslotId}
                  </p>
                  <p>
                    <strong>Climbing partner(s):</strong>{" "}
                    {booking.namePartner.length}
                  </p>
                  <p>
                    <strong>Names:</strong> {booking.namePartner.join(", ")}
                  </p>
                </div>
              );
            })
          ) : (
            <h3>No made bookings</h3>
          )}
        </div>
      </Container>
    </div>
  );
}
