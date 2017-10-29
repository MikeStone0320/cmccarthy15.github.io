import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Nav = () => (
  <Router>
    <div className="navbar">
      <div className="navname">
        <h1>Caryn</h1>
        <h4>Developer, Educator, Crafter</h4>
      </div>
      <div className="navlinks">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/crafts">Crafts</Link>
        <Link to="/thoughtfood">Food for Thought</Link>
        <Link to="/resume">Resume</Link>
        <i>mail</i>
      </div>
    </div>
  </Router>
);

export default Nav;
