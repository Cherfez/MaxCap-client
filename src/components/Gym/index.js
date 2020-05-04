import React from "react";
import { NavLink } from "react-router-dom";

export default function Gym(props) {
  const { id, name, address, phone } = props.gym;

  return (
    <div className="gym" key={id}>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>Phone number: {phone}</p>
      <NavLink to={`/gyms/${id}/booking`}>
        <button>Book session</button>
      </NavLink>
    </div>
  );
}
