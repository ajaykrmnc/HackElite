import React, { useState } from 'react';

function FormComponent() {
  const [height, setheight] = useState('');
  const [weight, setweight] = useState('');
  const [chest, setchest] = useState('');
  const [Arm, setArm] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setUploadedImage(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className="container mt-5">
        <h3>Measurement Avatar Configuration</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height(in cm):</label>
            <input
              type="text"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Width(in cm):</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="chest" className="form-label">Chest:(in cm) </label>
            <input
              type="text"
              className="form-control"
              id="chest"
              value={chest}
              onChange={(e) => setchest(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Arm" className="form-label">Arm(in cm) :</label>
            <input
              type="text"
              className="form-control"
              id="Arm"
              value={Arm}
              onChange={(e) => setArm(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">Upload Image:</label>
          <div 
            className="border border-secondary p-2"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            Drag & drop an image here or click to select one
          </div>
          <input
            type="file"
            className="form-control-file mt-2"
            id="imageUpload"
            accept="image/*"
            onChange={(e) => setUploadedImage(e.target.files[0])}
          />
        </div>
        {uploadedImage && (
          <div className="mb-3">
            <img 
              src={URL.createObjectURL(uploadedImage)} 
              alt="Uploaded" 
              className="img-fluid"
            />
          </div>
        )}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
