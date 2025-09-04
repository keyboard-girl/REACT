import { Header } from '../../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'
//import { products } from '../../starting-code/data/products.js'
import {ProductsGrid} from './ProductsGrid'
import { useSearchParams } from 'react-router';
//import { useLocation } from 'react-router';

export function HomePage({cart, loadCart}) {

    const [products, setProducts] = useState([]);

    //const location = useLocation();

    useEffect(()=> {
        
        axios.get("/api/products?search=")

        .then(response=>{
            setProducts(response.data)
        });

    }, [])


    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    useEffect(()=> {
        
        axios.get(`/api/products?search=${searchTerm}`)

        .then(response=>{
            setProducts(response.data)
        });

    }, [searchTerm])




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