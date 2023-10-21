import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Signin from "./Components/Login/login";
import { Routes, Route, Link, BrowserRouter,Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import MeshComponent from "./Components/SizeFit/Extract";


function App() {
    const {currentUser} = useContext(AuthContext)
    const RequireAuth = ({ children }) => {
      return currentUser ? children : <Navigate to="/auth" />;
    };
    return (
      <>
        <div className="container">
        </div>
        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="auth" element={<Signin />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home currentUser={currentUser}/>
                </RequireAuth>
              }
            />
            <Route path = '/map' element = {
                <RequireAuth>
                  <MeshComponent currentUser={currentUser}/>
                </RequireAuth>
              }
            />
  

          </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
