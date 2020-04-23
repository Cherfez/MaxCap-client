import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postBookingThunk } from "../../store/bookings/actions";

import { IoIosMore } from "react-icons/io";

export default function Timeslot(props) {
  console.log("prop timeslot", props);
  const [show, setShow] = useState(false);
  const [extra, setExtra] = useState(0);
  const [extraInputs, setExtraInputs] = useState([]);
  const dispatch = useDispatch();

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
          />
        );
      }
    }

    function handleSubmit(e) {
      e.preventDefault();

      const finalPartners = extraInputs.slice(0, extra);
      console.log(finalPartners);

      const namePartner = finalPartners;
      //timeslotId is not the same as the actual id in the table!
      const timeslotId = props.info.id;
      const gymId = props.info.gymId;

      // console.log("dispatch", namePartner, timeslotId, gymId, userId);
      dispatch(postBookingThunk(namePartner, timeslotId, gymId));
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

  function clickHandle() {
    setShow(!show);
  }

  return (
    <div key={props.info.id}>
      <h4>
        {props.info.startTime} - {props.info.endTime}
      </h4>
      <p>Max Capacity: {props.info.maxCap}</p>
      <p>Spots available: {props.info.maxCap - 2}</p>
      {show && showDetails()}
      <div onClick={clickHandle} key={props.info.id}>
        <IoIosMore />
      </div>
    </div>
  );
}
