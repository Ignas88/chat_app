import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import {Consumer} from "../context";
import EditUser from "../components/user/EditUser";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  spacing: {
    padding: '5px 10px',
    width: '300px'
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class User extends Component {

  onClickBack = () => {
    this.props.history.push('/');
  };

  onClick = (dispatch) => {
    dispatch({type: 'SHOW_DIALOG', payload: true});
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const { users, dispatch } = value;

          return (
            <React.Fragment>
              <Paper className={classes.root} elevation={1}>
                <Grid container justify="space-between" className={classes.spacing}>
                  <Typography variant="h6" color="textSecondary">
                    Name:
                  </Typography>
                  <Typography variant="h6">
                    {users[0].name}
                  </Typography>
                </Grid>
                <Grid container justify="space-between" className={classes.spacing}>
                  <Typography variant="h6" color="textSecondary">
                    Last Name:
                  </Typography>
                  <Typography variant="h6">
                    {users[0].lastName}
                  </Typography>
                </Grid>
                <Divider variant="middle" />
                <Grid container justify="space-between" className={classes.spacing}>
                  <Typography variant="h6" color="textSecondary">
                    Email:
                  </Typography>
                  <Typography variant="h6">
                    {users[0].email}
                  </Typography>
                </Grid>
                <Grid container justify="space-between" className={classes.spacing}>
                  <Typography variant="h6" color="textSecondary">
                    Phone:
                  </Typography>
                  <Typography variant="h6">
                    {users[0].phone}
                  </Typography>
                </Grid>
                <Divider variant="middle" />
                <Grid container justify="space-between" >
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    onClick={this.onClickBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.onClick.bind(this, dispatch)}
                  >
                    Edit
                  </Button>
                </Grid>
              </Paper>
              <EditUser />
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(User));