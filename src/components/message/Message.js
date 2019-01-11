import React, {Component} from 'react';
import {Consumer} from '../../context';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    minWidth: 275,
    margin: '0 10px'
  }
};

class Message extends Component {


  render() {
    const { classes, author, content } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardHeader title={author}/>
            <CardContent>
              <Typography component="p">
                {content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);