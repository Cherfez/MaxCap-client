import React, { useState } from "react";

import { IoIosMore } from "react-icons/io";

export default function Timeslots() {
  const [show, setShow] = useState(false);
  const [extra, setExtra] = useState(0);
  // console.log("extra", extra);
  const [extraInputs, setExtraInputs] = useState([]);
  // console.log("extraInpts", extraInputs);

  const onExtraNameChange = (i, name) => {
    const newExtraInputs = extraInputs.slice();
    newExtraInputs[i] = name;
    setExtraInputs(newExtraInputs);
  };

  const showDetails = () => {
    let inputs = [];
    // console.log("inputs", inputs);
    const numberExtra = parseInt(extra);

    if (numberExtra > 0) {
      for (let i = 0; i < numberExtra; i++) {
        inputs.push(
          <input
            type="text"
            placeholder="Name partner"
            value={extraInputs[i]}
            onChange={(e) => onExtraNameChange(i, e.target.value)}
          />
        );
      }
    }

    function handleSubmit(e) {
      e.preventDefault();

      const finalPartners = extraInputs.slice(0, extra);
      // console.log("extra submit", extra);
      console.log(finalPartners);
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
