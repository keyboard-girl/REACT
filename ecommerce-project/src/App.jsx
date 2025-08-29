import {Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

    const [cart, setCart] = useState([]);

    const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...
      setCart(response.data);
    }

    useEffect(()=>{
      loadCart();
    }, [])


    
    /*useEffect(()=> {

    axios.get("http://localhost:3000/api/cart-items?expand=product") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

    .then(response=>{
        setCart(response.data)
    });*/


//path = "/" es i gual a index
  return (
    <Routes>
      <Route index element= {<HomePage cart={cart} loadCart={loadCart} />} /> 
      <Route path="checkout" element= {<CheckoutPage cart={cart} loadCart={loadCart} />} />   
      <Route path="orders" element= {<OrdersPage cart={cart}/>} />   
      <Route path="tracking" element= {<TrackingPage cart={cart}/>} />   

    </Routes>
     
  )
}

export default App
