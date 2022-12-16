import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReactRouterExample, AboutMe, Resume, Portfolio } from './pages'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <ReactRouterExample>
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </ReactRouterExample>
    </div>
  );
}

export default App;
