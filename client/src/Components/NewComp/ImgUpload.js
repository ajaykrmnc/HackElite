import React, { useState } from 'react';
import axios from 'axios';
import img1 from './img1.jpeg'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {

      const response = await axios.post(
        'https://upload.imagekit.io/api/v1/files/upload',
        img1
      );

      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
