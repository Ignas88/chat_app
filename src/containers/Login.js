import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {Consumer} from "../context";

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Login extends Component {
  state = {
    name: '',
    password: ''
  };

  onClick = (dispatch, e) => {
    e.preventDefault();
    const { name } = this.state;

    const newUser = {
      id: uuid(),
      name,
      lastName: '',
      email: '',
      phone: ''
    };

    dispatch({ type: 'ADD_USER', payload: newUser });
    dispatch({type: 'CHANGE_AUTH', payload: true});
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { name, password } = this.state;
    const isValid = name && password;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <React.Fragment>
              <Paper className={classes.root} elevation={2}>
                <form className={classes.container}>
                  <TextField
                    id="outlined-email-input"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    onChange={this.onChange}
                    type="text"
                    name="name"
                    margin="dense"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    value={password}
                    onChange={this.onChange}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                    variant="outlined"
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.onClick.bind(this, dispatch)}
                    disabled={!isValid}
                  >
                    LogIn
                  </Button>
                </form>
              </Paper>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);