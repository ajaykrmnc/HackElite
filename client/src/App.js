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
import Profile from "Components/Profile/profile";
import MeshBen from "Components/Benifits/MeshBen";
import AvatarCreator from "Components/NewComp/fromImage";
import MeshOption from "Components/Avatar/Option";
import MeshMeasure from "Components/NewComp/fromMeasure";
import EcoMeter from "Components/Ecometer/ecometer";
import FinalCom from "Components/SizeFit2/Page";

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
              <Header user = {currentUser}/>
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
            path="/ecometer"
            element={
              <RequireAuth>
                <>
                <EcoMeter/>
                <Dashboard />
                </>
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
           <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile user = {currentUser}/>
              </RequireAuth>
            }
          />
           <Route
            path="/meshben"
            element={
              <RequireAuth>
                <MeshBen user = {currentUser}/>
              </RequireAuth>
            }
          />
          <Route
            path = "/createAvatar"
            element = {
              <MeshOption />
            }
          />
        </Route>
        <Route path="/auth" element={<Signin />} />
        <Route path = "/fetch" element = {<AvatarCreator/>}/>
        <Route path = "/measure" element = {<MeshMeasure/>}/>
        <Route path = "/final" element = {<FinalCom/>}/>

        <Route
          path="*"
          element={<Navigate to="/" replace />} // This will redirect to "/"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

