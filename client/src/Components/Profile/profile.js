import React from "react";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "config";

const Profile = ({ user }) => {


  return (
    <>
        <div class="container" style={{ marginTop: "1rem" }}>
          <div class="row">
            <div class="col-4">
              <div className="card text-center mt-3">
              <div className='d-flex justify-content-center'>
                 <div className="" style={{width: "20rem" }}>
                     <div class="">
                         <img class="profile-img" src={user.photoURL} alt='img2'/>
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
                <hr />

                <div className="card-body">
                  <h5 className="">PURCHASING DETAILS</h5>
                </div>
                <div className="card-footer text-muted">
                  last updated - 2 days ago
                </div>
              </div>
            </div>
            <div class="col-8">
              <div className="card mt-3">
                <img
                  src="https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-927.jpg?w=900"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "25rem", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">PURCHASING HISTORY</h5>
                  <p className="card-text">Here all your purchasing Items.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-footer text-muted">
                  last updated - 2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Profile;
