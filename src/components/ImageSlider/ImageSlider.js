import React from 'react';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      pauseOnFocus: false,
      lazyLoad: true,
      appendDots: dots => {
        return (
          <div>
            <ul style={{
              marginTop: '-60px',
            }}>
              {dots}
            </ul>
          </div>
        );
      },
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
      <Slider {...settings} {...props}>
        {Slides}
      </Slider>
    );
  }
;

export default ImageSlider;
