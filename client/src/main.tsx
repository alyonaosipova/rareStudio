import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './index.css';
import store from './redux/store';

const loadYandexMapScript = (): void => {
  const script = document.createElement('script');
  script.src =
    'https://api-maps.yandex.ru/2.1/?apikey=d9803a54-58d8-4473-ad80-7e927ebac1e1&lang=ru_RU';
  script.async = true;
  script.onload = () => {
    console.log('Yandex Map script loaded successfully');
  };
  script.onerror = () => {
    console.error('Failed to load Yandex Map script');
  };
  document.body.appendChild(script);
};

loadYandexMapScript();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
