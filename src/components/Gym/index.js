import React from "react";
import { NavLink } from "react-router-dom";

export default function Gym(props) {
  return (
    <div>
      <div>
        <h3>{props.gym.name}</h3>
        <p>{props.gym.address}</p>
        <p>{props.gym.phone}</p>
        <NavLink to={`/booking/${props.gym.id}`}>
          <button>Book session</button>
        </NavLink>
      </div>
    </div>
  );
}
