import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Layout from "./components/Layout";
import Jobs from './Jobs';
import Contact from './Contact';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
