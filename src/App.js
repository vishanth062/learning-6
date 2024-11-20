import logo from './logo.svg';
import './App.css';
import Product from './components/product/product';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Checkout from './components/Checkout/Checkout';
import { useSelector } from 'react-redux';


import { BrowserRouter as Router, Routes, Route, Link } from"react-router-dom"



// Add the FontAwesome icon to the library
library.add(faCartShopping);


function App() {

  const change=useSelector((data)=>data.cart)

  return (
    <>
  <Header></Header> 
 
  <Routes>
    <Route path='/' element={<Product url='https://fakestoreapi.com/products/'></Product>}>
    
    </Route>
    <Route path='/Checkout' element={<Checkout/>}>
    
    
    </Route>
  </Routes>
  
  



      
      
    </>
  );
}

export default App;
