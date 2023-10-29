import React from 'react';
import { Link } from 'react-router-dom';
import img1 from 'assets/Option/afi.png'
import img2 from 'assets/Option/afs.png'
import img3 from 'assets/Option/Option.png'
import "./option.css"

const MeshOption = () =>{
    return (
        <>
            <div className = "main container">
                <div className = "">
                    <h2>Create a new avatar</h2>
                        <div className = "Options">
                            <Link to = "/map" className = "img1">
                                <img  src = {img3} />
                                <h3>From Measurement</h3>
                            </Link>
                            <Link to = "/map" className = "img2">
                                <img  src = {img1} />
                                <h3>From Image</h3>
                            </Link>
                            <Link to = "/map" className = "img3">
                                <img  src = {img2} />
                                <h3>From Scans</h3>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MeshOption;
