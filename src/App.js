import React, { Component } from 'react';
import { Route, Switch, Redirect  } from "react-router-dom";
import {Consumer} from "./context";
import Login from './containers/Login';
import Main from './containers/Main';

class App extends Component {

  render() {

    return (
      <Consumer>
        {value => {
          const { auth } = value;

          let routes = (
            <Switch>
              <Route path="/login" component={Login} />
              <Redirect from="/" to="/login" />
            </Switch>
          );

          if (auth) {
            routes = (
              <Switch>
                <Route exact path="/" component={Main}/>
                <Redirect to="/" />
              </Switch>
            )
          }

          return (
            <React.Fragment>
              {routes}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default App;
