import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="navbar">
      <div className="navname">
        <h1>Caryn</h1>
        <h4>Developer, Educator, Crafter</h4>
      </div>
      <div className="navlinks">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/crafts">Crafts</Link>
        <Link to="/FoodFor">Food for Thought</Link>
        <Link to="/resume">Resume</Link>
        <i>mail</i>
      </div>
  </header>
);

export default Nav;
