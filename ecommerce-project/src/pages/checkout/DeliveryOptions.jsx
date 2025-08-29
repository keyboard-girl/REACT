import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {



    return (

        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {
                deliveryOptions.map((deliveryOption) => {

                    let priceString = "FREE Shiping";

                    if (deliveryOption.priceCents > 0) {
                        priceString = `${(deliveryOption.priceCents / 100).toFixed(2)} - Shipping`
                    }

                    const selectOption = async ()=>{
                        await axios.put(`/api/cart-items/${cartItem.productId}`,{
                            deliveryOptionId: deliveryOption.id
                        });
                    
                        await loadCart();
                    };

                    return (
                        <div key={deliveryOption.id} className="delivery-option" 
                        onClick={selectOption} >
                            <input type="radio"
                                checked={deliveryOption.id === cartItem.deliveryOptionId}
                                onChange={()=>{}}
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
    )
}