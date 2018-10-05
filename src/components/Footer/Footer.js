import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Footer = (props) => {
  const { classes, profile } = props;

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
              <Typography component={'p'} color={'textSecondary'}>
                {props.PR}
              </Typography>
              <div className={classes.addressWrapper}>
                <Typography component={'p'} color={'textSecondary'}>
                  Địa chỉ: {profile.address}.
                </Typography>
                <Typography component={'p'} color={'textSecondary'}>
                  Số điện thoại: {profile.hotLine}.
                </Typography>
              </div>
              <Typography color={'textSecondary'} className={classes.link}>
                <a href={profile.facebook.url} target='_blank'>Facebook</a>
                <span className={classes.vdivider}>/</span>
                <a href={profile.github.url} target='_blank'>Github</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
          <div className={classes.copyright}>
            <Typography color={'textSecondary'}>
              {props.copyright}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);
