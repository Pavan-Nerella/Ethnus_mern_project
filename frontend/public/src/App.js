import {BrowserRouter,Routes,Route} from "react-router-dom"

import DloginForm from './components/DloginForm';

import PloginForm from './components/PloginForm';

import './App.css';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<PloginForm />}/>
        <Route path="/dlogin" element={<DloginForm />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
