import React from 'react';
import MyYandexMap from './Yandex';
import Header from '../Header/Header';
import ModalWindow from '../Booking/ModalWindow';

function Contacts(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="contactContainer">
        <div className="left">
          <h1 className="contactText">КОНТАКТЫ</h1>
          <MyYandexMap />
        </div>
        <div className="right rightInfo">
          <p className="number">+7 (981) 757-25-34</p>
          <p className="mail">Почта: rarestrare2021@gmail.com</p>
          <div className="addressContact">
            <img
              className="png"
              src="https://s3-alpha-sig.figma.com/img/b39e/34b8/e7f1f7e60c4cdefa290e026f60cc2d1a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NmwInblDkHQ-PPPNYtujW7uciehJU~3kD2eFDS2WvgHrcF5QJvLZR5ZLP8mqURZcwS9BJMdxdpqz4fXAKyTNaWnVHt8qDjnH4mgAGS3ZSA3sM4H~3JFE2es8bGbwUGdafnu8b9orW4myrR5BH3bV4uFbVrfJBHmWQ7FzR78awD763bwEFXBwpRQZI4k~ndy0vCQYIXrCulVzaOtOnxXaUJ~kG5bL4tKNv3cGYoFlbDUfe8sDZCroSJqLtW5cqBLsa589DVz3suR8RKfx8PzGk5IuPAo9jsaoy~wF8mOlHlkdpgecXc6kr4L1O3ltQTqVIwLzlRcXPGr73DUZ8zQoAw__"
              alt=""
            />
            <p className="location_footer">Rare Studio (м. Площадь Восстания) [spb]</p>
          </div>
          {/* <ModalWindow /> */}
          <div className="logoss">
            <a href="https://vk.com/rare.studio" target="_blank" rel="noopener noreferrer">
              <img className="vklogo" src="vk.png" alt="да еще одна для Дианы" />
            </a>
            <a href="https://t.me/alyonalisova" target="_blank" rel="noopener noreferrer">
              <img className="tglogo" src="Telegram-Logo-PNG-HD-Image.png" alt="тг лого" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
