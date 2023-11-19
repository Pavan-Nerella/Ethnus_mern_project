import React from "react";
import AdminNav from './AdminNav'
import axios from 'axios';


export default function HomeAdmin(props) {
  
  return (
    <div>
      <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
    </div>
  );
}
