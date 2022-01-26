'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Prod.init({
    nameProduct: DataTypes.STRING,
    codeProduct: DataTypes.STRING,
    jumlahP: DataTypes.INTEGER,
    hargaP: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prod',
  });
  return Prod;
};