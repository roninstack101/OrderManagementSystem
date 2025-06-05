import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';

import Consumer from './Component/Consumer/consumer';
import Customer from './Component/Customer/customer';
import ShopList from './Reusable/Const/ApiExample';
import ConstCustomer from './Reusable/Const/constcustomer';

function App() {
  return (
    <> 
    <Router>

   
    <div className="App">
      <Customer/>
    </div>
    </Router>
    </>
  );
}

export default App;
