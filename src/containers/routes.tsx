import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";

interface RouteProps {}

const Root: React.FC<RouteProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
