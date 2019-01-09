import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
  state = {
    users: [
      {
        id: 1,
        name: 'John',
        lastName: 'Doe'
      },
      {
        id: 2,
        name: 'Peter',
        lastName: 'Parker'
      },{
        id: 3,
        name: 'Bat',
        lastName: 'Man'
      },
      {
        id: 4,
        name: 'Jenifer',
        lastName: 'Lopez'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;