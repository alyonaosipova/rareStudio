'use strict';
const {EOL} = require('os')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Services', [{
        title: 'Работа на студии',
        description: `Студийная сессия включает в себя:
        — Запись и/или сведение и мастеринг материала рядом в сопровождении профессионального звукорежиссера;
        — Помощь и советы по ходу записи от звукорежиссера;
        — Детальная проработка трека и доведение до финального звучания трека под формат муз. площадок и радио.`,
        price: 1290,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        title: 'Сведение и Мастеринг трека',
        description: 'Сведение и мастеринг включает в себя: — Полноценное сведение дорожек вашего голоса и бита; — Тональная коррекция голоса (auto-tune); — Частотная, динамическая и пространственная обработка; — Ритмическая коррекция; — Работа с инструменталом; — Саунд-дизайн проекта, создание различных эффектов на голосе; — Лимитирование и компрессия финального материала; — Эквализация, улучшение стерео;',
        price: 6990,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Бит на заказ',
        description: 'Бит на заказ включает в себя: — Бит специально сделанный для вас, по вашим пожеланиям. (Wav+trackout); — Передача полных прав; — Разрешается заливать на любые доступные площадки.',
        price: 14990,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Текст на заказ',
        description: 'Текст на заказ включает в себя: — Полное вовлечение в потребности клиента; — Готовый текст (Куплеты, Припевы, Бридж); — Демо запись;  — Правки (если потребуются).',
        price: 9000,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Выгрузка релиза',
        description: 'Выгрузка релиза включает в себя: — Прозрачность процессов и отчетов; — Высокая доходность от прослушиваний; — Поддержка менеджера 24/7; — Страница с ссылками включена в стоимость; — Караоке, живой текст (Apple Music); — Подача заявки в плейлисты; — Быстрые сроки размещения релиза.',
        price: 5990,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Продвижение артистов',
        description: 'Таргетированная реклама включает в себя:  — Поиск и анализ целевой аудитории;  — Подбор визуалов для рекламы;  — Личный менеджер;  — Отчеты и аналитика;  — Ведение таргетированной рекламы.',
        price: 13990,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Services', null, {});
    
  }
};
