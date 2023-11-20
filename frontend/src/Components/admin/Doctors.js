import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'
import AdminNav from './AdminNav'


function Doctors(props) {
  const [doctor,setDoctor] = useState([]);

  useEffect(()=>{
   axios.get('http://localhost:5003/admin/getAllDoctors')
   .then(users => setDoctor(users.data))
   .catch(err => console.log(err))
  },[])
  return (
    <div>
    <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
      <table class=" table atable">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
            doctor.map(doc =>{
              return(
                <tr>
                    <td>{doc.name}</td>
                    <td>{doc.email}</td>
                </tr>
              )  
            })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Doctors
