import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import WebtoonHome from "./container/WebtoonHome";
import Viewer from "./container/Viewer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* exact의 의미는 정확히 이 path에서만 해당 라우팅을 이뤄지도록 하라는 명령인데, 원래는 exact={true}가 맞지만, true는 생략해도 된다는 건 리액트의 기초. */}
          <Route exact path="/" component={Main}/>
          <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
          <Route path="/viewer/:episodeId" component={Viewer} />
        </div>
      </Router>
    )
  }
}

export default App;
