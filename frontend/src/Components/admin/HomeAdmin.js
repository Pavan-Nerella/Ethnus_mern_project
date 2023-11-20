import React from "react";
import AdminNav from './AdminNav'
import axios from 'axios';
import '../pages/Body.css'
import Footer from '../Footer'


export default function HomeAdmin(props) {
  
  return (
    <div>
      <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
      <div className = "sec">
        <div className="head-con">
        <p className="pass">  patients play a crucial role in the hospital management system, and their active participation is essential for effective healthcare delivery. Here are some key actions and responsibilities that patients should consider within a hospital management system</p>
        </div>
        <div>
        <img src ="/images/hero-img01.png" alt ="my_imag" height="100%" width="200px"/>
        </div>
    </div>
    <Footer />
    </div>
  );
}
