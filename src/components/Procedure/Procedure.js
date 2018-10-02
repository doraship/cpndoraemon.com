import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardText from '../CardText';

const Procedure = (props) => {

  const { classes, procedures, title, description } = props;

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant={'title'} className={classes.textTitle} color={'primary'}>
            {title}
          </Typography>
          <Typography component={'p'} color={'textSecondary'}>
            {description}
          </Typography>
        </div>
        <Grid container spacing={16} justify={'center'} className={classes.procedureWrapper}>
          {procedures.map(procedure => (
            <Grid item lg md={6} xs={12} key={procedure.id} className={classes.procedureCard}>
              <CardText {...procedure} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Procedure);
