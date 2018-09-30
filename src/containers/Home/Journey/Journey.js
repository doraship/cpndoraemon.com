import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ImageButton from '../../../components/ImageButton';

class Journey extends Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Grid container className={classes.content} spacing={40}>
          <Hidden mdDown>
            <Grid item sm>
              <img src={'/images/shipper.jpg'} width={'100%'} alt={''} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm>
            <Typography variant={'title'} color={'primary'}>
              TRA CỨU ĐƠN HÀNG
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
            <Hidden xsDown>
              <Grid container className={classes.wrapperButtons} spacing={32}>
                <Grid item xs>
                  <ImageButton image={{ color: 'green' }}
                               children={
                                 <Grid container>
                                   <Hidden xsDown>
                                     <Grid item md={3} className={classes.center}>
                                       <Icon fontSize={'large'}>description</Icon>
                                     </Grid>
                                   </Hidden>
                                   <Grid item md>
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
                    <Hidden xsDown>
                      <Grid item md={3} className={classes.center}>
                        <Icon fontSize={'large'} color={'disabled'}>face</Icon>
                      </Grid>
                    </Hidden>
                    <Grid item md>
                      <Typography variant={'subheading'}>
                        HOTLINE HỖ TRỢ
                      </Typography>
                      <Typography variant={'title'} color={'primary'}>
                        0966990380
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default withStyles(styles)(Journey);
