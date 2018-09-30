import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardPrice from '../../../components/CardPrice';

const products = [
  {
    location: 'Nội thành Hà Nội',
    name: 'GIAO HÀNG TIẾT KIỆM',
    price: '20.000 VNĐ',
    id: 0,
  },
  {
    location: 'Nội thành Hà Nội',
    name: 'GIAO HÀNG NHANH 2H',
    price: '30.000 VNĐ',
    id: 1,
  },
];

class Price extends Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textCenter}>
            <Typography variant={'title'} className={classes.textWhiteTitle}>
              Bảng giá vận chuyển
            </Typography>
          </div>
          <Grid container spacing={32} justify={'center'} className={classes.cardWrapper}>
            {products.map(product => (
              <Grid item md={4} xs={12} key={product.id}>
                <CardPrice {...product} />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Price);
