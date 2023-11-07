import {Component} from 'react'

import './index.css'

class PloginForm extends Component {
  
  renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
        />
      </>
    )
  }

  renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
        />
      </>
    )
  }

  render() {
    return (
           <div className="login-form-container">
   
        <img
          src="../images/logo.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="../images/patient_login_image.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container">
          <img
            src="../images/logo.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
           <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className='login-button-cont'>
          <div type="submit" className="signup-button">
           <p>Sigup Here </p> 
            <img src ="../images/clickmeicon.png" alt="clickme" className='clickme'/>
          </div>
          <div type="submit" className="login-button">
            Login
          </div>
          </div>
         
        </form>
      </div>
    )
  }
}

export default PloginForm
