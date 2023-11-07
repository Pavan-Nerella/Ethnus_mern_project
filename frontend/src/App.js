import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Components/pages/Home";
import Register from "./Components/pages/Register";
import Oppointment from "./Components/pages/Oppointment";

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
          <Route path="/register" element={<Register />} />
          <Route path="/Booking" element={<Oppointment update={handleMode} modeValue={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
