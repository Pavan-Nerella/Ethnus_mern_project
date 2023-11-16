import React,{useEffect,useState} from "react";
import Navigation from "../Navigation";
import axios from "axios"
import Curosels from "../Curosels";
import Footer from "../Footer";
import Areyoudoctor from "../pages/Areyoudoctor";
import Areyoupatient  from "../pages/Areyoupatient";
export default function Home(props) {
  //sending token information and bringing user details.
  const getUserData = async() =>{
    try{
      const response = await axios.post('http://localhost:5003/user/getUserData',{},{
        headers:{
          Authorization: "Bearer "+ localStorage.getItem("token"),
        }
      })
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

  //get user
 

  useEffect(() =>{
    getUserData()
  },[])

  useEffect(() =>{
    props.handleData()
  },[])
  return (
    <div>
      <Navigation updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
    </div>
  );
}
