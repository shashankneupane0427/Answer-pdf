import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Home from "./components/pages/Home/Home";
import Summary from "./components/pages/Summary/Summary"; 

const App = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/summary" element={<Summary />} /> 
      </Routes>
    </div>
  );
};

export default App;
