import React from 'react';
import MyYandexMap from './Yandex';
import Header from '../Header/Header';

function Contacts(): JSX.Element {
  return (
    <div>
      <Header />
      <h1>КОНТАКТЫ</h1>
      <MyYandexMap />
    </div>
  );
}

export default Contacts;
