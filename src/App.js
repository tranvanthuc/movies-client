import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
