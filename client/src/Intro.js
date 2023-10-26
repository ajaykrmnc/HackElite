import React from 'react';
import { Link } from "react-router-dom";
import MyntraLogo from './assets/images/Myntra.png';
import logoBig from './assets/images/logoBig.png';
import Name from './assets/images/Myntra.png';
import VisionXR_Logo from './assets/images/logoBig.png';
import MyntraVerse from './assets/images/Myntra.png';

const Intro = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-royalblue vh-100">
            {/* left side */}
            <div className='bg-gradient-to-b from-lightblue to-deepblue w-50'>
                <div className='m-5'>
                    <Link to="">
                        <img src={MyntraLogo} alt='logo' className="img-fluid" />
                    </Link>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <img src={logoBig} alt='logo' className="img-fluid" />
                </div>
            </div>
            {/* right side */}
            <div className='w-50'>
                <div className='m-5 d-flex justify-content-end'>
                    <Link to="">
                        <img src={VisionXR_Logo} alt='logo' className="img-fluid" />
                    </Link>
                </div>
                <div className='ml-5 mt-3'>
                    <img src={MyntraVerse} alt='logo' className="img-fluid" />
                </div>
                <div className='ml-5 mt-3 text-yellow font-extrabold display-1'>
                    Team apeXR
                </div>
                <div className='ml-5 mt-2 text-grey italic font-light h3'>
                     Explore a Whole New World of opportunities with
                </div>
                <div className='ml-5 mt-3 w-100'>
                    <img src={Name} alt='logo' className="img-fluid" />
                </div>
                <div className='mt-4 d-flex justify-content-center'>
                    <Link to="/formpage">
                        <div className='px-4 py-2 text-white font-medium h4 border border-white rounded-2xl shadow-lg bg-sky-500'>
                            Get Started with 3D!
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
