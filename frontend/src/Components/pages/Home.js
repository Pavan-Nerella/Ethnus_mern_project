import React, { useState } from "react";
import Navigation from "../Navigation";
import Curosels from "../Curosels";
import Footer from "../Footer";

export default function Home(props) {
  // const [mode, setMode] = useState(false);
  // function handleMode(event) {
  //   setMode((prevValue) => {
  //     if (prevValue === false) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   event.preventDefault();
  // }
  return (
    <div>
      <Navigation updateMode={props.update} modeOut={props.modeValue} />
      <Curosels modeValue={props.modeValue} />
      <Footer />
    </div>
  );
}
