import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Message from './Message';

class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </Grid>
      </React.Fragment>
    );
  }
}

export default Messages;