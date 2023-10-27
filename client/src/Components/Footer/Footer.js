import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import GoogleApp from "assets/images/Google.png";
import AppStore from "assets/images/app store.png";
import { faUndo, faTh } from '@fortawesome/free-solid-svg-icons';
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider New</p>
        </div>
        <div className="footer--row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="footer--row">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app">
            <img
              src={GoogleApp}
              alt="app"
              width="135px"
              className="appStore googleApp"
            />
            <img src={AppStore} alt="app" className="appStore" width="120px" />
          </div>
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="social1" />
            <FontAwesomeIcon icon={faTwitter} className="social1" />
            <FontAwesomeIcon icon={faYoutube} className="social1" />
            <FontAwesomeIcon icon={faInstagram} className="social1" />
          </div>
        </div>
        <div className="footer--row">
          <div className="que">
            <FontAwesomeIcon icon={faTh} />
            <p className="quality">
              <b>100% ORIGINAL</b> guarantee for all products at myntra.com
            </p>
          </div>
          <div className="que">
            <FontAwesomeIcon icon={faUndo} />
            <p className="quality">
              <b> Return within 30days</b> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};
export default Footer;
