import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
  state = {
    onChange: e => this.setState({ [e.target.name]: e.target.value }),
    message: '',
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
    messages: [
      {
        id: 1,
        author: 'Bat',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque delectus dolore, dolores estex ' +
          'nam nemo neque optio porro possimus, quibusdam, quisquam repudiandae rerum tenetur ullam vel voluptatem voluptatibus.'
      },
      {
        id: 2,
        author: 'Peter',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ipsa laborum molestiae praesentium, ' +
          'quidem vero! Assumenda blanditiis cupiditate dolores est incidunt maxime mollitia nobis, omnis perferendis quo sed' +
          ' suscipit vel?'
      },
      {
        id: 3,
        author: 'Jenifer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem consectetur eaque error impedit' +
          ' minima minus nihil numquam reiciendis, ullam. Alias aut beatae commodi cum officia quibusdam reiciendis sequi ' +
          'temporibus?'
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