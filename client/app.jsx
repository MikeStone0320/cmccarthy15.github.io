import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

///import About from './components/About.jsx';
//import Nav from './components/Nav.jsx';
import components from './components/index.jsx';
const { About, Blog, Crafts, Nav, Projects, Thoughts } = components;

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <div id="first">
        <Nav />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/crafts" component={Crafts} />
          <Route path="/projects" component={Projects} />
          <Route path="/FoodFor" component={Thoughts} />
          <Route path="/about" component={About} />
        </Switch>
        <img src="https://images.pexels.com/photos/240225/pexels-photo-240225.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt="background lights" />
        </div>
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
