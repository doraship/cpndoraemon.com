import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { routes } from '../../constants';
import styles, { navLinkStyles } from './styles';

const NavLink = withStyles(navLinkStyles)(Button);

const NavBar = (props) => {
  const { classes } = props;

  return (
    <nav>
      <div className={classes.root}>
        <div className={classes.content}>
          <NavLink component={Link} to={routes.home}>
            Trang chủ
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Giới thiệu
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Bảng giá
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Quy trình giao hàng
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Tin tức và thông báo
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Đối tác
          </NavLink>
          <NavLink component={Link} to={routes.none}>
            Liên hệ
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withStyles(styles)(NavBar);
