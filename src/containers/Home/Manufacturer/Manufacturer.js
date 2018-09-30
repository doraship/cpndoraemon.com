import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const list = [
  {
    company: 'Lazada',
    url: 'https://lazada.vn',
    logo: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1f6tgdAfb_uJjSsD4XXaqiFXa.png',
    id: 0,
  },
  {
    company: 'Tiki',
    url: 'https://tiki.vn',
    logo: 'https://mediaz.vn/wp-content/uploads/2017/05/logo-tiki.png',
    id: 1,
  },
  {
    company: 'Tiki',
    url: 'https://tiki.vn',
    logo: 'https://mediaz.vn/wp-content/uploads/2017/05/logo-tiki.png',
    id: 2,
  },
  {
    company: 'Tiki',
    url: 'https://tiki.vn',
    logo: 'https://mediaz.vn/wp-content/uploads/2017/05/logo-tiki.png',
    id: 3,
  },
];

class Manufacturer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textCenter}>
            <Typography variant={'title'} className={classes.textWhiteTitle}>
              Đối tác của CPN Doraemon
            </Typography>
          </div>
          <Grid container spacing={24} justify={'center'} className={classes.manufacturerWrapper}>
            {list.map(item => (
              <Grid item xs={6} md={3} key={item.id}>
                <ButtonBase component={'a'} href={item.url} target={'_blank'}>
                  <div className={classes.logoWrapper}>
                    <img src={item.logo} width={'75%'} alt={item.company} />
                  </div>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Manufacturer);
