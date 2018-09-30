import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import ImageSlider from '../../components/ImageSlider';
import Journey from './Journey/Journey';
import Feature from './Feature/Feature';
import Price from './Price/Price';
import Procedure from './Procedure/Procedure';
import Support from './Support/Support';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Manufacturer from './Manufacturer/Manufacturer';
import { myTheme } from '../../constants';

const slides = [
  {
    url: '/images/slides/1.png',
    id: 0,
  },
  {
    url: '/images/slides/2.png',
    id: 1,
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
