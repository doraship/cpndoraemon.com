import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

class Manufacturer extends Component {

  render() {
    const { classes, title, companies, id } = this.props;

    return (
      <section className={classes.root} id={id ? id : ''}>
        <div className={classes.content}>
          <div className={classes.textCenter}>
            <Typography variant={'title'} className={classes.textWhiteTitle}>
              {title}
            </Typography>
          </div>
          <Grid container spacing={24} justify={'center'} className={classes.manufacturerWrapper}>
            {companies.map(company => (
              <Grid item xs={6} md={3} key={company.id}>
                <ButtonBase component={'a'} href={company.url} target={'_blank'}>
                  <div className={classes.logoWrapper}>
                    <img src={company.logo} width={'75%'} alt={company.name} />
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
