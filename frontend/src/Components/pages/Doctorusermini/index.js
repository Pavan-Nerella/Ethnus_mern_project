import React, {Component} from 'react';
import axios from 'axios';
import { MdOutlinePendingActions } from "react-icons/md";
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class Doctorusermini extends Component{
  state = {
    iscancel : false,
    naprrove : ""
  }
  cancel = () =>{
    console.log("hi")
    this.setState({
      ispopup : true
    })
  }
  submit = (event) =>{
    const {doc} = this.props;
    const {naprrove} = this.state;
    const obj = {napprovedreason : naprrove,status : "Not Approved"}
    const url = "http://localhost:5003/book/update-doctorbooked/" + doc._id;
    axios
      .put(url, obj)
      .then((res) => {
       console.log(res)
        if (res.status === 200) {
          alert("doctor updated");
        } 
      })
      .catch((err) => {
        console.log(err);
      });
      event.preventDefault()
    this.setState({
      iscancel : true
    })
  }
  booked = () =>{
    const {doc} = this.props;
    const obj = {doctorapproved : true,status : "Doctor approved"}
    const url = "http://localhost:5003/book/update-doctorbooked/" + doc._id;
    axios
      .put(url, obj)
      .then((res) => {
       console.log(res)
        if (res.status === 200) {
          alert("doctor updated");
        } 
      })
      .catch((err) => {
        console.log(err);
      });

      window.location.reload();
  }
    render(){
        const {doc} = this.props;
        const {iscancel} = this.state;
        return(
    <div style={{padding:"25px"}}>
      <Table bordered hover  striped="columns" variant={this.props.modeOut?"dark":"light"} >
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
              <Table hover variant={this.props.modeOut?"dark":"light"} style={{height:"240px"}}>
                <tr style={{marginTop:"5px"}}>
                  <td>Patient Name:</td>
                  <td style={{fontWeight:"bold"}}>{doc.pname}</td>
                </tr>
                <tr>
                  <td> Contact:</td>
                  <td style={{fontWeight:"bold"}}> {doc.pemail}</td>
                </tr>
                <tr>
                  <td> date:</td>
                  <td style={{fontWeight:"bold"}}> {doc.bookeddate}</td>
                </tr>
                <tr>
                  <td> time:</td>
                  <td style={{fontWeight:"bold"}}> {doc.bookedtime}</td>
                </tr>

                <tr>
                  <td> diease description:</td>
                  <td style={{fontWeight:"bold"}}> {doc.diease}</td>
                </tr>
               
                  {
                     iscancel && 
                     <tr>
                      <td> 
                     <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white",display:"flex",alignItems:"center",width:"200px",justifyContent:"space-between"}}>
                          X Cancel appointment</Button>
                     </td> 
                      </tr> 
                  }
                
                 {
                  !iscancel &&
                  <tr>
                  <td colSpan={2}>  
                <Popup
     modal
     trigger={
      <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white"}}> X Not Approved</Button>
     }
   >
     {close => (
       <>
         <div>
           <form style={{display:"flex",flexDirection:'column'}} onSubmit={this.submit}>
              <label style={{color:"red"}}> Why you not Approved ?</label>
              <textarea rows={5} cols={5} required style={{marginTop:"10px",padding:"10px"}} onChange={(event) =>this.setState({
                naprrove : event.target.value
              })}/>
              <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white"}}> X Not Approved</Button>
           </form>
         </div>
       </>
     )}
   </Popup>
         </td>
                  <td colSpan={2}>
                    <Button type="submit"   style={{marginTop:"20px",backgroundColor:"blue",border:"0px",color:"white",display:"flex",alignItems:"center",width:"200px",justifyContent:"space-between"}} onClick = {this.booked}>
                        {<img src="./images/tick.png" style={{width:"30px"}}/>} Approve appointment</Button>
                  </td>
                  </tr>
                 }
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
    }
}

export default Doctorusermini