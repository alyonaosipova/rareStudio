import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Добавляем параметр autoplay
    autoplaySpeed: 1500,
    // nextArrow: style={ right: '20px' } />,
  };

  return (
    <Slider
      dots={settings.dots}
      infinite={settings.infinite}
      speed={settings.speed}
      slidesToShow={settings.slidesToShow}
      slidesToScroll={settings.slidesToScroll}
      autoplay={settings.autoplay}
      autoplaySpeed={settings.autoplaySpeed}
    >
      <div>
        <img className="carousel" src="IMG_8906.jpg" alt="1" />
      </div>
      <div>
        <img className="carousel" src="IMG_9073.jpg" alt="2" />
      </div>
      <div>
        <img className="carousel" src="IMG_9075.jpg" alt="3" />
      </div>
      <div>
        <img className="carousel" src="IMG_9119.jpg" alt="4" />
      </div>
      <div>
        <img className="carousel" src="IMG_9218.jpg" alt="5" />
      </div>
      <div>
        <img className="carousel" src="IMG_9294.jpg" alt="6" />
      </div>
      <div>
        <img className="carousel" src="IMG_9310.jpg" alt="7" />
      </div>
    </Slider>
  );
}

export default Carousel;
