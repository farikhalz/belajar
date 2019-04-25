import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './containers/home';
import Dashboard from './containers/dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
