import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Consumer} from '../context';
import Sidebar from '../components/sidebar/Sidebar';
import MessageInput from '../components/MessageInput';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

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
                {/*<div>*/}
                  {/*message*/}
                {/*</div>*/}

                <div className={classes.toolbar} />
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                  facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                  gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                  donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                  Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                  imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                  arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                  donec massa sapien faucibus et molestie ac.
                </Typography>
                  <MessageInput />
              </main>
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