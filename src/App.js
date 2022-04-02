import React from "react";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import AddUser from "./ReactUser/pages/users/Adduser";
import EditUser from "./ReactUser/pages/users/Edit";

import Home from "./ReactUser/pages/Home";
import About from "./ReactUser/pages/About";
import Contact from "./ReactUser/pages/Contact";
import Navbar from "./ReactUser/layout/Navbar";
import NotFound from "./ReactUser/pages/NotFound";
import Homeuser from "./ReactUser/pages/User";
import Resume from "./ReactUser/pages/Resume";
import Project from "./ReactUser/pages/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User" element={<Homeuser />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/Edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
