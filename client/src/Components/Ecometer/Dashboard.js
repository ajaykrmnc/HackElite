import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import sus1 from "assets/certifications/sus1.webp";
import sus2 from "assets/certifications/sus2.png";
import sus3 from "assets/certifications/sus3.webp";
import sus4 from "assets/certifications/sus4.webp";
import sus5 from "assets/certifications/sus5.webp";
import sus6 from "assets/certifications/sus6.webp";

const Widget = ({Heading, text, name, percentage }) => {
    const lines = text.split('\n');
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <hr/>
                <div style={{ width: '80px', margin: '0 auto' }}>
                <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // Colors
                    textColor: '#4caf50',
                    pathColor: '#4caf50',  // Green color for the progress bar
                    trailColor: '#e0e0e0', // Light grey for the background

                    // Size and spacing
                    strokeLinecap: 'round', // Makes the progress bar rounded at the ends
                    pathTransitionDuration: 0.5, // Speed of the animation
                })}
                />
                </div>
                <hr/>
                <p>{Heading}</p>
                {lines.map((line, index) => (
                    <p style = {{fontSize: '14px', margin: '3px'}} key={index} >{line}</p>
                ))}
            </div>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1 className = "mb-4">Ecometer Analysis</h1>
            <div className="row">
                <div className="col">
                    <Widget name = "Material"percentage={30}
                    Heading = {""}
                     text={`
                    Organic or sustainable fibers (e.g., organic cotton, Tencel) - 5 points
                    Recycled or upcycled materials - 4 points
                    Conventional, non-organic fibers - 2 points
                    Animal-based materials (e.g., wool, silk) with responsible sourcing - 3 points
                    `}/>
                </div>
                <div className="col">
                    <Widget name = "Production Process" percentage={25}
                    Heading = {"Evaluate how the item was produced"}
                    text = {`
                    Low-impact dyeing and printing techniques - 5 points
                    Water and energy-efficient manufacturing - 4 points
                    Ethical and transparent supply chain - 4 points
                    No harmful chemicals used in production - 3 points`} />
                </div>
                <div className="col">
                    <Widget name = "Labor Conditon" percentage={20}
                    Heading = {"Consider the working conditions of the people involved in production:"} 
                    text = {`
                        Fair wages and benefits for workers - 5 points
                        Safe and healthy working conditions - 4 points
                        No child or forced labor - 3 points
                        Ethical treatment of workers throughout the supply chain - 4 points`}/>
                </div>
                <div className="col">
                    <Widget name = "Packaging and Transportation" percentage={15} 
                    Heading = {"Assess the environmental impact of packaging and transportation:"}
                    text = {`
                            Minimal and eco-friendly packaging - 4 points
                            Low-impact transportation methods - 4 points
                            Use of recycled or recyclable materials for packaging - 3 points
                            Local or sustainable sourcing of materials - 4 points`}
                    />
                </div>
                <div className="col">
                    <Widget name = "End-of-Life Options" percentage={10} 
                    Heading = {""}
                    text = {`
                     Easily recyclable or compostable materials - 5 points
                     Options for responsible disposal or donation - 4 points
                     Durable construction for long-term use - 3 points
                     Limited environmental impact when disposed - 3 points"`}/>
                </div>
            </div>
            <h2>Certifications</h2>
            <div className = "row mb-4">
                    <div className = "col">
                        <img src = {sus1}style = {{width: '80%'}}/>
                    </div>
                    <div className = "col">
                        <img src = {sus2}style = {{width: '80%'}}/>
                    </div>
                    <div className = "col">
                        <img src = {sus3}style = {{width: '80%'}}/>
                    </div>
                    <div className = "col">
                        <img src = {sus4}style = {{width: '80%'}}/>
                    </div>
                    <div className = "col">
                        <img src = {sus5}style = {{width: '80%'}}/>
                    </div>
                    <div className = "col">
                        <img src = {sus6}style = {{width: '80%'}}/>
                    </div>
            </div>
        </div>
    );
};

export default Dashboard;
