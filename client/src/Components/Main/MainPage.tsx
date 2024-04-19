import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import Header from '../Header/Header';
import VideoPlayer from './Youtube';
import ModalWindow from '../Booking/ModalWindow';
import type { RootState } from '../../redux/store';

function MainPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.user.user);

  return (
    <>
      <Header />

      <br />
      <br />
      <br />
      <Carousel />
      <br />
      <br />
      <br />
      <h3>
        С нами работают: Brick Bazuka, Грязный Луи, OG BUDA, MAYOT, SEEMEE, 163 ONMYNECK,
        FriendlyThug52, Glocki52 , KOUT, ICEGERGERT, TikoTheCEO, RIGOS, Крип-а-крип, GOKILLA, Слава
        КПСС, MankyMonk(ОУ74) и другие.
      </h3>
      <div className="mediaContainer">
        <VideoPlayer />
        <div className="musicContainer">
          <ReactAudioPlayer
            src="MAYOT, SEEMEE feat. OG Buda - ТРИМ.mp3"
            autoPlay={false}
            controls
            title="MAYOT, SEEMEE feat. OG Buda - ТРИМ"
            className="audio-title"
          />
          <br />
          <ReactAudioPlayer
            src="Brick Bazuka - День сурка.mp3"
            autoPlay={false}
            controls
            title="Brick Bazuka - День сурка"
            className="audio-title"
          />
          <br />
          <ReactAudioPlayer
            src="FRIENDLY THUG 52 NGG - Lost Angeles.mp3"
            autoPlay={false}
            controls
            title="FRIENDLY THUG 52 NGG - Lost Angeles"
            className="audio-title"
          />
          <br />
          <ReactAudioPlayer
            src="ICEGERGERT - Русские воры.mp3"
            autoPlay={false}
            controls
            title="ICEGERGERT - Русские воры"
            className="audio-title"
          />
          <br />
          <ReactAudioPlayer
            src="SaintPrince 52 feat. PirateBay - Клан Сопрано.mp3"
            autoPlay={false}
            controls
            title="SaintPrince 52 feat. PirateBay - Клан Сопрано"
            className="audio-title"
          />
          <br />

          <ReactAudioPlayer
            src="Костя_Катя_и_Влад_тройка_друзей.mp3"
            autoPlay={false}
            controls
            title="Костя_Катя_и_Влад_тройка_друзей"
            className="audio-title"
          />
          <br />
        </div>
        <br />
        <br />
      </div>

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
