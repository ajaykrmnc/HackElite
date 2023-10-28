import React, { useState, useEffect } from 'react';
import './MeshBen.css'; // Make sure you have the CSS file for styling
import img21 from 'assets/Meshcap/21.jpeg'
import img22 from 'assets/Meshcap/22.jpeg'
import img31 from 'assets/Meshcap/31.jpeg'
import img33 from 'assets/Meshcap/33.jpeg'
import img41 from 'assets/Meshcap/41.jpeg'
import img43 from 'assets/Meshcap/43.jpeg'
import img44 from 'assets/Meshcap/44.jpeg'

const MeshBen = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3500); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = Array.from({ length: 8 }, (_, index) => require(`assets/Meshcap/${index + 1}.png`));

  return (
    <div className="">
      <div className="top-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImage ? 'visible' : 'hidden'}
          />
        ))}
        <div className = "overlay-text-bar">
          <h1 className="overlay-text">Create an Avatar</h1>
          <h5>Enhance your 3D models with our premium texture packs, tailored to seamlessly integrate with Myntra</h5>
          <h5>Watch your creations come to life with stunning realism and detai</h5>
        </div>
      </div>
      <div className = 'container shop'>
          <h2>Try on Model</h2>
          <div className = 'shopimg'>
            <div>
              <img src = {img22} />
            </div>
            <div>
              <img src = {img21} />
            </div>
            <div>
              <img src = {img41} />
            </div>
          </div>
          <h2>Shop by style</h2>
          <div className = 'shopimg'>
            <div>
              <img src = {img33} />
            </div>
            <div>
              <img src = {img31} />
            </div>
            <div>
              <img src = {img41} />
            </div>
        </div>
        </div>
        
    </div>
  );
};

export default MeshBen;
