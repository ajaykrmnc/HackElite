import React, { useState } from 'react';
import axios from 'axios';
import { TOKEN } from 'config';
import img1 from './img1.jpeg'

const BASE = "https://api.meshcapade.com/api";
const AvatarCreator = () => {
  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState(null);  
  const [response3, setResponse3] = useState(null); 
  const [response4, setResponse4] = useState(null); 
  const [response5, setResponse5] = useState(null);
  const [assetId, setAssetId] = useState(null);
  const [upload, setUpload] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInitiate = () => {
    axios.post(`${BASE}/v1/avatars/create/from-images`, null, {
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
  };
  const AvatarCreator = async () => {
    try {
      const response2 = await axios.post(`${BASE}/v1/avatars/${assetId}/images`, null, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      });
      setResponse2(response2.data);
      setUpload(response2.data.data.attributes.url.path);
      console.log(upload);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile);
    };

    const handleUpload = async () => {
        try {

        const response = await axios.put(`${upload}`, img1, {
            headers: {
                'Content-Type': 'image/*'
            }
        });
            console.log({img1});
             setResponse3("Done");
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
  };
    const fitToDetail = async () => {
        try {
            const response = await axios.post(`${BASE}/v1/avatars/${assetId}/fit-to-images`, {
                avatarname: 'Gupta',
                height: 172,
                weight: 75,
                gender: 'FEMALE'
            }, {
                headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
                }
            });
            setResponse4(response.data);
            console.log('Fit to images response:', response.data);
        } catch (error) {
        console.error('Error fitting to images:', error);
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
          setResponse5(res.data);
          setAvatar(res.data);
        } catch (error) {
          console.error('Error exporting avatar:', error);
        }
      };
  return (
    <div>
      <button onClick={handleInitiate}>Create Avatar</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          <button onClick = {AvatarCreator}>Process Initiated</button>
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
            <h2>Image is uploaded Now Proceed to Fit the Model</h2>
                <button onClick={fitToDetail}>Model Fit</button>
            </>
        )
      }
      {
        response4 && (
                <>
                    <h2>Fitted Model</h2>
                    <pre>{JSON.stringify(response4, null, 2)}</pre>
                    <button onClick={exportAvatar}>Download Model</button>
                </>
        )
      }
      {
        response5 && (
            <>
                <h2>Download the image</h2>
                <pre>{JSON.stringify(response5, null, 2)}</pre>
            </>
        )
      }
    </div>
  );
}

export default AvatarCreator;
