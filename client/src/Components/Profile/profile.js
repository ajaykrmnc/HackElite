import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "config";

const Profile = ({ user }) => {
  const client = {
    Navigatorame: "Ajay",
    email: "ajaykg6917@gmail.com",
    Address: "VILL + PO + PS - PIRO Bhojpur Bihar",
    MobNo: "74928720XX",
    count: '0',
  }
  
  return (
    <>
        <div class="container" style={{ marginTop: "1rem" }}>
          <div class="row">
            <div class="col-4">
              <div className="card text-center mt-3">
              <div className='d-flex justify-content-center'>
                 <div className="">
                     <div class="">
                         <img class="profile-img" src={user?.photoURL} alt='img2'/>
                     </div>
                    <div className="cardbody">
                        <h5 className="cardtitle">Name: {client.Name}</h5>
                        <p className="cardtext">Email: {client.email}</p>
                        <p className="cardtext">{client.Address}</p>
                        <p className="cardtext">MobNo: {client.MobNo}</p>
                        <p className="cardtext">your order in this month is:  {client.count} </p>
    
                    </div>
                 </div>
                 </div>
                <div className="card-footer text-muted">
                  last updated - 2 days ago
                </div>
              </div>
            </div>
            <div class="col-8">
              <div className="nice-ui-container">
                <h3>Todays Recommendations </h3>
                <Link to="/recommendation">
                  <button className="btn btn-secondary">Go</button>
                </Link>
              </div>
              <div className="nice-ui-container">
                <h3>Calculate your Ecometer results</h3>
                <Link to="/dashboard">
                  <button className="btn btn-secondary">Click Here</button>
                </Link>
              </div>
              <div className="nice-ui-container">
                <h3>Create your virtual Avatar</h3>
                <Link to="/map">
                  <button className="btn btn-secondary">Click Here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Profile;
