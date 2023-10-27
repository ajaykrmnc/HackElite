import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./header.css";
import { Form,Button,Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
 import Logo from "assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faShoppingBag, faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "context/AuthContext"

function Header({user}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const Navigate=useNavigate();
  const {dispatch} = useContext(AuthContext)
  const handleLogout=(e)=>{
      dispatch({type:"LOGOUT", payload:user})
  }
  const handleLogin=(e)=>{
        Navigate('/auth');
  }

  return (
    <div className="">
        {/* Header starts */}
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" width="50" />
            </Link>
          </div>

          {/* Navbar starts */}
          <div className="navbar">
            <Link to="/man" className="links">
              Man
            </Link>
            <Link to="/women" className="links">
              Women
            </Link>
            <Link to="/kids" className="links">
              Kids
            </Link>
            <Link to="/homeandliving" className="links">
              Home & Livings
            </Link>
            <Link to="/beauty" className="links">
              Beauty
            </Link>
            <Link to="/singlepage" className="links">
              Single Page
            </Link>
          </div>
          {/* Navbar ends */}

          {/* SearchBar Starts */}
          <div style = {{display: 'flex', alignItems: 'center'}}>
            <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                </Row>
            </Form>
        </div>
          
          {/* SearchBar Ends */}

          {/* Notification Starts */}
          <div className="notifications">
            <div
              className={`notification ${activeTab === 1 && "active"}`}
              onClick={() => handleTabChange(1)}
            >
            <DropdownButton id="dropdown-light-button" variant = "light" title={<FontAwesomeIcon icon={faUser} />}>
                <Dropdown.Item href="/map">Mesh</Dropdown.Item>
                <Dropdown.Item href="/closet">Closet</Dropdown.Item>
                <Dropdown.Item href="/">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
            </div>
            <div
              className={`notification ${activeTab === 0 && "active"}`}
              onClick={() => handleTabChange(0)}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div
              className={`notification ${activeTab === 2 && "active"}`}
              onClick={() => handleTabChange(2)}
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
          </div>
          {/* Notification Ends */}
        </div>
        {/* Header ends */}

    </div>
  );
}

export default Header;
