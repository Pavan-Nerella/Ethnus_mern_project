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
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import LandingPage from "./Components/pages/LandingPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import PublicRoute from "./Components/PublicRoute";
import DoctorHome from "./Components/pages/DoctorHome";
import Contactus from './Components/pages/contactus'
import Allusers from "./Components/admin/Users";
import Review from "./Components/admin/Review";
import AdminLogin from "./Components/admin/Login";
import AdminHome from "./Components/admin/HomeAdmin";
import Alldoctors from "./Components/admin/Doctors"
import AdminPR from "./Components/admin/PublicRouteAdmin"
import AdminProtR from "./Components/admin/ProtectedadminRoute";
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

  //get user data
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
          { name:response.data.data.fname,
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
              <DloginForm/>
          } />
          <Route path = "/dsignup" element={
              <Dsignup/>
          } />
          
          <Route path="/docHome" element={
            <ProtectedRoutes>
            <DoctorHome handleData={getDoc} Data={docdata}/>
            </ProtectedRoutes>
          } update={handleMode} modeValue={mode}/>
          <Route path="/alogin" element={
            <AdminPR>
            <AdminLogin />
            </AdminPR>
          } />
          <Route path="/adminHome" element={
            <AdminProtR>
            <AdminHome />
            </AdminProtR>
          }/>
          <Route path="/fbform" element={
            <Contactus />
          } />
          <Route path="/allusers" element={
            <Allusers />
          } />
          <Route path="/alldoctors" element={
            <Alldoctors/>
          } />
          <Route path="/feedback" element={
            < Review/>
          } />


        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;