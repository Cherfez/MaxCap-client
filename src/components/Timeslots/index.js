import React from "react";

import Timeslot from "../Timeslot/index";

export default function Timeslots(props) {
  console.log("props?", props.info);

  return (
    <div>
      {props ? (
        props.info.map((prop) => {
          return <Timeslot info={prop} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
