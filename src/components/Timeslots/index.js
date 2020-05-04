import React from "react";

import Timeslot from "../Timeslot/index";

export default function Timeslots(props) {
  // console.log("props?", props);

  return (
    <div>
      {props ? (
        props.info <= 0 ? (
          <h3>No timeslots</h3>
        ) : (
          props.info.map((prop) => {
            return <Timeslot info={prop} key={prop.id} date={props.date} />;
          })
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
