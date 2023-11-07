import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/pages/Home";
import Appointment from "./Components/pages/appointment";
import AboutUs from "./Components/pages/AboutUs";
import Reports from "./Components/pages/Reports";

function App() {
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home update={handleMode} modeValue={mode} />} />
          <Route path="/Booking" element={<Appointment update={handleMode} modeValue={mode} />} />
          <Route path="/About" element={<AboutUs update={handleMode} modeValue={mode} />}/>
          <Route path="/Report"  element={<Reports update={handleMode} modeValue={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
