import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import { myTheme } from '../../constants';
import NavBar from '../NavBar';

class Header extends Component {

  render() {
    const { classes, profile } = this.props;

    return (
      <header className={classes.root}>
        <AppBar className={classes.appBar} position={'static'}>
          <ToolBar className={classes.content}>
            <Grid container alignItems={'center'}>
              <Grid item xs>
                <div className={classes.brand}>
                  <Link to={'/'} className={classes.navLink}>
                    <Grid container alignItems={'center'}>
                      <img className={classes.logo} src={'/logo.png'} alt={''} />
                      <Typography className={[classes.title, classes.textUppercase].join(' ')} variant={'title'}>
                        {profile.shortName}
                      </Typography>
                    </Grid>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={7}>
                <NavBar {...this.props.navBar} />
                {/*<div className={classes.search}>*/}
                {/*<Input placeholder={'Mã đơn hàng...'}*/}
                {/*disableUnderline*/}
                {/*classes={{*/}
                {/*root: classes.inputRoot,*/}
                {/*input: classes.inputInput,*/}
                {/*}}*/}
                {/*/>*/}
                {/*<IconButton className={classes.searchButton}>*/}
                {/*<Icon className={classes.searchIcon}>search</Icon>*/}
                {/*</IconButton>*/}
                {/*</div>*/}
              </Grid>
              <Grid item xs>
                <div className={classes.flexCenter}>
                  <div className={classes.grow} />
                  <Button className={classes.button}
                          variant={'outlined'}
                          color={'primary'}
                          component={Link}
                          to={'/dang-ky'}>
                    Đăng ký
                  </Button>
                  <Button className={classes.button}
                          variant={'flat'}
                          color={'primary'}
                          component={Link}
                          to={'/dang-nhap'}>
                    Đăng nhập
                  </Button>
                </div>
              </Grid>
            </Grid>
          </ToolBar>
          {/*<NavBar {...this.props.navBar} />*/}
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles(myTheme))(Header);
