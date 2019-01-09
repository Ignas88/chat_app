import React, { Component } from 'react';
import { Route, Switch, Redirect  } from "react-router-dom";
import Login from './containers/Login';
import Main from './containers/Main';

class App extends Component {
  state = {
    auth: false
  };

  clickHandler = () => {
    this.setState({
      auth: true
    })
  };

  render() {
    const { auth } = this.state;

    let routes = (
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} clickHandler={this.clickHandler} />} />
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
    );
  }
}

export default App;
