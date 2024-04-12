'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User,{
        foreignKey:'userId'
      })
    }
  }
  Music.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    fileBefore: DataTypes.STRING,
    fileAfter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
  });
  return Music;
};