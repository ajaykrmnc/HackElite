import React from "react";
import "./Products.css";
import bestDealImg1 from "assets/images/d1.png";
import bestDealImg2 from "assets/images/d2.png";
import bestDealImg3 from "assets/images/d3.png";
import bestDealImg4 from "assets/images/d4.png";
import bestDealImg5 from "assets/images/d5.png";

const ProductsBestDeal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={bestDealImg1}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </div>
        <div className="col-sm-6">
          <img
            src={bestDealImg2}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </div>
        <div className="col-sm-6">
          <img
            src={bestDealImg3}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </div>
        <div className="col-sm-6">
          <img
            src={bestDealImg4}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </div>
        <div className="col-sm-6">
          <img
            src={bestDealImg5}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsBestDeal;
