import React, {useState,useEffect} from 'react';
import MeshComponent from './Extract';
import axios from 'axios';
import { TOKEN } from 'config';
const BASE = "https://api.meshcapade.com/api";

function FinalCom() {
  const [height, setheight] = useState(183);
  const [weight, setweight] = useState(87);
  const [chest, setchest] = useState(109);
  const [Inseam, setInseam] = useState(93);
  const [waist, setWaist] = useState(84);
  const [gender, setGender] = useState("male");

  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [response3, setResponse3] = useState(null);
  const [url, setUrl] = useState(null);

  const [assetId,setAssetId] = useState(null);
  const handleUpload = async () => {
    try {
      const res = await axios.post(
        `${BASE}/v1/avatars/create/from-measurements`,
        {
            "name": "Created from measurements API",
            "gender": gender,
            "measurements":{
                "Height": parseInt(height),
                "Weight": parseInt(weight),
                "Bust_girth": parseInt(chest),
                "Waist_girth": parseInt(waist),
                "Inside_leg_height": parseInt(Inseam)
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
        pose: 'a',
        format: 'obj',
        filename: 'myavatar'
      }, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Exported avatar:', res.data);
      (res?.data?.data.attributes.state === "READY") &&  setUrl(res.data.data.attributes.url.path) 
      setResponse3(res.data);
    } catch (error) {
      console.error('Error exporting avatar:', error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <>
    <div className="container">
      <div className = 'row'>
        <div className="col">
            <MeshComponent url = {url} width={650} height={486}/>
        </div>
        <div className="col">
            <h3>Measurement Avatar Configuration</h3>
            <div>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="gender" className="form-label">Select Gender:</label>
                <select
                    id="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
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
                    <label htmlFor="weight" className="form-label">Weight(in cm):</label>
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
                    <label htmlFor="Inseam" className="form-label">Inseam(in cm) :</label>
                    <input
                    type="text"
                    className="form-control"
                    id="Inseam"
                    value={Inseam}
                    onChange={(e) => setInseam(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="waist" className="form-label">waist(in cm) :</label>
                    <input
                    type="text"
                    className="form-control"
                    id="waist"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {response && (
                <div>
                <h3>Response:</h3>
                <pre>{JSON.stringify(response?.data.attributes.state, null, 2)}</pre>
                </div>
            )}
            {
                assetId && (
                    <>
                        <h3>Response: </h3>
                        <button className = "btn btn-primary" onClick = {handleCheck}>Check</button>
                        <pre>{JSON.stringify(response2?.data.attributes.state, null, 2)}</pre>
                    </>
                )
            }
            { 
                <pre>{JSON.stringify(response3?.data.attributes.state, null, 2)}</pre>
            }
            {response2 && <button className = "btn btn-primary" onClick = {exportAvatar}>Download Avatar</button>}
            {url && <h3>{url}</h3>}
        </div>
      </div>
    </div>
    </>
  );
}


export default FinalCom;
