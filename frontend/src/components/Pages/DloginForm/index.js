import {Component} from 'react'

import axios from "axios"

import { Navigate } from 'react-router-dom'
import {Link} from "react-router-dom"

import {TbHandClick} from "react-icons/tb"


import './index.css'

class Areyoudoctor extends Component {
  state = {
    email : "",
    password : "",
    err : "",
    user : false
  }

  renderPasswordField = () => {
    return (
      <div>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          onChange = {(e) =>(this.setState({password : e.target.value}))}
        />
      </div>
    )
  }

  renderEmailField = () => {
    return (
      <div>
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          id="username"
          className="username-input-filed"
          onChange = {(e) =>(this.setState({email: e.target.value}))}
        />
      </div>
    )
  }

loginSubmit = (event) =>{
  event.preventDefault();
  const {email,password} = this.state;
  console.log({email,password})
  if(email === ""){
    this.setState({err : " * Please enter the Email"})
  }
  else if(password === ""){
    this.setState({err : " * Please enter your Password"})
  }
  else{
      this.storedData()
  }

}

storedData = (event) =>{
  const {email,password} = this.state;
  const obj = {
      email,
      password
  }
 console.log(obj)
 const url = "http://localhost:5003/doctors/login";
 axios.post(url,obj)
 .then((res) =>{
  console.log(res.data.token)
    if(res.data){
      localStorage.setItem("token",res.data.token);
       this.setState({user:true})
    }
    else if(res.data === "email In Correct"){
      this.setState({
        err : " *Username and Password does not match"
      })
    }
    else{
      this.setState({
        err : "* No records there"
      })
    }
 })
 .catch((err) =>{
  alert(err)
 })
}
  render() {
    // console.log(this.props)
    const {err,user} = this.state;
    return (
    

      <div className="login-form-container">
          <div>
         {user && (
          <Navigate to="/docHome" replace={true} />
        )}
         </div>
        <img
          src="../images/logo.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="../images/doctor_login_image.jpg"
          className="login-image"
          alt="website login"
        />
        
        <form className="form-container" onSubmit={this.loginSubmit}>
          <img
            src="../images/logo.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
           <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className='login-button-cont'>
            <Link to = "/dsignup" className="signup-button"> 
              <p>Sigup </p> 
              <TbHandClick/>
            </Link>
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
          <p style={{color:"red"}}> {err} </p>
        </form>
      </div>
    )
  }
}
export default Areyoudoctor

