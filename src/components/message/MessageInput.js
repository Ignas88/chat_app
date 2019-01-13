import React, {Component} from 'react';
import {Consumer} from '../../context';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import uuid from "uuid";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class MessageInput extends Component {
  state = {
    message: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { message } = this.state;

    const newMessage = {
      id: uuid(),
      content: message,
    };

    dispatch({ type: 'ADD_MESSAGE', payload: newMessage });

    this.setState({
      message: ''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { message } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextField
                id="outlined-email-input"
                label="Message"
                className={classes.textField}
                value={message}
                onChange={this.onChange}
                type="text"
                name="message"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </form>
          )
        }}
      </Consumer>
    );
  }
}

MessageInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageInput);