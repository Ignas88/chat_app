import React, {Component} from 'react';
import {Consumer} from "../../context";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditUser extends Component {

  handleClose = (dispatch) => {
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
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    value={users[0].name}
                    onChange={this.onChange}
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={users[0].lastName}
                    onChange={this.onChange}
                    name="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={users[0].email}
                    onChange={this.onChange}
                    name="email"
                    label="Email Address"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={users[0].phone}
                    onChange={this.onChange}
                    name="phone"
                    label="Phone Number"
                    type="text"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose.bind(this, dispatch)} color="primary">
                    Cancel
                  </Button>
                  <Button color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default EditUser;