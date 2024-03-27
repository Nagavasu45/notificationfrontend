
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notifi from './Notifi';
import Notifydetails from './Notifydetails';
import Datacompo from './Datacompo';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Datacompo>
     <Routes>
      <Route path='/' element={<Notifi />}/>
      <Route path="/Notifydetails" element={<Notifydetails />}/>
     </Routes>
     </Datacompo>
      </BrowserRouter>
    </div>
  );
}

export default App;
