import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import Approvedapt from "./Components/pages/Approvedapt";
import axios from 'axios';
import Pappointment from "./Components/pages/Pappointement";
import LandingPage from "./Components/pages/LandingPage";
import DoctorHome from "./Components/pages/DoctorHome";
import Doctoruser from "./Components/pages/Doctoruser";
import ProtectedDocRoute from "./Components/ProtectedDocRoute";
import PublicDocRoutes from "./Components/publicDocroute";
function App() {
  const token = localStorage.getItem("token");
  console.log(token)
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
  //get user data
  const [data,setData] = useState({fname:"",email:"",});
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
            email: response.data.data.email,
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

  //get doctor data
  const [docdata,setDocData] = useState({name:"",email:""});
  const getDoc = async() =>{
    try{
      const response = await axios.post('http://localhost:5003/doctors/getUserData',
      {token : localStorage.getItem('token')},
      {headers:
        {Authorization: `Bearer ${localStorage.getItem('token')}`}
      }
      )
      console.log(response.data);
      if(response.data.success){
        setDocData(
          { name:response.data.data.name,
            email: response.data.data.email
          }
        )
      }else{
        <Navigate to='/dlogin' />
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
          <Route path="/pappointtment" element={<Pappointment update={handleMode} modeValue={mode} Data={data} />} />
          <Route path="/About" element={<AboutUs update={handleMode} modeValue={mode} Data={data} />}/>
          <Route path="/Report"  element={<Reports update={handleMode} modeValue={mode} Data={data} />} />
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
          <Route path = "/dlogin"  element= {
            <PublicDocRoutes>
                   <DloginForm/>
            </PublicDocRoutes>
             
          } />
          <Route path = "/dsignup" element={
            <PublicDocRoutes>
              <Dsignup/>
            </PublicDocRoutes>
          } />
          
          <Route path="/docHome" element={ 
                <ProtectedDocRoute>
                  <DoctorHome handleData={getDoc} Data={docdata} update={handleMode} modeValue={mode}/>
                </ProtectedDocRoute>
               
          } />
            <Route path="/doctoruser" element={ 
              <ProtectedDocRoute>
                <Doctoruser handleData={getDoc} Data={docdata} update={handleMode} modeValue={mode}/>
              </ProtectedDocRoute>
             
          } />
            <Route path="/approved" element={ 
              <ProtectedDocRoute>
                <Approvedapt handleData={getDoc} Data={docdata} update={handleMode} modeValue={mode}/>
              </ProtectedDocRoute>
             
          } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;