import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Procedure = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <Grid container alignItems='center' justify='center'>
          <Grid item xs={1}>
            <img src={'/images/support-icon.png'} alt={''} width={'80%'} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant={'title'} className={classes.textTitle}>
              Bạn cần trợ giúp?
            </Typography>
            <Typography component={'p'} color={'textSecondary'}>
              Bạn có thể liên hệ với chúng tôi để được giải quyết những thắc mắc
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant={'subheading'} color={'textSecondary'}>
              Hotline hỗ trợ
            </Typography>
            <Typography variant={'title'} className={classes.textTitle}>
              0123456789
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Procedure);
