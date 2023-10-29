import React, { useState, useEffect } from 'react';
import './Ecometer.css'; // Make sure you have the CSS file for styling
import eco from 'assets/Ecometer/eco.png'
import eco2 from 'assets/Ecometer/eco2.png'
import eco3 from 'assets/Ecometer/eco3.png'

const EcoMeter = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 3500); // Change images every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const images = Array.from({ length: 1 }, (_, index) => require(`assets/Ecometer/${index + 1}.png`));

    return (
        <div className="ecometer">
            <div className="top-bar">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={index === currentImage ? 'visible opacity-50' : 'hidden opacity-75'}
                    />
                ))}
                <div className="overlay-text-bar text-dark">
                    <h1 className="overlay-text text-dark">Eco Meter</h1>
                    <h5>Get to know your contribiution to the environment, engage in eco-friendly choices, for the future.</h5>
                    <h5>Shop without the guilt, Shop Freely.</h5>
                </div>
            </div>
            <div className='container'>
                <h2>Our Idea</h2>
                <div className='ideas'>
                    <div className="card">
                        <img className="card-img-top" src={eco} alt="Card image cap" />
                        <div className="card-body">
                            <h4>EcoMeter Score</h4>
                            <p>
                                Introducing an eco-meter scoring for products, which will be calculated based on various parameters like material, carbon footprint, water usage etc.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={eco2} alt="Card image cap" />
                        <div className="card-body">
                            <h4>Wardrobe Sustainability</h4>
                            <p>
                                Analyzing the overall sustainability of users wardrobe, displaying badges to indicate eco-friendly and ethical attributes.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={eco3} alt="Card image cap" />
                        <div className="card-body">
                            <h4>Sustainability Reports</h4>
                            <p>
                                Offering personalized sustainability reports that shows users the impact of their eco friendly choices, thus allowing them to shop without the guilt of causing harm to the environment.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <h2>Calculate Your Cloth's Rating</h2>

                <h2>Your Rating</h2>

            </div>

        </div>
    );
};

export default EcoMeter;