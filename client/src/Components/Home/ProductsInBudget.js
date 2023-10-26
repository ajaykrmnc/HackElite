import React from "react";
import "./Products.css";
import budgetImgOffer1 from "assets/images/b1.png";
import budgetImgOffer2 from "assets/images/b2.png";
import budgetImgOffer3 from "assets/images/b3.png";
import budgetImgOffer4 from "assets/images/b4.png";
import budgetImgOffer5 from "assets/images/b5.png";
import budgetImgOffer6 from "assets/images/b6.png";
import budgetImgOffer7 from "assets/images/b7.png";
import budgetImgOffer8 from "assets/images/b8.png";
import budgetImgOffer9 from "assets/images/b9.png";
import budgetImgOffer10 from "assets/images/b10.png";

const ProductsInBudget = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="boxImg1">
            <div>
              <img
                src={budgetImgOffer1}
                alt=""
                className="productImg2"
              />
            </div>
            <div id="productImg2nd">
              <img
                src={budgetImgOffer6}
                alt=""
                className="productImg2 "
                id="productImg2nd"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxImg1">
            <div>
              <img
                src={budgetImgOffer2}
                alt=""
                className="productImg2"
              />
            </div>
            <div id="productImg2nd">
              <img
                src={budgetImgOffer7}
                alt=""
                className="productImg2 "
                id="productImg2nd"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxImg1">
            <div>
              <img
                src={budgetImgOffer3}
                alt=""
                className="productImg2"
              />
            </div>
            <div id="productImg2nd">
              <img
                src={budgetImgOffer8}
                alt=""
                className="productImg2"
                id="productImg2nd"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="boxImg1">
            <div>
              <img
                src={budgetImgOffer4}
                alt=""
                className="productImg2"
              />
            </div>
            <div id="productImg2nd">
              <img
                src={budgetImgOffer9}
                alt=""
                className="productImg2 "
                id="productImg2nd"
              />
            </div>
          </div>
          <div className="col-md-4">
          <div className="boxImg1">
            <div>
              <img
                src={budgetImgOffer5}
                alt=""
                className="productImg2"
              />
            </div>
            <div id="productImg2nd">
              <img
                src={budgetImgOffer10}
                alt=""
                className="productImg2 "
                id="productImg2nd"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInBudget;

