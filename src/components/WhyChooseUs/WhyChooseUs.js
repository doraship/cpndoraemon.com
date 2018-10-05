import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const Reason = (props) => {
  const { name, description, icon, classes } = props;
  return (
    <div className={classes.reasonRoot}>
      <Grid container className={classes.reasonContent} alignItems={'center'}>
        <Grid item xs={2}>
          <Icon color={'primary'} fontSize={'large'}>{icon}</Icon>
        </Grid>
        <Grid item xs={10}>
          <Typography variant={'subheading'} className={classes.textReasonTitle} color={'primary'}>
            {name}
          </Typography>
          <Typography component={'p'} color={'textPrimary'}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const WhyChooseUs = (props) => {

  const { classes, reasons, title, id } = props;

  return (
    <section className={classes.root}  id={id ? id : ''}>
      <div className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant={'title'} className={classes.textTitle} color={'primary'}>
            {title}
          </Typography>
        </div>
        <div className={classes.reasonWrapper}>
          <Grid container spacing={24}>
            {reasons.map(reason => (
              <Grid item md={4} xs={12} key={reason.id}>
                <Reason {...reason} classes={classes} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(WhyChooseUs);
