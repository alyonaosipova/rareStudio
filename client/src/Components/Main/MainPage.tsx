import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Carousel from './Carousel';
import Header from '../Header/Header';

function MainPage(): JSX.Element {
  return (
    <>
      <Header />

      <button type="button">Забронировать время</button>

      <Carousel />
      <br />
      <br />
      <br />

      <ReactAudioPlayer src="OG Buda feat. LIL KRYSTALLL - Тупой.mp3" autoPlay={false} controls />
      <br />
      <ReactAudioPlayer src="OG Buda feat. LIL KRYSTALLL - Тупой.mp3" autoPlay={false} controls />
      <br />
      <ReactAudioPlayer src="OG Buda feat. LIL KRYSTALLL - Тупой.mp3" autoPlay={false} controls />
      <br />
      <br />

      <h3>
        С нами работают: Brick Bazuka, Грязный Луи, OG BUDA, MAYOT, SEEMEE, 163 ONMYNECK,
        FriendlyThug52, Glocki52 , KOUT, ICEGERGERT, TikoTheCEO, RIGOS, Крип-а-крип, GOKILLA, Слава
        КПСС, MankyMonk(ОУ74) и другие.
      </h3>
      <br />
      <br />
      <div className="photos-container">
        <img className="photos" src="IMG_8973.jpg" alt="Image 8" />
        <img className="photos" src="IMG_8974.jpg" alt="Image 9" />
        <img className="photos" src="IMG_8976.jpg" alt="Image 10" />
        <img className="photos" src="IMG_8979.jpg" alt="Image 11" />

        <img className="photos" src="IMG_9144.jpg" alt="Image 12" />
        <img className="photos" src="IMG_9270.jpg" alt="Image 13" />
        <img className="photos" src="IMG_9259.jpg" alt="Image 14" />
        <img className="photos" src="IMG_9274.jpg" alt="Image 15" />
        <img className="photos" src="IMG_9303.jpg" alt="Image 15" />
        <img className="photos" src="IMG_9335.jpg" alt="Image 15" />
      </div>
    </>
  );
}

export default MainPage;
