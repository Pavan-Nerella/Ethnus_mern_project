import React from "react";
import Navigation from "../Navigation";
import BookingForm from "../BookingForm";
import BookDoctor from "../BookDoctor";


export default function appointment(props) {
  return <div>
    <Navigation updateMode={props.update} modeValue={props.modeValue} />
    <BookingForm modeOut={props.modeValue} />
  </div>;
}
