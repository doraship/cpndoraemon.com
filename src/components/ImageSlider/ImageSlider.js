import React from 'react';
import Slider from 'react-slick';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ImageSlider = (props) => {

  const { classes } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    lazyLoad: true,
    // appendDots: dots => {
    //   return (
    //     <div>
    //       <ul style={{
    //         marginTop: '-60px',
    //       }}>
    //         {dots}
    //       </ul>
    //     </div>
    //   );
    // },
  };

  const Slides = props.images.map(image => {
    return (
      <img src={image.url}
           key={image.id}
           alt={image.alt || ''}
           height={props.imageSlideHeight || '100%'}
           width={props.imageSlideWidth || '100%'} />
    );
  });

  return (
    <section className={classes.root}>
      <Slider {...settings} {...props}>
        {Slides}
      </Slider>
    </section>
  );
};

export default withStyles(styles)(ImageSlider);
