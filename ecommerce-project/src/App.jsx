import {Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

    const [cart, setCart] = useState([]);

        useEffect(()=> {

        axios.get("http://localhost:3000/api/cart-items?expand=product") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

        .then(response=>{
            setCart(response.data)
        });

    }, [])


//path = "/" es i gual a index
  return (
    <Routes>
      <Route index element= {<HomePage cart={cart}/>} /> 
      <Route path="checkout" element= {<CheckoutPage cart={cart}/>} />   
      <Route path="orders" element= {<OrdersPage/>} />   
      <Route path="tracking" element= {<TrackingPage/>} />   

    </Routes>
     
  )
}

export default App
