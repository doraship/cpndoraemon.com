import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardPrice from '../CardPrice/index';

class Price extends Component {

  render() {
    const { classes, products, title } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textCenter}>
            <Typography variant={'title'} className={classes.textWhiteTitle}>
              {title}
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
