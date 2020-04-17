import React, { useState } from "react";

import { IoIosMore } from "react-icons/io";

export default function Timeslots() {
  const [show, setShow] = useState(false);
  const [extra, setExtra] = useState(0);
  // console.log("extra", extra);
  const [extraInputs, setExtraInputs] = useState({}); // { 1: "name", 2: "name", ...}
  // console.log("extraInpts", extraInputs);

  const onExtraNameChange = (event) => {
    const fieldName = event.target.name;
    const name = event.target.value;
    const newExtraInputs = { ...extraInputs, [fieldName]: name };
    setExtraInputs(newExtraInputs);
  };

  const showDetails = () => {
    let inputs = [];
    console.log("inputs", inputs);
    const numberExtra = parseInt(extra);

    if (numberExtra > 0) {
      for (let i = 1; i < numberExtra + 1; i++) {
        inputs.push(
          <input
            type="text"
            placeholder="Name partner"
            name={`${i}`}
            value={extraInputs[i]}
            onChange={(e) => onExtraNameChange(e)}
          />
        );
      }
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log("on submit", extraInputs);
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
    <div>
      <h4>10:00 - 12:00</h4>
      <p>Spots available: 2</p>
      {show && showDetails()}
      <div onClick={clickHandle}>
        <IoIosMore />
      </div>
    </div>
  );
}
