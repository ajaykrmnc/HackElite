import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Widget = ({ text, name, percentage }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <hr/>
                <div style={{ width: '100px', margin: '0 auto' }}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#00bcd4',
                            trailColor: '#2d3941',
                        })}
                    />
                    <h5 style= {{textAlign: 'center'}}>{percentage} %</h5>
                </div>
                <hr/>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1 className = "mb-4">Ecometer Analysis</h1>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <Widget name = "Polyster"percentage={75} text = 
                    "Material Sourcing: Fiber Type: Evaluate the types of fibers used in the garment (e.g., organic cotton, bamboo, recycled polyester) and their environmental impact. Sustainable Practices: Consider if the fibers are sourced using sustainable and ethical practices, such as fair trade or organic certifications" />
                </div>
                <div className="col-md-4 mb-4">
                    <Widget name = "Cotton" percentage={50}
                    text = "Fiber Production: Different types of fibers have varying water requirements. For example, cotton is known to be water-intensive, while hemp and organic cotton often require less water.Dyeing and Finishing Processes:" />
                </div>
                <div className="col-md-4 mb-4">
                    <Widget name = "Overall Sustainablity" percentage={80} 
                    text = {"Water Consumption: Assess the amount of water used in the dyeing and finishing stages of garment production. Consider processes that use eco-friendly dyes and water-saving technologies. Water Pollution"}/>
                </div>
            </div>
            <Link to="/">
                <button className = "btn btn-dark">Go to Homepage</button>
            </Link>
        </div>
    );
};

export default Dashboard;
