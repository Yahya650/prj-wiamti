import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutIndex from "./web/layouts/LayoutIndex";
import HomeIndex from "./web/pages/home/HomeIndex";
import ContactIndex from "./web/pages/contact/ContactIndex";
import AboutUsIndex from "./web/pages/about_us/AboutUsIndex";
import OurServices from "./web/pages/services/OurServices";
// import 'lightbox2/dist/css/lightbox.css';
// import 'lightbox2/dist/js/lightbox.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutIndex />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeIndex />} />
          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/about-us" element={<AboutUsIndex />} />
          <Route path="/our-services" element={<OurServices />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
