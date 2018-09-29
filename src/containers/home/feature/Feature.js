import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ImageButton from '../../../components/imageButton';

const Feature = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Grid container spacing={32} className={classes.content}>
        <Grid item xs>
          <ImageButton image={{ color: 'lightBlue' }}
                       children={
                         <Grid container>
                           <Grid xs={3}>
                             <Icon fontSize={'large'}>description</Icon>
                           </Grid>
                           <Grid container xs>
                             <Typography variant={'subheading'} className={classes.title}>
                               TẠO ĐƠN HÀNG NHANH
                             </Typography>
                             <Typography variant={'caption'} className={classes.description}>
                               Rút ngắn thời gian tạo đơn hàng
                             </Typography>
                           </Grid>
                         </Grid>
                       }
          />
        </Grid>
        <Grid item xs>
          <ImageButton image={{ color: 'lightBlue' }}
                       children={
                         <Grid container>
                           <Grid xs={3}>
                             <Icon fontSize={'large'}>description</Icon>
                           </Grid>
                           <Grid container xs>
                             <Typography variant={'subheading'} className={classes.title}>
                               TẠO ĐƠN HÀNG NHANH
                             </Typography>
                             <Typography variant={'caption'} className={classes.description}>
                               Rút ngắn thời gian tạo đơn hàng
                             </Typography>
                           </Grid>
                         </Grid>
                       }
          />
        </Grid>
        <Grid item xs>
          <ImageButton image={{ color: 'lightBlue' }}
                       children={
                         <Grid container>
                           <Grid xs={3}>
                             <Icon fontSize={'large'}>description</Icon>
                           </Grid>
                           <Grid container xs>
                             <Typography variant={'subheading'} className={classes.title}>
                               TẠO ĐƠN HÀNG NHANH
                             </Typography>
                             <Typography variant={'caption'} className={classes.description}>
                               Rút ngắn thời gian tạo đơn hàng
                             </Typography>
                           </Grid>
                         </Grid>
                       }
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default withStyles(styles)(Feature);
