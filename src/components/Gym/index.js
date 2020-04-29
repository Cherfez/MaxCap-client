import React from "react";
import { NavLink } from "react-router-dom";

export default function Gym(props) {
  return (
    <div className="gym" key={props.gym.id}>
      <h3>{props.gym.name}</h3>
      <p>{props.gym.address}</p>
      <p>Phone number: {props.gym.phone}</p>
      <NavLink to={`/gyms/${props.gym.id}/booking`}>
        <button>Book session</button>
      </NavLink>
    </div>
  );
}
