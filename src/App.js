import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </nav>
      <div className="main">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
      </div>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <main>
        <AppRouter />
      </main>
    );
  }
}

export default App;
