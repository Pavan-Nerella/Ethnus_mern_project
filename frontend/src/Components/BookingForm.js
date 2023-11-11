import React, {Component} from "react";
import BookDoctor from "./BookDoctor";
import Form from "react-bootstrap/Form";

 class BookingForm extends Component {
  state = {
    illness : "",
    doctorsObj : []
  }
  changedSelect = (event) => {
   const {doctorsObj} = this.state;
    const updateDoctorsObj = doctorsObj.filter((doc) =>(
      doc.specality === "Dermatologist"
    ))
    this.setState({illness:event.target.value,doctorsObj:updateDoctorsObj});
  }
  componentDidMount(){
    this.getApi()
  }
  getApi = async () =>{
    const response = await fetch("http://localhost:5003/doctors");
    const data = await response.json();
    this.setState({
      doctorsObj : data
    },this.getUpdatedList)
  }
  render(){
    let {illness,doctorsObj} = this.state;
    console.log(doctorsObj)
    return (
      <div style={{minHeight:"30vh",padding:"20px",backgroundColor:this.props.modeOut?"grey":"lightblue"}}>
      <p style={{fontSize:"30px",textDecorationStyle:"solid",color:this.props.modeOut?"white":"black"}}>Select the ill you are suffering.</p>
      <Form data-bs-theme={this.props.modeOut ? "dark" : "light"}>
        <Form.Select htmlSize="5" onChange={this.changedSelect}>
          <option value="fever">Fever</option>
          <option value="cold">Cold</option>
          <option value="ent">ENT</option>
          <option value="heart">Heart Problem</option>
          <option value="skin">Skin problem</option>
          <option value="thyroid">THYROID</option>
          <option value="lungs">Lung problem</option>
          <option value="hair">Hair Fall</option>
          <option value="head">Headache</option>
          <option value="lungs"></option>
          <option value="hair">Hair Fall</option>
        </Form.Select>
      </Form>
      <h2> Doctors are available:</h2>
      {
        doctorsObj.map((doctor) =>(
          <BookDoctor modeOut={this.props.modeOut} doctor = {doctor}/> 
        ))
      }
      
      </div>
    );

  }
  
}


export default BookingForm