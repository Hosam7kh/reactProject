import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/MainServices";
import About from "./Pages/About/About";
import Article from "./Pages/Article/Article";

function App() {
  return (
    <>
      <Header name="BizBoard" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
