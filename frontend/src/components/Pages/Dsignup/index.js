import {React,Component,} from "react"

import axios from "axios"

import "./index.css"


class DSignUp extends Component{
state = {
    name : "",
    email : "",
    password :123,
    cpassword : 123,
    specality: "",
    dob: new Date(),
    number : 123,
    gender : "",
    err : "",
    iserr: true
}

submitForm = (event) =>{
  event.preventDefault()
  const {password,cpassword,dob,specality,gender,iserr} = this.state;
  console.log(this.props)
  const year = new Date(dob).getYear();
  const year2 = new Date().getYear();
  if(specality === ""){
     this.setState({
      err : "* specality is required input",
     })
  }
  else if(gender === ""){
    this.setState({
      err: "* gender is required",
    })
  }
  else if(password !== cpassword){
    this.setState({
      err : " * password and conform password must be same",
    })

  }
 else if((year2 - year) < 25){
  this.setState({
    err : " * your age must be greater tha 25",
  })
 }
 else{
     this.storedData()
 }
 
}
storedData =  (event) =>{
  const {history} = this.props;
    const {name,email,password,specality,gender} = this.state;
    const obj = {
        name,
        email,
        password,
        specality,
        gender
    }
   console.log(obj)
const url = "http://localhost:5003/doctors/create-doctor";
  axios.post(url,obj).then((res) =>{
    console.log(res)
    if(res.status === 200){
        history.replace("/")
    }
    else{
        Promise.reject()
    }
   })
   .catch((err) =>{
    alert(err)
   })
}
render() {
    console.log(this.props)
    const {err} = this.state;
    return( 
    <div className="main-cont" style={{backgroundImage : "url(../images/doctor_signup_bg2.jpg)"}}>
     <div>
     </div>
    <form onSubmit={this.submitForm} className="form">
        <div className="input-box">
          <label>Full Name <span style={{color:"red"}}> *</span></label>
          <input type="text" placeholder="Enter full name" required onChange={(e) => this.setState({name : e.target.value})} />
        </div>
        <div className="input-box">
          <label>Email Address <span style={{color:"red"}} > *</span> </label>
          <input type="email" placeholder="Enter email address" required  onChange={(e) => this.setState({email : e.target.value})}/>
        </div>
        <div className="input-box">
          <label>Password <span style={{color:"red"}}> *</span></label>
          <input type="password" placeholder="Enter Password" required  onChange={(e) => this.setState({password : e.target.value})}/>
        </div>
        <div className="input-box">
          <label>Conform Password <span style={{color:"red"}}> *</span></label>
          <input type="password" placeholder="Enter conform Password" required onChange={(e) => this.setState({cpassword : e.target.value})} />
        </div>
        <label style={{marginBottom:"10px"}}> Specialty <span style={{color:"red"}}> *</span></label>
        <div className="select-box">
            
              <select style={{background : "transparent"}} onChange={(e) => this.setState({specality : e.target.value})} required>
                <option hidden>Specialty</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Cardiologist</option>
                <option>Endocrinologis</option>
                <option>  Neurologist</option>
                 <option> Psychiatrist</option>
                 <option> Others</option>
               </select>
          </div>
        <div className="column">
          <div className="input-box" style={{marginRight:"20px"}}>
            <label>Phone Number <span style={{color:"red"}}> *</span></label>
            <input type="number" placeholder="Enter phone number" required  onChange={(e) => this.setState({number: e.target.value})}/>
          </div>
          <div className="input-box">
            <label>Birth Date <span style={{color:"red"}}> *</span></label>
            <input type="date" placeholder="Enter birth date" required  onChange={(e) => this.setState({dob: e.target.value})}/>
          </div>
        </div>
        <label > Gender <span style={{color:"red"}}> *</span></label>
        <div className="select-box"> 
            <select style={{background : "transparent"}} onChange={(e) => this.setState({gender : e.target.value})} required>
              <option hidden>Gender</option>
              <option>Male</option>
              <option> Female</option>
              <option> Others</option>
             </select>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input type="address" placeholder="Enter street address" />
        </div>
         <p style={{color:"red"}}>  {err} </p>
        <button type="submit" >Submit</button>
      </form>

 </div>
    )
}
}

export default DSignUp

