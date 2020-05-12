import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../store/user/selectors";
import Loading from "../components/Loading";
import { deleteBooking } from "../store/bookings/actions";
import { fetchBookings } from "../store/bookings/actions";
import { selectBookings } from "../store/bookings/selectors";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile() {
  const user = useSelector(selectUser);
  // console.log("user", user);
  const bookings = useSelector(selectBookings);
  // console.log("bookings", bookings);
  const userId = user.id;
  // console.log(userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings(userId));
  }, [dispatch, userId]);

  if (!bookings) {
    return <Loading />;
  }

  const sortedDates = bookings.sort((a, b) => {
    return (
      new Date(a.pickedDate.substring(4, 15)) -
      new Date(b.pickedDate.substring(4, 15))
    );
  });

  function onDelete(id) {
    console.log("deleting", id);
    dispatch(deleteBooking(id));
  }

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
          <p>certified belayer: {user.isBelayer ? "true" : "Sorry, dunno"}</p>
        </div>

        <h3>Your Bookings</h3>
        <div className="allBookings">
          {bookings ? (
            bookings.map((booking) => {
              let names;
              if (booking.namePartner.length > 0) {
                names = (
                  <p>
                    <strong>Name(s):</strong> {booking.namePartner.join(", ")}
                  </p>
                );
              } else {
                names = <p style={{ height: "32px" }}></p>;
              }
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
                  {names}

                  <button onClick={() => onDelete(booking.id)}>
                    Cancel booking
                  </button>
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
