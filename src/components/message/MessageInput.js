import React, {Component} from 'react';
import {Consumer} from '../../context';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const { message, onChange } = value;

          return (
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="outlined-email-input"
                label="Message"
                className={classes.textField}
                value={message}
                onChange={onChange}
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