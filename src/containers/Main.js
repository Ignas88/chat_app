import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Consumer} from '../context';
import Sidebar from '../components/sidebar/Sidebar';
import Messages from '../components/message/Messages';
import MessageInput from '../components/message/MessageInput';

const drawerWidth = 240;

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 240
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-start',
    padding: 25,
    height: '80%',
    overflow: 'scroll',
    overflowX: 'hidden',
    marginTop: 65
  },
};

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <div className={classes.root}>
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                    ChatApp
                  </Typography>
                </Toolbar>
              </AppBar>
              <Sidebar />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                  <Messages />
              </main>
              <MessageInput />
            </div>
            )
        }}
      </Consumer>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);