import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { routes, myTheme } from '../../constants';
import NavBar from '../../components/navBar/Navbar';

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
        <MuiThemeProvider theme={myTheme}>
          <AppBar className={classes.appBar} position={'static'}>
            <ToolBar className={classes.content}>
              <Grid container alignItems={'center'}>
                <Grid item xs>
                  <div className={classes.brand}>
                    <Link to={routes.home}>
                      <img className={classes.logo} src={'/brand.png'} alt={''} />
                      <Typography className={classes.title} variant={'title'}>
                        CPN DORAEMON
                      </Typography>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={classes.search}>
                    <Input placeholder={'Mã đơn hàng...'}
                           disableUnderline
                           classes={{
                             root: classes.inputRoot,
                             input: classes.inputInput,
                           }}
                    />
                    <IconButton className={classes.searchButton}>
                      <Icon className={classes.searchIcon}>search</Icon>
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs>
                  <div className={classes.flex}>
                    <div className={classes.grow} />
                    <Button className={classes.button}
                            variant={'outlined'}
                            color={'primary'}
                            component={Link}
                            to={routes.signup}>
                      Đăng ký
                    </Button>
                    <Button className={classes.button}
                            variant={'flat'}
                            color={'primary'}
                            component={Link}
                            to={routes.signin}>
                      Đăng nhập
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </ToolBar>
            <NavBar />
          </AppBar>
        </MuiThemeProvider>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles(myTheme))(Header);
