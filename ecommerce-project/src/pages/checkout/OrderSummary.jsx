import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ deliveryOptions, cart }) {
    return (
        <div className="order-summary">

            {   //para verificar que no vaya a recorrer un array vacio
                deliveryOptions.length > 0 && cart.map((cartItem) => {

                    //.find recorre en loop todo el array de deliveryOptions y returnea la primera deliveryOption que sea true segun la funcion flecha/lambda
                    const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
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

                                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
                            </div>
                        </div>

                    );
                })
            }

        </div>
    )
}