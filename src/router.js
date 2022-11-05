import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;