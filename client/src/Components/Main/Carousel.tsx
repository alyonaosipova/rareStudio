import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: style={ right: '20px' } />,
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="carousel" src="IMG_8906.jpg" alt="Image 1" />
      </div>
      <div>
        <img className="carousel" src="IMG_9073.jpg" alt="Image 2" />
      </div>
      <div>
        <img className="carousel" src="IMG_9075.jpg" alt="Image 3" />
      </div>
      <div>
        <img className="carousel" src="IMG_9119.jpg" alt="Image 4" />
      </div>
      <div>
        <img className="carousel" src="IMG_9218.jpg" alt="Image 5" />
      </div>
      <div>
        <img className="carousel" src="IMG_9294.jpg" alt="Image 6" />
      </div>
      <div>
        <img className="carousel" src="IMG_9310.jpg" alt="Image 7" />
      </div>
    </Slider>
  );
};

export default Carousel;
