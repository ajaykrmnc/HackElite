import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Wardrobe from "./Components/Wardrobe/wardrobe";
import Signin from "./Components/Login/login";
import { Routes, Route, Link, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import './App.css'
import Combined from "./Components/SizeFit/Combined";
import Intro from "./Intro";
import Dashboard from "./Components/Dashboard/Dashboard";
import OutfitRecommendation from "./Components/Reccomendation/OutfitRecommendation";
import Home from "./Components/Front/Home";
import Footer from "Components/Footer";
import Header from "Components/Header/Header";


function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className = "Down">
                <Outlet />
              </div>
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/closet"
            element={
              <RequireAuth>
                <Wardrobe currentUser={currentUser} />
              </RequireAuth>
            }
          />
          <Route
            path="/map"
            element={
              <RequireAuth>
                <Combined />
              </RequireAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Intro />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/recommendation"
            element={
              <RequireAuth>
                <OutfitRecommendation />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/auth" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

