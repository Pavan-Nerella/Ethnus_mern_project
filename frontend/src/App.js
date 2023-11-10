
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/pages/Home";
import Appointment from "./Components/pages/appointment";
import AboutUs from "./Components/pages/AboutUs";
import Reports from "./Components/pages/Reports";
import Dsignup from "./components/Pages/Dsignup";
import DloginForm from './components/Pages/DloginForm';
import PloginForm from './components/Pages/PloginForm';
import './App.css';

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
          <Route exact path = "/"  component= {DloginForm}/>
          <Route exact path="/plogin" component={PloginForm}/>
          <Route exact path="/dsignup"  component={Dsignup} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
