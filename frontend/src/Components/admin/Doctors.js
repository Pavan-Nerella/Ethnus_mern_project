import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'


function Doctors() {
  const [doctor,setDoctor] = useState([]);

  useEffect(()=>{
   axios.get('http://localhost:5003/admin/getAllDoctors')
   .then(users => setDoctor(users.data))
   .catch(err => console.log(err))
  },[])
  return (
    <div>
      <table class=" table atable">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope = "col"> Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            doctor.map(doc =>{
              return(
                <tr>
                    <td>{doc.name}</td>
                    <td>{doc.email}</td>
                    <td>
                  <button onClick={() =>{
                        let url = "http://localhost:5003/doctors/delete-doctor/";
                        const response =   axios
                           .delete(url + doc._id)
                           .then((res) => {
                             console.log(res)
                             if (res.status === 204) {
                               window.location.reload();
                             } 
                           })
                           .catch((err) => {
                             console.log(err);
                           });
                  }}>
                    delete
                  </button>
                </td>
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
