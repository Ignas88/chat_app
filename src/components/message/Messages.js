import React, {Component} from 'react';
import {Consumer} from '../../context';
import Grid from '@material-ui/core/Grid';
import Message from './Message';

class Messages extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {messages} = value;

          return (
            <React.Fragment>
              <Grid container spacing={24} wrap="wrap-reverse">
                {messages.map(message => (
                  <Message
                    key={message.id}
                    content={message.content}
                  />
                ))}
              </Grid>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Messages;