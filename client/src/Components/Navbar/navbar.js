import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [view, setView] = useState(false);
  const switchView = () => { setView(!view) };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const Navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const user = currentUser;
  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT", payload: user });
  };
  const handleLogin = (e) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <>
        <div className="header jusitfy-conent-between ">
          <div className="container saradiv my-2">
            <div className="d-flex navlogo">
              <h1 className="text-light">Closet</h1>
              <img
                src="LOGO.png"
                className="mx-2 imag"
                style={{ height: "47px", width: "80px" }}
                alt="..."
              />
            </div>
            {button && (
              <>
                <div className="d-flex align-items-center">
                  <Link className="link" to="/map">
                    Here We Go ⚡
                  </Link>
                  {!user && (
                    <button
                      className="btn btn-outline-light"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  )}
                </div>
              </>
            )}
            {!button && (
              <>
                <div className="d-flex listphoto justify-content-between">
                  <button
                    onClick={switchView}
                    className="tinlinevala"
                    style={{ zIndex: "2" }}
                  >
                    <img
                      src="list .png"
                      style={{ width: "2rem" }}
                      alt="..."
                    />
                  </button>
                  <div className="d-flex align-items-center">
                    <img src={user.photoURL} className="aadmi" alt="..." />
                    <button onClick={handleLogout} className="btn btn-light">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>

      {!button && (
        <>
          {view && (
            <>
              <ul className="bg-dark list">
                <li className="text-light">
                  <button type="button" className="btn btn-dark">
                    Home
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" className="btn btn-dark">
                    Service
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" className="btn btn-dark">
                    Products
                  </button>
                </li>
                <li className="text-light">
                  <button type="button" className="btn btn-outline-light">
                    SIGN UP
                  </button>
                </li>
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
