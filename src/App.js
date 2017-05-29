import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './home/Home.js';
import About from './about/About.js';
import Work from './work/Work.js';

const Nav = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
      </ul>
    </nav>
  </div>
)

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/work" component={Work}/>
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Nav />
          </header>
          <main>
            <Main />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
