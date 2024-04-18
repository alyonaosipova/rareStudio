import React from 'react';
import './style/header.css';

function Header(): JSX.Element {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="Диана сказала написать что это логотип" />
      <h1 className="studio">студия звукозаписи</h1>
      <div className="address">
        <img className="location" src="location.png" alt="тоже Диана пилит" />
        <h3>Rare Studio (м. Площадь Восстания) [spb]</h3>
      </div>
      <div className="logos">
        <a href="https://vk.com/rare.studio" target="_blank" rel="noopener noreferrer">
          <img className="vklogo" src="vk.png" alt="да еще одна для Дианы" />
        </a>
        <a href="https://t.me/alyonalisova" target="_blank" rel="noopener noreferrer">
          <img className="tglogo" src="Telegram-Logo-PNG-HD-Image.png" alt="тг лого" />
        </a>
      </div>
    </div>
  );
}
export default Header;
