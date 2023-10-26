import React from "react";
import "./Products.css";
import brandsImg1 from "assets/images/f1.png";
import brandsImg2 from "assets/images/f2.png";
import brandsImg3 from "assets/images/f3.png";
import brandsImg4 from "assets/images/f4.png";
import brandsImg5 from "assets/images/f5.png";
import brandsImg6 from "assets/images/f6.png";
import brandsImg7 from "assets/images/f7.png";
import brandsImg8 from "assets/images/f8.png";
import brandsImg9 from "assets/images/f9.png";
import brandsImg10 from "assets/images/f10.png";

function Bigdeal() {
  return (
    <div>
      <h2 className="productDeal">BIGGEST DEALS ON TOP BRANDS</h2>
      <div className="products">
        <img
          src={brandsImg1}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg2}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg3}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg4}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg5}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
      </div>

      <div className="products products2">
        <img
          src={brandsImg6}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg10}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg7}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg8}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={brandsImg9}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
      </div>
    </div>
  );
}

export default Bigdeal;
