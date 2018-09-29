import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
import { routes } from '../../constants/index';
import NavBar from '../../components/navBar/Navbar';

const realTheme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3bacf0',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
        <MuiThemeProvider theme={realTheme}>
          <AppBar className={classes.appBar} position={'static'}>
            <ToolBar className={classes.content}>
              <Grid xs>
                <div className={classes.brand}>
                  <Link to={routes.home}>
                    <img className={classes.logo} src={'/brand.png'} alt={''} />
                    <Typography className={classes.title} variant={'title'}>
                      CPN DORAEMON
                    </Typography>
                  </Link>
                </div>
              </Grid>
              <Grid xs={3}>
                <div className={classes.search}>
                  <Input placeholder={'Nhập mã vận đơn...'}
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
              <Grid xs>
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
            </ToolBar>
            <NavBar/>
          </AppBar>
        </MuiThemeProvider>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles(realTheme))(Header);
