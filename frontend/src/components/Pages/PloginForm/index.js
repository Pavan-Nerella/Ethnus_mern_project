import React,{useState} from 'react'
import '../../styles/user.css'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()

  const [login, setLogin] = useState({ email: "", password: "" });
  function updateLogin(event) {
    const { name, value } = event.target;
    setLogin((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  //sending data into database
  let  submitForm = async (event) =>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:5003/user/login',login)
        if(response.data.success){
          localStorage.setItem("token",response.data.token);
          console.log(`${response.data.message}`)
          {navigate('/userHome')}

        }else{
          console.log(`${response.data.message}`)
        } 
    }catch(error){
      console.log(error);
      console.log("Something went Wrong")
    }
  }   

    return(
        <div className='bg_signin login template d-flex justify-content-center align-items-center vh-100 '>
            <div className='form_container_signin p-5 rounded '>
                <form onSubmit={submitForm}>
                <h3 className='text-center'>Sign in</h3>
                
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter UserID' className='form-control' value={login.email} onChange={updateLogin} name="email"/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='password'>password</label>
                    <input type='password' placeholder='Enter Password' className='form-control' value={login.password} onChange={updateLogin} name="password"/>
                </div>
                <div className='mb-2'>
                    <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                    <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign IN</button>
                </div>

                <p className='text-end mt-2'>
                     <a href=''>Forgot Password?</a> <Link to='/psignup' className='ms-2'>Sign Up</Link>
                </p>
                  </form>
            </div>
        </div>
    )
}
export default Login