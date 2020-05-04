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
  let history = useHistory();

  const onExtraNameChange = (i, name) => {
    const newExtraInputs = extraInputs.slice();
    newExtraInputs[i] = name;
    setExtraInputs(newExtraInputs);
  };

  const showDetails = () => {
    let inputs = [];
    const numberExtra = parseInt(extra);

    if (numberExtra > 0) {
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

    function handleSubmit(e) {
      e.preventDefault();

      const finalPartners = extraInputs.slice(0, extra);
      // console.log(finalPartners);

      const namePartner = finalPartners;
      const timeslotId = id;

      // console.log("dispatch", namePartner, timeslotId, gymId);
      dispatch(postBookingThunk(namePartner, timeslotId, gymId, history));
      setExtra(0);
      setShow(false);
      setExtraInputs([]);
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
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
          {inputs}

          <button type="submit">Book session</button>
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
      <p>Spots available: {maxCap - 2}</p>
      {show && showDetails()}
      <div onClick={() => setShow(!show)} key={id} className="extraBtn">
        <IoIosMore />
      </div>
    </div>
  );
}
