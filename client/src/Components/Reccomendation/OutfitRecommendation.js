import React from 'react';
import './OutfitRecommendation.css';
import { Link } from 'react-router-dom';

const OutfitRecommendation = () => {
  return (
    <>
    
    <div className="recommendation-bar">
    <h2 className="recommendation-title">Recommendation</h2>
    <div className = "recommendation">
      <div className="item">
          <img src="shirt.jpg" alt="Shirt" />
          <h3>Stylish Shirt</h3>
        </div>
        <div className="item">
          <img src="pants.jpg" alt="Pants" />
          <h3>Comfy Pants</h3>
        </div>
        <div className="item">
          <img src="accessory.jpg" alt="Accessory" />
          <h3>Cool Accessory</h3>
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
