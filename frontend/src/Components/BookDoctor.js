import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function BookDoctor(props) {
  return (
    <div style={{padding:"25px",backgroundColor:props.modeOut?"grey":"white"}}>
    <h2 style={{color:props.modeOut?"white":"black"}}>You can Book the doctor on your wish.</h2>
    <Table bordered hover  striped="columns" variant={props.modeOut?"dark":"light"} >
      <tbody>
        <tr>
          <td>Image</td>
          <td>Details</td>
        </tr>
        <tr>
          <td style={{width:"20%"}}>
          <img src='https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg' alt='doctor' style={{height:'150px',width:'150px'}}/>
          </td>
          <td>
            <Table hover variant={props.modeOut?"dark":"light"}>
              <tr>
                <td>Name</td>
                <td>Pavan</td>
              </tr>
              <tr>
                <td>Speciality</td>
                <td>Cardioligist</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button type="submit" >Book Now</Button>
                </td>
              </tr>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
