import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    email: '',
    password: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes, clickHandler } = this.props;
    const { email, password } = this.state;
    const isValid = email && password;

    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              value={email}
              onChange={this.onChange}
              type="email"
              name="email"
              autoComplete="email"
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
              onClick={clickHandler}
              disabled={!isValid}
            >
              LogIn
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);