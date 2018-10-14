import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './CallNow.styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

/**
 * CallNow
 *
 * @author Long Nguyen (longnp95@gmail.com)
 * @date 2018-10-14
 * @version 0.1.0
 */
const CallNow = (props) => {

  const { classes, hotLine } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Button variant={'fab'} component={'a'} color={'primary'} className={classes.button} href={'tel:' + hotLine}>
            <Icon fontSize={'large'}>call</Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

CallNow.propTypes = {
  classes: PropTypes.object.isRequired,
  hotLine: PropTypes.string.isRequired,
};

export default withStyles(styles)(CallNow);
