import {BrowserRouter,Switch,Route} from "react-router-dom"

import Dsignup from "./components/Pages/Dsignup";


import DloginForm from './components/Pages/DloginForm';

import PloginForm from './components/Pages/PloginForm';

import './App.css';

function App() {
  return (
     <BrowserRouter>
     <Switch>
     <Route exact path = "/"  component= {DloginForm}/>
        <Route exact path="/plogin" component={PloginForm}/>
        <Route exact path="/dsignup"  component={Dsignup} />
     </Switch>
        

    </BrowserRouter>
  );
}

export default App;
