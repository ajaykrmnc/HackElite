import React from 'react';
import './OutfitRecommendation.css';
import { Link } from 'react-router-dom';
import mystyle from 'assets/Myntra/Mystylist.jpeg'

const OutfitRecommendation = () => {
  return (
    <>
    <img src = {mystyle} className = "mystyle" />
    <div className = "recommendation container">
      <h2 className="recommendation-title m-3 ">Recommendation</h2>
      <hr/>
      <div className="items">
      <div className="item">
          <img src="shirt.jpg" alt="Shirt" />
          <p>Stylish Shirt</p>
        </div>
        <div className="item">
          <img src="pants.jpg" alt="Pants" />
          <p>Comfy Pants</p>
        </div>
        <div className="item">
          <img src="accessory.jpg" alt="Accessory" />
          <p>Cool Accessory</p>
        </div>
    </div>
    <div>
    <Link to="/"> <button className = "btn btn-dark">Back to Home</button></Link>
    </div>
    </div>
    </>
  );
}

export default OutfitRecommendation;
