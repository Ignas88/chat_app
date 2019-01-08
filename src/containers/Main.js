import React, {Component} from 'react';
import {Consumer} from "../context";

class Main extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <h1>{value.name}</h1>
            </div>
            )
        }}
      </Consumer>


    );
  }
}

export default Main;