import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../../Header';
import Footer from '../../Footer';
import { myTheme } from '../../../constants';
import styles from './styles';

class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={myTheme}>
        <Header />
        <section className={classes.root}>
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
        </section>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(NotFound);
