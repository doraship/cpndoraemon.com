import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ImageButton from '../../components/ImageButton';

const Feature = (props) => {
  const { classes, features } = props;

  return (
    <section className={classes.root}>
      <Grid container spacing={32} className={classes.content}>
        {features.map(feature => (
          <Grid item md xs={12} key={feature.id} className={classes.button}>
            <ImageButton image={{ color: 'lightBlue' }}
                         href={feature.url}
                         children={
                           <Grid container>
                             <Grid item md={3} xs={2} className={classes.center}>
                               <Icon fontSize={'large'}>description</Icon>
                             </Grid>
                             <Grid item md xs>
                               <Grid container direction={'column'} alignItems={'flex-start'}>
                                 <Typography variant={'subheading'} className={classes.title}>
                                   {feature.name}
                                 </Typography>
                                 <Typography variant={'caption'} className={classes.description}>
                                   {feature.description}
                                 </Typography>
                               </Grid>
                             </Grid>
                           </Grid>
                         }
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default withStyles(styles)(Feature);
