import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Home from "./Components/pages/Home";
import Appointment from "./Components/pages/appointment";
import AboutUs from "./Components/pages/AboutUs";
import Reports from "./Components/pages/Reports";
import Dsignup from "./Components/pages/Dsignup/index";
import DloginForm from './Components/pages/DloginForm/index';
import PloginForm from './Components/pages/PloginForm/index';
import PsignupForm from './Components/pages/PsignupForm/index';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import PublicRoute from "./Components/PublicRoute";
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import LandingPage from "./Components/pages/LandingPage";
import DoctorHome from "./Components/pages/DoctorHome";

function App() {
  //enabling the mode
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

  //get user
  const [data,setData] = useState({fname:"",email:""});
  const getUser = async() =>{
    try{
      const response = await axios.post('http://localhost:5003/user/getUserData',
      {token : localStorage.getItem('token')},
      {headers:
        {Authorization: `Bearer ${localStorage.getItem('token')}`}
      }
      )
      console.log(response.data);
      if(response.data.success){
        setData(
          { fname:response.data.data.fname,
            email: response.data.data.email
          }
        )
      }else{
        <Navigate to='/plogin' />
        localStorage.clear();
      }
    }catch(error){
      console.log(error);
      localStorage.clear();
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <LandingPage update={handleMode} modeValue={mode}/>
          }/>
          <Route path="/userHome" element={
            <ProtectedRoutes>
              <Home update={handleMode} modeValue={mode} handleData={getUser} Data={data} />
            </ProtectedRoutes>
          } />
          <Route path="/Booking" element={<Appointment update={handleMode} modeValue={mode} Data={data} />} />
          <Route path="/About" element={<AboutUs update={handleMode} modeValue={mode} Data={data} />}/>
          <Route path="/Report"  element={<Reports update={handleMode} modeValue={mode} Data={data} />} />
          <Route exact path = "/dlogin"  element= {<DloginForm/>} />
          <Route path = "/dsignup" element={<Dsignup/>} />
          <Route path="/plogin" element={
            <PublicRoute>
              <PloginForm/>
            </PublicRoute>
          } />
          <Route path ="/psignup" element={
            <PublicRoute>
              <PsignupForm />
            </PublicRoute>
          } />
          <Route path="/docHome" element={<DoctorHome />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;