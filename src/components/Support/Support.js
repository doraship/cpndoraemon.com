import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const Procedure = (props) => {

  const { classes, title, description, hotLine, id } = props;

  return (
    <section className={classes.root} id={id ? id : ''}>
      <div className={classes.content}>
        <Grid container alignItems='center' justify='center'>
          <Hidden xsDown>
            <Grid item md={1}>
              <img src={'/images/support-icon.png'} alt={''} width={'80%'} />
            </Grid>
          </Hidden>
          <Grid item md={8} xs={12}>
            <Typography variant={'title'} className={classes.textTitle}>
              {title}
            </Typography>
            <Typography component={'p'} color={'textSecondary'}>
              {description}
            </Typography>
          </Grid>
          <Grid item md xs={12}>
            <Typography variant={'subheading'} color={'textSecondary'}>
              Hotline hỗ trợ
            </Typography>
            <Typography variant={'title'} className={classes.textTitle}>
              {hotLine}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Procedure);
