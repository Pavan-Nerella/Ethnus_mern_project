import React from "react";
import Navigation from "../Navigation";
import BookingForm from "../BookingForm";
import BookDoctor from "../BookDoctor";


export default function Oppointment(props) {
  return <div>
    <Navigation updateMode={props.update} modeOut={props.modeValue} />
    <BookingForm modeOut={props.modeValue} />
    <BookDoctor modeOut={props.modeValue}/> 
  </div>;
}
