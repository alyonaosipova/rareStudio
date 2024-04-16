import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Carousel from './Carousel';
import Header from '../Header/Header';
import VideoPlayer from './Youtube';

function MainPage(): JSX.Element {
  return (
    <>
      <Header />

      <button type="button">Забронировать время</button>

      <Carousel />
      <br />
      <br />
      <br />

      <ReactAudioPlayer src="Костя_Катя_и_Влад_тройка_друзей.mp3" autoPlay={false} controls />
      <br />
      <ReactAudioPlayer src="OG Buda feat. LIL KRYSTALLL - Тупой.mp3" autoPlay={false} controls />
      <br />
      <ReactAudioPlayer src="OG Buda feat. LIL KRYSTALLL - Тупой.mp3" autoPlay={false} controls />
      <br />
      <br />

      <VideoPlayer />
      <h3>
        С нами работают: Brick Bazuka, Грязный Луи, OG BUDA, MAYOT, SEEMEE, 163 ONMYNECK,
        FriendlyThug52, Glocki52 , KOUT, ICEGERGERT, TikoTheCEO, RIGOS, Крип-а-крип, GOKILLA, Слава
        КПСС, MankyMonk(ОУ74) и другие.
      </h3>
      <br />
      <br />
      <div className="photos-container">
        <img className="photos" src="IMG_8973.jpg" alt="0" />
        <img className="photos" src="IMG_8974.jpg" alt="1" />
        <img className="photos" src="IMG_8976.jpg" alt="2" />
        <img className="photos" src="IMG_8979.jpg" alt="3" />

        <img className="photos" src="IMG_9144.jpg" alt="4" />
        <img className="photos" src="IMG_9270.jpg" alt="5" />
        <img className="photos" src="IMG_9259.jpg" alt="6" />
        <img className="photos" src="IMG_9274.jpg" alt="7" />
        <img className="photos" src="IMG_9303.jpg" alt="8" />
        <img className="photos" src="IMG_9335.jpg" alt="9" />
      </div>
    </>
  );
}

export default MainPage;
