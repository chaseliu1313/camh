import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Hightlights from './pages/Highlight';
import Pathways from './pages/Pathway/Pathways';
import Assessment from './pages/Assessment/Assessment';
import Pears from './pages/Assessment/Pears';
import Tools from './pages/Assessment/Tools';
import Treatment from './pages/Treatment/Treatment';
import Mild from './pages/Treatment/Mild';
import Severe from './pages/Treatment/Severe';
import Psychosocial from './pages/Treatment/Psychosocial';
import Psychotherapy from './pages/Treatment/Psychotherapy';
import PsychoMild from './pages/Treatment/PsychotherapyMild';
import { TreatmentStore } from './store/store';
import ReTools from './pages/Resources/tools';
import LocalHelp from './pages/Resources/localHelp';
import CrisisLines from './pages/Resources/crisisLines';
import Reference from './pages/Resources/references';
import DevelopmentTeam from './pages/Contributors';
import Guide from './pages/Guide';
import Faq from './pages/Resources/faq';
function App() {
  return (
    <TreatmentStore>
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
              <Route path="/treatment" exact component={Treatment} />
              <Route path="/treatment/mild" exact component={Mild} />
              <Route path="/treatment/severe" exact component={Severe} />
              <Route path="/orientation" exact component={Guide} />
              <Route
                path="/treatment/psycosocialStrategies"
                exact
                component={Psychosocial}
              />
              <Route
                path="/treatment/psychotherapy"
                exact
                component={Psychotherapy}
              />
              <Route
                path="/treatment/psychotherapy_mild"
                exact
                component={PsychoMild}
              />
              <Route path="/resources/tools" component={ReTools} />
              <Route path="/resources/help" exact component={LocalHelp} />
              <Route path="/resources/reference" exact component={Reference} />
              <Route
                path="/resources/crisisLines"
                exact
                component={CrisisLines}
              />
              <Route path="/devTeam" exact component={DevelopmentTeam} />
              <Route path="/resources/faq" exact component={Faq} />
            </Switch>
          </main>
          <footer className="App-footer">
            <div>
              Copyright © 2020 Cundill Centre for Child and Youth Depression
              camh.{'    '}
              <Link to="/devTeam" className="footerLink">
                Development Team
              </Link>
            </div>
          </footer>
        </div>
      </Router>
    </TreatmentStore>
  );
}

export default App;
