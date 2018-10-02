import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles, { navLinkStyles } from './styles';

const NavLink = withStyles(navLinkStyles)(Button);

const NavBar = (props) => {
  const { classes, menus } = props;

  return (
    <nav>
      <div className={classes.root}>
        <div className={classes.content}>
          {menus.map(menu => (
            <NavLink component={Link} to={menu.url} key={menu.id}>
              {menu.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default withStyles(styles)(NavBar);
