import {Component} from 'react'

import axios from "axios"

import {Link} from "react-router-dom"

import {TbHandClick} from "react-icons/tb"


import './index.css'

class DloginForm extends Component {
  state = {
    name : "",
    password : "",
    err : ""
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

  renderUsernameField = () => {
    return (
      <div>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          onChange = {(e) =>(this.setState({name: e.target.value}))}
        />
      </div>
    )
  }

loginSubmit = (event) =>{
  event.preventDefault();
  const {name,password} = this.state;
  console.log({name,password})
  if(name === ""){
    this.setState({err : " * Please enter the Username"})
  }
  else if(password === ""){
    this.setState({err : " * Please enter your Password"})
  }
  else{
      this.storedData()
  }

}

storedData = (event) =>{
  const {history} = this.props;
  const {name,password,err} = this.state;
  const obj = {
      name,
      password
  }
 console.log(obj)
 const url = "http://localhost:5003/doctors/login";
 axios.post(url,obj).then((res) =>{
  console.log(res)
    if(res.data === "successfull"){
         history.replace("/home");
    }
    else if(res.data === "nameInCorrect"){
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
    const {err} = this.state;
    return (
     
      <div className="login-form-container">
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
           <div className="input-container">{this.renderUsernameField()}</div>
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

export default DloginForm
