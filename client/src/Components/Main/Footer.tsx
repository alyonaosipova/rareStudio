import React from 'react';
import './styles/Footer.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModalWindow from '../Booking/ModalWindow';
import type { RootState } from '../../redux/store';

function Footer(): JSX.Element {
  const user = useSelector((store: RootState) => store.user.user);
  return (
    <>
      <div className="line"> </div>
      <div className="footer-container">
        <div className="footer">
          <div className="right">
            <img
              className="footerlogo"
              src="https://s3-alpha-sig.figma.com/img/c3d6/b58e/495f41aba75f273b6de3dab3455a9be0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWZ-SFA07niV1-NTyHykuqWtfG5d0Xz~PEdEqM2aDs9CRdw~02JWl84qC5uiKQem5iueo1tKMnrKsrS-6SaJpMfUo1caKHHPifSxDNb8OjAakC20u1nDKXlWnb1lTABYVuIk2daNE2SX4BHII6ow4YqED4RWEcb9qfloN2y4WwDxVQB2KKP8f5V4X1A1SupW-BNhoudix95lfTcTzR4mT5eT89FG0Qun9gPYyXKlZkrWz8tODHnHoD1a-6dSEvF9GX2Ny-WcfpNz~HOT3LFa5EQ6GfQ0Pcn~tn6-9kVoEcxOq8Pmc9GH6pdZ~DAZLsvCfcZN-gQH4mkiccy-Ix3s7g__"
              alt="logo"
            />
            <div className="address_footer">
              <img
                className="png"
                src="https://s3-alpha-sig.figma.com/img/b39e/34b8/e7f1f7e60c4cdefa290e026f60cc2d1a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NmwInblDkHQ-PPPNYtujW7uciehJU~3kD2eFDS2WvgHrcF5QJvLZR5ZLP8mqURZcwS9BJMdxdpqz4fXAKyTNaWnVHt8qDjnH4mgAGS3ZSA3sM4H~3JFE2es8bGbwUGdafnu8b9orW4myrR5BH3bV4uFbVrfJBHmWQ7FzR78awD763bwEFXBwpRQZI4k~ndy0vCQYIXrCulVzaOtOnxXaUJ~kG5bL4tKNv3cGYoFlbDUfe8sDZCroSJqLtW5cqBLsa589DVz3suR8RKfx8PzGk5IuPAo9jsaoy~wF8mOlHlkdpgecXc6kr4L1O3ltQTqVIwLzlRcXPGr73DUZ8zQoAw__"
                alt=""
              />
              <p className="location_footer">Rare Studio (м. Площадь Восстания) [spb]</p>
            </div>
            <p className="text">Работаем круглосуточно</p>
          </div>
          <div className="left">
            <p className="textcont">КОНТАКТЫ</p>
            <p className="number">+7 (981) 757-25-34</p>
            <p className="mail">Почта: rarestrare2021@gmail.com</p>
            <div className="but">
              {user && (
                <div className="but">
                  <ModalWindow />
                </div>
              )}
              {/* <button type="button" onClick={() => navigate('/services')}>
                Записаться
              </button> */}
            </div>
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
    </>
  );
}

export default Footer;
