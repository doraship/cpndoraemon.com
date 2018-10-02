import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const Procedure = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <Grid container alignItems='center' justify='center'>
          <Hidden xsDown>
            <Grid item md={1}>
              <img src={'/images/support-icon.png'} alt={''} width={'80%'} />
            </Grid>
          </Hidden>
          <Grid item md={8} xs={12}>
            <Typography variant={'title'} className={classes.textTitle}>
              Bạn cần trợ giúp?
            </Typography>
            <Typography component={'p'} color={'textSecondary'}>
              Bạn có thể liên hệ với chúng tôi để được giải quyết những thắc mắc
            </Typography>
          </Grid>
          <Grid item md xs={12}>
            <Typography variant={'subheading'} color={'textSecondary'}>
              Hotline hỗ trợ
            </Typography>
            <Typography variant={'title'} className={classes.textTitle}>
              0966990380
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Procedure);
