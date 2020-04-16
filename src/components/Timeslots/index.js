import React, { useState } from "react";

import { IoIosMore } from "react-icons/io";

export default function Timeslots() {
  const [show, setShow] = useState(false);
  const [extra, setExtra] = useState(0);
  // console.log("extra", extra);

  const showDetails = () => {
    return (
      <div>
        <form>
          <label>Extra climber(s): </label>
          <input
            type="number"
            min="0"
            max="4"
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
          />
          {/* if nr > 0 --> input field for every name */}
          <input type="text" placeholder="Name partner" />
        </form>

        <button>Book session</button>
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
