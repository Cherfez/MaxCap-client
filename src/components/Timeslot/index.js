import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { postBookingThunk } from "../../store/bookings/actions";

import { IoIosMore } from "react-icons/io";

export default function Timeslot(props) {
  // console.log("prop timeslot", props);
  const { id, gymId, startTime, endTime, maxCap } = props.info;
  const [show, setShow] = useState(false);
  const [extra, setExtra] = useState(0);
  const [extraInputs, setExtraInputs] = useState([]);
  const dispatch = useDispatch();
  // console.log("book", book);
  const history = useHistory();

  const onExtraNameChange = (i, name) => {
    const newExtraInputs = extraInputs.slice();
    newExtraInputs[i] = name;
    setExtraInputs(newExtraInputs);
  };

  const showDetails = () => {
    let inputs = [];
    const numberExtra = parseInt(extra);

    if (numberExtra > 0 && numberExtra <= props.spotsLeft - 1) {
      for (let i = 0; i < numberExtra; i++) {
        inputs.push(
          <input
            type="text"
            placeholder="Name partner"
            key={[i]}
            value={extraInputs[i]}
            onChange={(e) => onExtraNameChange(i, e.target.value)}
            className="extraClimbers"
          />
        );
      }
    }

    let extraClimbers;
    if (props.spotsLeft <= 1) {
      extraClimbers = <div></div>;
    } else {
      extraClimbers = (
        <div>
          <label>Extra climber(s): </label>
          <input
            type="number"
            min="0"
            max="3"
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
          />
        </div>
      );
    }

    function handleSubmit(e) {
      e.preventDefault();

      const finalPartners = extraInputs.slice(0, extra);
      // console.log(finalPartners);

      const namePartner = finalPartners;
      const timeslotId = id;
      const pickedDate = props.date;

      // console.log("dispatch", namePartner, timeslotId, gymId);
      dispatch(
        postBookingThunk(namePartner, timeslotId, gymId, pickedDate, history)
      );
      setExtra(0);
      setShow(false);
      setExtraInputs([]);
    }

    let button;
    if (props.spotsLeft <= 0) {
      button = (
        <button type="submit" disabled>
          No spots left
        </button>
      );
    } else {
      button = <button type="submit">Book session</button>;
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {extraClimbers}
          {inputs}

          {button}
        </form>
      </div>
    );
  };

  return (
    <div key={id} className="timeslot">
      <h4>
        {parseFloat(startTime).toFixed(2)} - {parseFloat(endTime).toFixed(2)}
      </h4>
      <p>Max Capacity: {maxCap}</p>
      <p>Spots available: {props.spotsLeft}</p>
      {show && showDetails()}
      <div onClick={() => setShow(!show)} key={id} className="extraBtn">
        <IoIosMore />
      </div>
    </div>
  );
}
