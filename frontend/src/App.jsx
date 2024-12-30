import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
