import React, { useState } from 'react';
import axios from 'axios';
import { TOKEN } from 'config';
const BASE = "https://api.meshcapade.com/api";

const MeshMeasure = () => {
  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [response3, setResponse3] = useState(null);

  const [assetId,setAssetId] = useState(null);

  const handleUpload = async () => {
    try {
      const res = await axios.post(
        'https://api.meshcapade.com/api/v1/avatars/create/from-measurements',
        {
            "name": "Created from measurements API",
            "gender":"female",
            "measurements":{
                "Height": 180
            }
        },
        {
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${TOKEN}`, // Replace with your actual token
            'Content-type': 'application/json'
          }
        }
      );

      setResponse(res.data);
      setAssetId(res.data.data.id);
      console.log('Done:', res.data);
    } catch (error) {
      console.error('Error connecting the server:', error);
    }
  };
  const handleCheck = async () => {
    try {
      const res = await axios.get(
        `https://api.meshcapade.com/api/v1/avatars/${assetId}`,
        {
          headers: {
            authorization: `Bearer ${TOKEN}`, // Replace with your actual token
            'Content-type': 'application/json'
          }
        }
      );

      setResponse2(res.data);
      console.log('Done:', res.data);
    } catch (error) {
      console.error('Error connecting the server:', error);
    }
  };
  const exportAvatar = async () => {
    try {
      const res = await axios.post(`${BASE}/v1/avatars/${assetId}/export`, {
        pose: 't',
        format: 'obj',
        filename: 'myavatar'
      }, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Exported avatar:', res.data);
      setResponse3(res.data);
    } catch (error) {
      console.error('Error exporting avatar:', error);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <button onClick={handleUpload}>Upload Image</button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {
        assetId && (
            <>
                <h3>Response: </h3>
                <button onClick = {handleCheck}>Check</button>
                <pre>{JSON.stringify(response2, null, 2)}</pre>
            </>
        )
      }
      {
        <pre>{JSON.stringify(response3, null, 2)}</pre>
      }
      <button onClick = {exportAvatar}>Download Avatar</button>
    </div>
  );
};

export default MeshMeasure;
