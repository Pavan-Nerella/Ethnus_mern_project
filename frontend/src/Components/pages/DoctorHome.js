import React,{Component} from 'react'
import DocNavigation from '../DocNavigation'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

class DoctorHome extends Component {
  //sending token information and bringing user details.
  render(){
      const demail = localStorage.getItem("demail");
      return (
        <div>
          {
            demail===""&&<Navigate to="/dlogin"/>
          }
        <DocNavigation updateMode={this.props.update} modeValue={this.props.modeValue} Data={this.props.Data} islogout={this.islogout}/>
        </div>
      )
    }
  }
 

export default DoctorHome
