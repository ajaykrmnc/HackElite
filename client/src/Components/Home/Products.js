import React from 'react'
import "./Products.css";
import ProductsDeals from './ProductsDeals';
import Bigdeal from './Bigdeal';
import ProductCategories from "./ProductCategories";

const Products=()=> {
    return (
        <div>
            <ProductsDeals />
            <ProductCategories />
            <Bigdeal />
        </div>
    )
}

export default Products;
