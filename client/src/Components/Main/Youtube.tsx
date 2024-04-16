import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer(): JSX.Element {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      start: 1790, // 1740 секунд = 29 минут
      autoplay: 0,
    },
  };
  const videoId = 'B_6Je6sDp_s?si=Ampr_a3R_pvU3B8k&t=1741'; // Замените VIDEO_ID на идентификатор вашего видео

  return <YouTube videoId={videoId} opts={opts} />;
}

export default VideoPlayer;
