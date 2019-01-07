import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Login from './containers/Login';
import Main from './containers/Main';

class App extends Component {
  state = {
    auth: false
  };

  render() {
    const { auth } = this.state;

    let routes = (
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
    );

    if (auth === false) {
      routes = (
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      )
    }

    return (
      <Provider>
        <Router>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
