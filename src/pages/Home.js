import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Curosels from "../Components/Curosels";
import Footer from "../Components/Footer";

export default function Home() {
  const [mode, setMode] = useState(false);
  function handleMode(event) {
    setMode((prevValue) => {
      if (prevValue === false) {
        return true;
      } else {
        return false;
      }
    });
    event.preventDefault();
  }
  return (
    <div>
      <Navigation updateMode={handleMode} modeValue={mode} />
      <Curosels modeValue={mode} />
      <Footer />
    </div>
  );
}
