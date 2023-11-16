import React from 'react'
import Curosels from "../Curosels";
import Footer from "../Footer";
import Areyoudoctor from "../pages/Areyoudoctor/index";
import Areyoupatient from "../pages/Areyoupatient/index";

function LandingPage(props) {
  
  return (
    <div>
      <Curosels modeValue={props.modeValue} />
      <Areyoudoctor/>
      <Areyoupatient/>
      <Footer />
    </div>
  )
}

export default LandingPage
