'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Musics', [{
        title: 'OgBuda',
        duration: 3,
        userId:1,
        fileBefore:'lalala',
        fileAfter:'trututu',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Musics', null, {});
    
  }
};
