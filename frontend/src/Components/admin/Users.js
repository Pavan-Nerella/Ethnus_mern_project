import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/table.css'

function Users() {
    const [user,setUser] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:5003/admin/getAllUsers')
    .then(users => setUser(users.data))
    .catch(err => console.log(err))
   },[])
  return (
    <div>
      <table class="table  atable">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col"> Delete Button</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map(pat =>{
          return(
            <tr>
                <td>{pat.fname}</td>
                <td>{pat.lname}</td>
                <td>{pat.email}</td>
                <td>
                  <button onClick={() =>{
                        let url = "http://localhost:5003/user/delete-user/";
                        const response =   axios
                           .delete(url + pat._id)
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

export default Users
