import {Link, useNavigate} from 'react-router'
import { useState } from 'react';
import './header.css'
import loga from './loga.png'; // IMPORTAR LA IMAGEN
import mobileLoga from './mobile-loga.png'; // IMPORTAR LA IMAGEN

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
                                <div className="cart-box">
                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                    </Link>
                </div>
                
                <div className="header">

                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src={loga} />
                        <img className="mobile-logo"
                            src={mobileLoga} />
                    </Link>
                </div>

                <div className="middle-section">

                

                    <button className="search-button">

                    </button>
                </div>

               </div> 

                
            
        </>
    )
}