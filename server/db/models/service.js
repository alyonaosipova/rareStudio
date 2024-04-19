'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Booking,User,Category}) {
      this.hasMany(Booking,{
        foreignKey:'serviceId'
      })
      this.belongsTo(User,{
        foreignKey:'userId'
      })
      this.belongsTo(Category, {
        foreignKey:'categoriesId'
      })
    }
  }
  Service.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};