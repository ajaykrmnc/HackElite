import React from 'react';
import img1 from './Image/1.png'

function SustainabilityCard({ item, score }) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title">{item.item}</h5>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex">
            <div style = {{maxHeight: '100%'}}>
             <img src={require(`./Image/${item?.imgSrc}`)} className="card-img-top align-self-end" alt={item.item} style = {{width: '150px', height: '190px',objectFit: 'cover'}}/>
            </div>
            <div>
            <div className = 'card-body'>
                <h6 className="card-subtitle mb-2 text-muted">Material: {item.material}</h6>
                <p className="card-text">Production: {item.production}</p>
                <p className="card-text">Labor Conditions: {item.labor_conditions}</p>
                <p className="card-text">Packaging and Transportation: {item.packaging_transportation}</p>
                <p className="card-text">End-of-Life Options: {item.end_of_life}</p>
            </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="card-footer">
        {<p className="card-text">Total Score: {score}</p>}
      </div>
    </div>
  );
}

export default SustainabilityCard;
