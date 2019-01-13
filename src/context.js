import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case 'CHANGE_AUTH':
      return {
      ...state,
      auth: action.payload
    };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [action.payload, ...state.messages]
      };
    default:
      return state;
  }
};

export class Provider extends Component{
  state = {
    auth: false,
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
    ],
    messages: [],
    dispatch: action => {
      this.setState(state =>
        reducer(state, action))
    }
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