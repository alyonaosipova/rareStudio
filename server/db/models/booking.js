'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Service}) {
      this.belongsTo(User,{
        foreignKey:'userId'
      })
      this.belongsTo(Service,{
        foreignKey:'serviceId'
      })
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    startDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};