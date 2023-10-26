import React from 'react';
import MeshComponent from './Extract';
import './App.css'; // Assuming you have a CSS file for styling

function Combined() {
  return (
    <div className="app-container">
      <div className="left-container">
        <MeshComponent />
      </div>
      <div className="right-container">
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
