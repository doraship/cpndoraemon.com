import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import ImageSlider from '../../components/ImageSlider';
import Journey from '../Journey/Journey';
import Feature from '../Feature/Feature';
import Price from '../../components/Price';
import Procedure from '../../components/Procedure';
import Support from '../../components/Support';
import WhyChooseUs from '../../components/WhyChooseUs';
import Manufacturer from '../../components/Manufacturer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  myTheme,
  homePage as homePageInfo,
  header as headerInfo,
  footer as footerInfo,
  profile,
} from '../../constants';

class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={myTheme}>
        <Header {...headerInfo} profile={profile} />
        <div className={classes.root}>
          <ImageSlider {...homePageInfo.slider} />
          <Journey classes={{ root: classes.maxWidth1208 }}
                   {...homePageInfo.journey}
                   hotLine={profile.hotLine} />
          <Feature classes={{ root: classes.maxWidth1208 }} {...homePageInfo.feature} />
          <Price {...homePageInfo.price} />
          <Procedure classes={{ root: classes.maxWidth1208 }} {...homePageInfo.procedure} />
          <Support {...homePageInfo.support} hotLine={profile.hotLine} />
          <WhyChooseUs classes={{ root: classes.maxWidth1208 }} {...homePageInfo.whyChooseUs} />
          <Manufacturer {...homePageInfo.manufacturer} />
        </div>
        <Footer {...footerInfo} profile={profile} />
      </MuiThemeProvider>
    );
  }
}

export default connect()(withStyles(styles)(Home));
