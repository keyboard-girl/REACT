import "./checkout-header.css";
import "./CheckoutPage.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import dayjs from "dayjs";

//TITLE: parq q sea diferente en cada pagina, puedo escribirlo al inicio y ya

export function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {

        axios.get("/api/delivery-options?expand=estimatedDeliveryTime") //ESO DESPUES DEL ? ES UN QUERY REQUEST, que pide expandir los subelementos de una tabla. en este caso es cart>products>...datos del producto...

            .then(response => {
                setDeliveryOptions(response.data)
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
                    <div className="order-summary">

                        {   //para verificar que no vaya a recorrer un array vacio
                            deliveryOptions.length > 0 && cart.map((cartItem) => {

                                //.find recorre en loop todo el array de deliveryOptions y returnea la primera deliveryOption que sea true segun la funcion flecha/lambda
                                const selectedDeliveryOption = deliveryOptions.find((deliveryOption)=>
                                {
                                    return deliveryOption.id === cartItem.deliveryOptionId;
                                })

                                return (
                                    <div key={cartItem.productId} className="cart-item-container">
                                        <div className="delivery-date">
                                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMS).format('dddd, MMMM D')}
                                        </div>

                                        <div className="cart-item-details-grid">
                                            <img className="product-image"
                                                src={cartItem.product.image} />

                                            <div className="cart-item-details">
                                                <div className="product-name">
                                                    {cartItem.product.name}
                                                </div>
                                                <div className="product-price">
                                                    ${(cartItem.product.priceCents / 100).toFixed(2)}
                                                </div>
                                                <div className="product-quantity">
                                                    <span>
                                                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                                    </span>
                                                    <span className="update-quantity-link link-primary">
                                                        Update
                                                    </span>
                                                    <span className="delete-quantity-link link-primary">
                                                        Delete
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="delivery-options">
                                                <div className="delivery-options-title">
                                                    Choose a delivery option:
                                                </div>
                                                {
                                                    deliveryOptions.map((deliveryOption) => {
                                                        
                                                        let priceString = "FREE Shiping";

                                                        if(deliveryOption.priceCents > 0) {
                                                            priceString = `${(deliveryOption.priceCents/100).toFixed(2)} - Shipping`
                                                        }


                                                        return (
                                                            <div key={deliveryOption.id} className="delivery-option">
                                                                <input type="radio" 
                                                                    checked = {deliveryOption.id === cartItem.deliveryOptionId}
                                                                    className="delivery-option-input"
                                                                    name={`delivery-option-${cartItem.productId}`} />
                                                                <div>
                                                                    <div className="delivery-option-date">
                                                                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                                    </div>
                                                                    <div className="delivery-option-price">
                                                                        {priceString}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }


                                                

                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }

                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}