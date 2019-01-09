import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MoodIcon from '@material-ui/icons/Mood';
import UserMenu from './UserMenu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
});

class Sidebar extends Component {


  render() {
    const {classes} = this.props;

    return (
      <Consumer>
        {value => {

          const { users } = value;

          return (
            <div className={classes.root}>
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
                anchor="left"
              >
                <div className={classes.toolbar}>
                  <UserMenu />
                </div>
                <List>
                  {users.map((user, index) => (
                    <ListItem button key={user.id}>
                      <ListItemIcon>{index % 2 === 0 ? <MoodBadIcon/> : <MoodIcon/>}</ListItemIcon>
                      <ListItemText primary={user.name} secondary={user.lastName}/>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);