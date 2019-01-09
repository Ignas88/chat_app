import React, {Component} from 'react';
import {Consumer} from '../../context';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 220
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pos: {
    fontSize: 25,
    fontWeight: 600
  },
};

const options = [
  'User Info',
  'Log Out'
];

const ITEM_HEIGHT = 48;

class UserMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Consumer>
        {value => {

          const { users } = value;

          return (
            <div>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography className={classes.pos} color="textSecondary">
                    {users[0].name}
                  </Typography>
                  <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <MoreVertIcon/>
                  </IconButton>
                </CardContent>
              </Card>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >
                {options.map(option => (
                  <MenuItem key={option} onClick={this.handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMenu);