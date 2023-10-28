import React, { useState } from 'react';
import axios from 'axios';
import { TOKEN } from 'config';
const AvatarCreator = () => {
  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState(null);  
  const [response3, setResponse3] = useState(null); 
  const [assetId, setAssetId] = useState(null);
  const [upload, setUpload] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const handleInitiate = () => {
    axios.post('https://api.meshcapade.com/api/v1/avatars/create/from-images', null, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    })
      .then(res => {
        setResponse(res.data);
        setAssetId(res.data.data.id);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  const AvatarCreator = () => {
      axios.post(`https://api.meshcapade.com/api/v1/avatars/${assetId}/images`, null, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      })
        .then(response2 => {
          setResponse2(response2.data);
          setUpload(response2.data.data.attributes.url.path);
          console.log(upload);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile);
    };

    const handleUpload = async () => {
        try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(formData);

        const response = await axios.put(`${upload}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
  };
  const exportAvatar = async () => {
    try {
      const response = await axios.post('https://api.meshcapade.com/api/v1/avatars/e40ba1bd-2675-48ba-bda4-8b714cd3e4a7/export', {
        pose: 'scan',
        format: 'obj'
      }, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Exported avatar:', response.data);
      setResponse3(response.data);
      setAvatar(response.data);
    } catch (error) {
      console.error('Error exporting avatar:', error);
    }
  };

const fitToImages = async () => {
    const TOKEN = 'YOUR_TOKEN'; // Replace with your actual token
  
    try {
      const response = await axios.post('https://api.meshcapade.com/api/v1/avatars/e40ba1bd-2675-48ba-bda4-8b714cd3e4a7/fit-to-images', {
        avatarname: 'Ashley',
        height: 180,
        weight: 65,
        gender: 'female'
      }, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Fit to images response:', response.data);
    } catch (error) {
      console.error('Error fitting to images:', error);
    }
  };
  return (
    <div>
      <button onClick={handleInitiate}>Create Avatar</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          <button onClick = {AvatarCreator}>Hello</button>
        </div>
      )}
      {
        response2 && (
            <>
            <pre>{JSON.stringify(response2, null, 2)}</pre>
            <h2>Upload an Image</h2>
                <input type="file" onChange={handleFileInputChange} />
                <button onClick={handleUpload}>Upload</button>
            </>
        )
      }
      {
        response3 && (
            <>
            <pre>{JSON.stringify(response3, null, 2)}</pre>
            <h2>Upload an Image</h2>
                <button onClick={handleUpload}>Upload</button>
            </>
        )
      }
    </div>
  );
}

export default AvatarCreator;
