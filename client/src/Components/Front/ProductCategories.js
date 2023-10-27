import React from "react";
import "./Products.css";
import roundImg1 from "assets/images/r1.png";
import roundImg2 from "assets/images/r2.png";
import roundImg3 from "assets/images/r3.png";
import roundImg4 from "assets/images/r4.png";
import roundImg5 from "assets/images/r5.png";
import roundImg6 from "assets/images/r6.png";
import roundImg7 from "assets/images/r7.png";
import roundImg8 from "assets/images/r8.png";
import roundImg9 from "assets/images/r9.png";
import roundImg10 from "assets/images/r10.png";
import roundImg11 from "assets/images/r11.png";
import roundImg12 from "assets/images/r12.png";

const ProductCategories = () => {
  return (
    <div className="container">
      <h2 className="productDeal">CATEGORIES TO BAG</h2>
      <div className="row">
        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg1} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg7}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg2} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg8}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg3} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg9}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg4} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg10}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg5} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg11}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
                height="293"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="boxImg">
            <div>
              <img src={roundImg6} alt="" className="productImg1" width="240" />
            </div>
            <div id="boxImg--2ndImg">
              <img
                src={roundImg12}
                alt=""
                className="productImg1 "
                id="boxImg--2ndImg"
                width="240"
                height="298"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
