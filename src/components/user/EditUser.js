import React, {Component} from 'react';
import {Consumer} from "../../context";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditUser extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    phone: ''
  };

  handleClose = (dispatch) => {
    dispatch({type: 'SHOW_DIALOG', payload: false});
  };

  handleClick = (dispatch, users, e) => {
    e.preventDefault();
    const { name, lastName, email, phone } = this.state;

    const updUser = {
      id: users[0].id,
      name,
      lastName,
      email,
      phone
    };

    dispatch({ type: 'DELETE_USER', payload: updUser.id });
    dispatch({ type: 'ADD_USER', payload: updUser });
    dispatch({type: 'SHOW_DIALOG', payload: false});
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Consumer>
        {value => {
          const {users, dispatch, open} = value;

          return (
            <div>
              <Dialog
                open={open}
                onClose={this.handleClose.bind(this, dispatch)}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
                <form id="form" onSubmit={this.handleClick.bind(this, dispatch, users)}>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    value={this.state.name}
                    onChange={this.onChange}
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    name="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={this.state.email}
                    onChange={this.onChange}
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={this.state.phone}
                    onChange={this.onChange}
                    name="phone"
                    label="Phone Number"
                    type="number"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose.bind(this, dispatch)} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" form="form" color="primary">
                    Submit
                  </Button>
                </DialogActions>
                </form>
              </Dialog>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default EditUser;