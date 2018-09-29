import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';

class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textBox}>
            <Typography className={classes.message}>
              Trang web không tồn tại hoặc đã bị xóa
            </Typography>
            <Button className={classes.buttonHome} component={Link} to={'/'} variant={'outlined'}>
              Quay lại trang chủ
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);
