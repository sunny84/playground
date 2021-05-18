import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from './container/Main';
import Viewer from './container/Viewer';
import FreshHome from './container/FreshHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/fresh/:freshId" component={FreshHome} />
          <Route path="/viewer/:visitorId" component={Viewer} />
        </div>
      </Router>
    )
  }
}

export default App;
