import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";
import Loading from "../components/Loading";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile() {
  const user = useSelector(selectUser);
  console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  if (!user.bookings) {
    return <Loading />;
  }

  const sortedDates = user.bookings.sort((a, b) => {
    return (
      new Date(a.pickedDate.substring(4, 15)) -
      new Date(b.pickedDate.substring(4, 15))
    );
  });

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
          <p>certified: {user.isBelayer ? "true" : "Sorry, dunno"}</p>
        </div>

        <div>
          <h2>Bookings</h2>
          {user.bookings ? (
            user.bookings.map((booking) => {
              return (
                <div className="userBooking" key={booking.id}>
                  <p>
                    <strong>Gym:</strong> {booking.gym.name}{" "}
                  </p>
                  <p>
                    <strong>Date: </strong>
                    {booking.pickedDate}{" "}
                  </p>
                  <p>
                    <strong>Timeslot:</strong>{" "}
                    {parseFloat(booking.timeslot.startTime).toFixed(2)} -{" "}
                    {parseFloat(booking.timeslot.endTime).toFixed(2)} hr
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
