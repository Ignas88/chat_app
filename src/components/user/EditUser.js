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
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send
                    updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
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