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
      autoplaySpeed: 5000,
      fade: true,
      pauseOnFocus: true,
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

    const Slides = props.slides.map(item => {
      return (
        <div>
          <img src={item.url}
               alt={item.alt || ''}
               height={props.imageSlideHeight || '100%'}
               width={props.imageSlideWidth || '100%'} />
        </div>
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
