import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Products from './Component/product';
import Login from './Component/login';
import Warning from './Component/warning';
// import "./App.css"
function App() {
  return (
    <> 
    <Router>

   
    <div className="App">
    <Products/>

{/* 
     <Routes>
      
    <Route path='/'  element={<Login/>} />
   <Route path='/warning'  element={<Warning/>}/> 
    
    </Routes> */}
      
    </div>
    </Router>
    </>
  );
}

export default App;
