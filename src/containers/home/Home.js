import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import ImageSlider from '../../components/imageSlider';
import Journey from './journey/Journey';
import Feature from './feature/Feature';
import Price from './price/Price';
import Procedure from './procedure/Procedure';
import Support from './support/Support';
import WhyChooseUs from './whyChooseUs/WhyChooseUs';
import Manufacturer from './manufacturer/Manufacturer';
import { myTheme } from '../../constants';

const slides = [
  {
    url: '/images/slides/1.png',
  },
  {
    url: '/images/slides/2.png',
  },
];

class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={myTheme}>
          <ImageSlider className={classes.slider}
                       slides={slides} />
          <div className={classes.maxWidth1208}>
            <Journey />
            <Feature />
          </div>
          <Price />
          <div className={classes.maxWidth1208}>
            <Procedure />
          </div>
          <Support />
          <div className={classes.maxWidth1208}>
            <WhyChooseUs />
          </div>
          <Manufacturer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(connect()(withStyles(styles)(Home)));
