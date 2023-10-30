import React, {useState} from 'react';

function SustainabilityCard({ item,score,key }) {
    // Define functions to calculate scores for each category

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title">{item.item}</h5>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Material: {item.material}</h6>
        <p className="card-text">Production: {item.production}</p>
        <p className="card-text">Labor Conditions: {item.labor_conditions}</p>
        <p className="card-text">Packaging and Transportation: {item.packaging_transportation}</p>
        <p className="card-text">End-of-Life Options: {item.end_of_life}</p>
      </div>
      <div className="card-footer">
        {/* {!view && <button onClick = {handleClick}>Calculate Score</button>} */}
        {  <p className="card-text">Total Score: {score}</p>}
      </div>
    </div>
  );
}

// Define functions for calculating scores here...

export default SustainabilityCard;
