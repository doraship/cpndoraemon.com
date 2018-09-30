import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container direction={'column'} className={classes.content}>
        <Grid item xs>
          <Grid container className={classes.infomationWrapper}>
            <Hidden xsDown>
              <Grid item md={1}>
                <img className={classes.logo} src={'/logo.png'} alt={''} width={'100%'} />
              </Grid>
            </Hidden>
            <Grid item md={4} xs={12} className={classes.information}>
              <Typography color={'textSecondary'}>
                Material is an adaptable system of guidelines, components, and tools that support the best practices of
                user interface design. Backed by open-source code, Material streamlines collaboration between designers
                and developers, and helps teams quickly build beautiful products.
              </Typography>
              <Typography color={'textSecondary'} className={classes.link}>
                <a href={'#'}>Facebook</a>
                <span className={classes.vdivider}>/</span>
                <a href={'#'}>Github</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
          <div className={classes.copyright}>
            <Typography color={'textSecondary'}>
              Copyright © 2018 CPN Doraemon. All rights reserved.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);