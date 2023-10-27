import React from "react";
import "./Products.css";
import productImg1 from "assets/images/1.png";
import productImg2 from "assets/images/2.png";
import productImg3 from "assets/images/3.png";
import productImg5 from "assets/images/4.png";

const ProductsDeals = () => {
  return (
    <div>
      <h2 className="productDeal">DEALS OF THE DAY</h2>

      <div className="products">
        <img
          src={productImg1}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg2}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg3}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg5}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg2}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
      </div>
    </div>
  );
};

export default ProductsDeals;
