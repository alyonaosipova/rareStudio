'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    const hash = await bcrypt.hash('12345678', 10);
      await queryInterface.bulkInsert('Users', [{
        email: 'vlad@mail.com',
        name: 'Vlad',
        password: hash,
        isAdmin: true,
        phone:79123455623,
        avatar:'123',
        createdAt:new Date,
        updatedAt:new Date
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
