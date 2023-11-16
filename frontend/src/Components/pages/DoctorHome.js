import React,{useEffect} from 'react'
import DocNavigation from '../DocNavigation'
import axios from 'axios';

function DoctorHome(props) {
  //sending token information and bringing user details.
  const getUserData = async() =>{
    try{
      const response = await axios.post('http://localhost:5003/doctors/getUserData',{},{
        headers:{
          Authorization: "Bearer "+ localStorage.getItem("token"),
        }
      })
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() =>{
    getUserData()
  },[])

  useEffect(() =>{
    props.handleData()
  },[])
  return (
    <div>
    <DocNavigation updateMode={props.update} modeValue={props.modeValue} Data={props.Data}/>
      <p>Doctors Home page</p>
    </div>
  )
}

export default DoctorHome
