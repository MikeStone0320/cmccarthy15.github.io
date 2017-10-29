import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

///import About from './components/About.jsx';
//import Nav from './components/Nav.jsx';
import components from './components/index.jsx';
console.log(components);
const { About, Nav } = components;

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

ReactDOM.render(
  <Provider store={store} >
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
