import "./checkout-header.css";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import {PaymentSummary} from './PaymentSummary'
import axios from 'axios';
import { useState, useEffect } from "react";


//TITLE: parq q sea diferente en cada pagina, puedo escribirlo al inicio y ya

export function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);
    
    useEffect(() => {

        axios.get("/api/delivery-options?expand=estimatedDeliveryTime") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

            .then(response => {
                setDeliveryOptions(response.data)
            });

        axios.get("/api/payment-summary") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

            .then(response => {
                setPaymentSummary(response.data)
            });

    }, [])





    return (
        <>
            <title>Checkout</title>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    
                    <OrderSummary cart={cart}  deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )

}