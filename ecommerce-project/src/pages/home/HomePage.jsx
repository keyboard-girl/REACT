import { Header } from '../../components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'
//import { products } from '../../starting-code/data/products.js'
import {ProductsGrid} from './ProductsGrid'
import { useSearchParams } from 'react-router';
//import { useLocation } from 'react-router';
import GallerySlider from './GallerySlider';

export function HomePage({cart, loadCart}) {

    const galleryImages = [
    {
      src: '/public/images/banner1.png',
      alt: 'Producto 1'
    },
    {
      src: '/public/images/banner2.png', 
      alt: 'Producto 2'
    },
    {
      src: '/public/images/banner3.png',
      alt: 'Producto 3'
    }
  ];

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

            <GallerySlider images={galleryImages} />

            
            <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    )
}