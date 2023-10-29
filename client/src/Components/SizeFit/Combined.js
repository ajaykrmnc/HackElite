import React from 'react';
import MeshComponent from './Extract';
import FormComponent from './formComenponent';
import './App.css'; // Assuming you have a CSS file for styling

function Combined() {
  const handleSubmit = () => {
      
  } 
  return (
    <div className="app-container">
      <div className="left-container">
        <MeshComponent width={650} height={486}/>
      </div>
      <div className="right-container">
        <FormComponent handleSubmit = {handleSubmit} />
      </div>
    </div>
  );
}

export default Combined;
