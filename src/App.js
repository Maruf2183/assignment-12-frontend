import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import './App.css';
import Apoinment from './Pages/Apointment/MainPage/Apoinment';
import Home from './Pages/Home/Home/Home';
import 'react-calendar/dist/Calendar.css';







function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apoinment' element={<Apoinment/>} />

          

         
         
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
