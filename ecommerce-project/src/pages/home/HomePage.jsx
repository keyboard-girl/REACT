import { Header } from '../../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'
//import { products } from '../../starting-code/data/products.js'
import {ProductsGrid} from './ProductsGrid'

export function HomePage({cart, loadCart}) {

    const [products, setProducts] = useState([]);


    useEffect(()=> {
        
        axios.get("/api/products")

        .then(response=>{
            setProducts(response.data)
        });

    }, [])





    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart}/>
            <div className="home-page">

            <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}