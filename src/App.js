import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Hightlights from './pages/Highlight';
import Pathways from './pages/Pathway/Pathways';
import Assessment from './pages/Assessment/Assessment';
import Pears from './pages/Assessment/Pears';
import Tools from './pages/Assessment/Tools';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NaviBar />
        </header>
        <main className="App-main">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/overview" exact component={Hightlights} />
            <Route path="/overview/pathways" exact component={Pathways} />
            <Route path="/assessment" exact component={Assessment} />
            <Route path="/assessment/pears" exact component={Pears} />
            <Route path="/assessment/tools" exact component={Tools} />
          </Switch>
        </main>
        <footer className="App-footer">
          Copyright © 2020 Cundill Centre for Child and Youth Depression camh
        </footer>
      </div>
    </Router>
  );
}

export default App;
