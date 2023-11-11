import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/pages/Home";
import Appointment from "./Components/pages/appointment";
import AboutUs from "./Components/pages/AboutUs";
import Reports from "./Components/pages/Reports";
import Dsignup from "./Components/pages/Dsignup/index";
import DloginForm from './Components/pages/DloginForm/index';
import PloginForm from './Components/pages/PloginForm/index';

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home update={handleMode} modeValue={mode} />} />
          <Route path="/Booking" element={<Appointment update={handleMode} modeValue={mode} />} />
          <Route path="/About" element={<AboutUs update={handleMode} modeValue={mode} />}/>
          <Route path="/Report"  element={<Reports update={handleMode} modeValue={mode} />} />
          <Route exact path = "/dlogin"  element= {<DloginForm/>} />
          <Route path="/plogin" element={<PloginForm/>} />
          <Route path = "/dsignup" element={<Dsignup/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;