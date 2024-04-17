import React, { useState } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

function MyYandexMap() {
  const [placemarkCoords, setPlacemarkCoords] = useState([55.751574, 37.573856]); // Координаты метки по умолчанию

  const handleMapClick = (e) => {
    setPlacemarkCoords(e.get('coords')); // Устанавливаем координаты метки при клике на карту
  };

  return (
    <YMaps>
      <div style={{ width: '600px', height: '400px', marginLeft: '50px' }}>
        <Map
          defaultState={{ center: [59.933005, 30.372462], zoom: 19 }} // Установите центр карты и уровень масштабирования
          width="100%"
          height="100%"
        >
          <ZoomControl options={{ float: 'right' }} />
          <Placemark
            geometry={[59.933005, 30.372462]}
            properties={{ hintContent: 'Название организации' }}
          />

          {/* Добавьте метку на указанные координаты */}
        </Map>
      </div>
    </YMaps>
  );
}

export default MyYandexMap;
