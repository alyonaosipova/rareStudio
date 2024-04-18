import React from 'react';
import Header from '../Header/Header';
import './styles/Info.css';

function Info(): JSX.Element {
  return (
    <>
      <Header />

      <div className="line"> </div>
      <div className="about_us">
        <div className="text_about_us">
          <p className="o_nas">О НАС</p>
          <br />
          <p className="big_text">
            <p>Привет, рад видеть тебя в сообществе! </p>
            <p>Главная наша ценность - это коллектив и постоянно растущее комьюнити! </p>
            <p>
              Мы собрали команду для того чтобы ты мог реализовать то что задумал, а возможно
              больше. Мы всегда можем помочь на любом этапе создания трека, от аранжировки, до
              саундчека на сцене. Также мы всегда приглашаем талантливых и уже состоявшихся артистов
              и их звукорежиссеров/битмейкеров/музыкантов к сотрудничеству. Ты можешь работать с
              нашими инженерами записи так и со своей привычной командой как у нас делают артисты
              Melon Music, SOUNDLAB, FONTANKA RECORDS и др.{' '}
            </p>
            <p>
              В современном мире звука, фактически отсутствуют какие-либо ограничения в формате
              работы над композицией. Если после всей проделанной работы она звучит - насыщенно,
              достаточно громко, а также вызывает эмоции у слушателя, то совсем неважно записан он
              был дома или на многомиллионной студии.
            </p>
            <p>
              Основа нашей команды - это действующие исполнители и опытные звукорежиссеры, а также
              отзывчивые люди - это значит, что мы, как никто другой, понимаем возможные трудности и
              пути их решений. В заключении хотелось бы отметить, что самая главная наша задача -
              это создать атмосферу и условия для творчества, при необходимости дать совет в
              реализации идей, быть креативными и всегда готовыми настроить рабочий процесс. Так для
              чего нужна студия в 2023?
            </p>
            <p>
              Наш опыт и оборудование RecRoom позволяют нам не просто записать материал высокого
              качества или свести его, но также использовать аналоговый тракт, цифровой тракт и
              приятная опция для звукорежиссера- Softube Console 1. Парк синтезаторов live-room а
              также наши продюссеры всегда готовы окунуть вас в историю битмейкинга , сэмплирования
              со всех видов девайсов, в том числе легендарных AKAI MPC, а также создания электронной
              музыки (например построим с вами классический хаус грув на великолепной драм-машине
              STEDA ELECTRONICS SR-909).
            </p>
            <p>
              Мы постоянно стараемся пополнять наш парк синтезаторов, драм машин, педалей эффектов и
              т.д. Поэтому если Вам интересно делать музыку, хочется делиться и перенимать опыт,
              получить фитбэк от профессионалов, с радостью ждем!!! По всем вопросам пишите в л.с.
              сообщества.
            </p>
          </p>
        </div>
        <img className="about_us_img" src="IMG_9259 — копия.jpg" alt="" />
      </div>
      <div className="line"> </div>
      <p className="first_word">ОБОРУДОВАНИЕ</p>
      <div className="info">
        <div className="left_info">
          <div className="one_card">
            <p className="name_of_think">МИКРОФОНЫ</p>
            <div className="think_line"> </div>
            <p className="thinks">-Townsend labs Sphere l22</p>
            <p className="thinks">-Neumann U87Ai</p>
            <p className="thinks">-MXL V69ME (ламповый)</p>
          </div>
          <div className="one_card">
            <p className="name_of_think">НАУШНИКИ</p>
            <div className="think_line"> </div>
            <p className="thinks">-Beyerdynamic DT770 Pro</p>
            <p className="thinks">-Audio-Technica ATH-M70x</p>
            <p className="thinks">-Audio-Technica ATH-M50x</p>
          </div>
          <div className="one_card">
            <p className="name_of_think">АУДИОИНТЕРФЕЙСЫ</p>
            <div className="think_line"> </div>
            <p className="thinks">-UAD Apollo 8</p>
            <p className="thinks">-UAD Apollo twin</p>
            <p className="thinks">-UAD-2 Satellite</p>
          </div>
        </div>
        <div className="right_info">
          <div className="one_card">
            <p className="name_of_think">СИНТЕЗАТОРЫ</p>
            <div className="think_line"> </div>
            <p className="thinks">-Roland Juno 106 (1988 г.в.)</p>
            <p className="thinks">-Korg Prologue-16</p>
            <p className="thinks">-Erica Synth Bassline</p>
          </div>
          <div className="one_card">
            <p className="name_of_think">СОФТ</p>
            <div className="think_line"> </div>
            <p className="thinks">-UAD Console</p>
            <p className="thinks">
              -DAW: Logic Pro X/AVID Pro Tools/Ableton Live/FlStudio 21/MPC 2.1
            </p>
            <p className="thinks">
              -Antares Auto-Tune Advanced, Fab Filter Pro-Q3, Izotope Ozone 9
            </p>
          </div>
          <div className="one_card">
            <p className="name_of_think">ПРИБОРЫ ОБРАБОТКИ</p>
            <div className="think_line"> </div>
            <p className="thinks">-процессор эффектов TC Electronic M350</p>
            <p className="thinks">-процессор эффектов Lexicon MX400XL</p>
            <p className="thinks">-гитарный комбик Marshal DSL1CR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
