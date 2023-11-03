import React from "react";
import Form from "react-bootstrap/Form";
import Navigation from "./Navigation";

export default function BookingForm() {
  return (
    <div>
      <Navigation />
      <Form.Select aria-label="Default select example">
        <option>Slect the illness your are suffering</option>
        <option value="fever">Fever</option>
        <option value="cold">Cold</option>
        <option value="ent">ENT</option>
        <option value="heart">Heart Problem</option>
        <option value="skin">Skin problem</option>
      </Form.Select>
    </div>
  );
}
