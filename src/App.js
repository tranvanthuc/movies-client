import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Test from './components/Test';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/test" component={Test} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
