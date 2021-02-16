import React from "react";
import { useSelector } from "react-redux";

import Timeslot from "../Timeslot/index";
import { selectGymTimeslots } from "../../store/gym/selectors";
import { selectGymBookings } from "../../store/gym/selectors";

export default function Timeslots(props) {
  // console.log("props?", props);
  const selectedGymTimeslots = useSelector(selectGymTimeslots);
  // console.log("select", selectedGymTimeslots);
  const selectedGymBookings = useSelector(selectGymBookings);
  // console.log("select booking", selectedGymBookings);

  const selectedGymDay = selectedGymTimeslots.filter(
    (q) => q.weekday === props.date.substring(0, 3)
  );
  // console.log("sele", selectedGymDay);

  function climbersInSlot(param) {
    const sameTimeslotId = selectedGymBookings.filter(
      (a) => a.timeslotId === param && a.pickedDate === props.date
    );

    const countClimbersInSlot = sameTimeslotId.map(
      (r) => r.namePartner.length + 1
    );
    // console.log("countClimbersInSlot", countClimbersInSlot);

    const totalClimbersInSlot = countClimbersInSlot.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    // console.log("totalClimbersInSlot", totalClimbersInSlot);
    return totalClimbersInSlot;
  }

  const counting = (id) => {
    const thisSlotWithAmount = climbersInSlot(id);

    for (let i = 0; i < selectedGymDay.length; i++) {
      return selectedGymDay[i].maxCap - thisSlotWithAmount;
    }
  };

  return (
    <div className="timeslots">
      {props ? (
        props.info <= 0 ? (
          <h3>No timeslots</h3>
        ) : (
          props.info.map((prop) => {
            return (
              <Timeslot
                info={prop}
                key={prop.id}
                date={props.date}
                spotsLeft={counting(prop.id)}
              />
            );
          })
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
