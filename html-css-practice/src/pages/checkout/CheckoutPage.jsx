import "./checkout-header.css";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import {PaymentSummary} from './PaymentSummary';
import axios from 'axios';
import { useState, useEffect } from "react";
import loga from './loga.png'; 
import mobileLoga from './mobile-loga.png'; 
import {Header} from "../../components/Header";


//TITLE: parq q sea diferente en cada pagina, puedo escribirlo al inicio y ya

export function CheckoutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);
    

    useEffect(() => {
        axios.get("/api/delivery-options?expand=estimatedDeliveryTime") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

            .then(response => {
                setDeliveryOptions(response.data)
            });

    }, [])

    useEffect(() => {

        axios.get("/api/payment-summary") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

            .then(response => {
                setPaymentSummary(response.data)
            });

    }, [cart])


    return (
        <>
            <title>Checkout</title>

            <Header cart={cart}/> 

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    
                    <OrderSummary cart={cart}  deliveryOptions={deliveryOptions} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
                </div>
            </div>
        </>
    )

}