import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { profile, footer as footerInfo } from '../../constants';

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
              <Typography component={'p'} color={'textSecondary'}>
                {footerInfo.PR}
              </Typography>
              <div className={classes.addressWrapper}>
                <Typography color={'textSecondary'}>
                  Địa chỉ: <a href={'https://www.google.com.vn/search?q=' + profile.address}
                              target={'_blank'}>
                  {profile.address}
                </a>.
                </Typography>
                <Typography color={'textSecondary'}>
                  Số điện thoại: <a href={'tel:' + profile.hotLine}>{profile.hotLine}</a>.
                </Typography>
                <Typography href={'#'} color={'textSecondary'}>
                  Facebook: <a href={profile.facebook.url} target='_blank'>{profile.facebook.name}</a>.
                </Typography>
              </div>
              {/*<Typography color={'textSecondary'} className={classes.link}>*/}
              {/*<a href={profile.facebook.url} target='_blank'>Facebook</a>*/}
              {/*<span className={classes.vdivider}>/</span>*/}
              {/*<a href={profile.github.url} target='_blank'>Github</a>*/}
              {/*</Typography>*/}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
          <div className={classes.copyright}>
            <Typography color={'textSecondary'}>
              {footerInfo.copyright}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Footer);
