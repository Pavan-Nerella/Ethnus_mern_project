import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function BookingForm(props) {
  const [ill,setIll] = useState();
  function handleChange(event){
    setIll(event.target.value);  
  }
  return (
    <div style={{minHeight:"30vh",padding:"20px",backgroundColor:props.modeOut?"grey":"lightblue"}}>
    <h1>{ill}</h1>
    <p style={{fontSize:"30px",textDecorationStyle:"solid",color:props.modeOut?"white":"black"}}>Select the ill you are suffering.</p>
    <Form data-bs-theme={props.modeOut ? "dark" : "light"}>
      <Form.Select value={ill} onChange={handleChange} htmlSize="5">
        <option value="fever">Fever</option>
        <option value="cold">Cold</option>
        <option value="ent">ENT</option>
        <option value="heart">Heart Problem</option>
        <option value="skin">Skin problem</option>
        <option value="thyroid">THYROID</option>
        <option value="lungs">Lung problem</option>
        <option value="hair">Hair Fall</option>
        <option value="head">Headache</option>
        <option value="lungs">Lung problem</option>
        <option value="hair">Hair Fall</option>
      </Form.Select>
    </Form>
    </div>
  );
}
