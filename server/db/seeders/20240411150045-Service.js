'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Services', [{
        title: 'Запись',
        description: 'lalalalal',
        price: 1500,
        userId: 1,
        categoriesId: 1,
        createdAt: new Date,
        updatedAt: new Date
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Services', null, {});
    
  }
};
