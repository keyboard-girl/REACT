import {Link, useNavigate} from 'react-router'
import { useState } from 'react';
import './header.css'

export function Header({cart}){

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    //BARRA BUSQUEDA
    const [searchTerms, setSearchTerms] = useState("");

    const updateSearchTerms = (event)=>{
        const terms = event.target.value;
        setSearchTerms(terms)
    }

    const navigate = useNavigate();

    const loadFilteredProducts = ()=>{
        navigate(`/?search=${encodeURIComponent(searchTerms)}`);
    }

    /*
    axios.get("/api/products?search=")

        .then(response=>{
            setProducts(response.data)
        });
    */
    /////------------

    return(
        <>
                <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src="images/logo.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo.png" />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" 
                    onChange={updateSearchTerms}
                    value={searchTerms}
                    />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" 
                        onClick={loadFilteredProducts}/>
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>
    )
}