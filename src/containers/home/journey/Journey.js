import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ImageButton from '../../../components/imageButton';

class Journey extends Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Grid container className={classes.content} spacing={40}>
          <Grid item xs={12} sm>
            <img src={'/images/shipper.jpg'} width={'100%'} alt={''} />
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant={'title'} color={'primary'}>
              Tra cứu hành trình
            </Typography>
            <Grid container className={classes.wrapperTextField}>
              <TextField variant={'outlined'}
                         id={'input-jouney'}
                         margin='normal'
                         helperText={'vd: 03892ru023, 10242r9308...'}
                         label={'Mã đơn hàng'}
                         fullWidth
              />
              <Button variant={'contained'}
                      color={'primary'}
                      className={classes.buttonTextField}>
                Tra cứu
              </Button>
            </Grid>
            <Grid container className={classes.wrapperButtons} spacing={32}>
              <Grid item xs>
                <ImageButton image={{ color: 'green' }}
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
                <Grid container alignItems={'center'} className={classes.hotline}>
                  <Grid xs={3} className={classes.wrapperIcon}>
                    <Icon fontSize={'large'} color={'textSecondary'}>face</Icon>
                  </Grid>
                  <Grid xs container>
                    <Typography variant={'subheading'}>
                      HOTLINE HỖ TRỢ
                    </Typography>
                    <Typography variant={'title'} color={'primary'}>
                      0123465789
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default withStyles(styles)(Journey);
