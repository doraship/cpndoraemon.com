import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Template.styles';

/**
 * Template
 *
 * @author Long Nguyen (longnp95@gmail.com)
 * @date 2018-10-14
 * @version 0.1.0
 */
class Template extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.content}>

          </div>
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
