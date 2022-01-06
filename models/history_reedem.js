'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model,DataTypes
} = require('sequelize');

class history_reedem extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

history_reedem.init({
  status_product: {
    type:DataTypes.STRING
  },
  fullname: {
    type:DataTypes.STRING
  },
  phone_number: {
    type:DataTypes.STRING
  },
  address: {
    type:DataTypes.STRING
  },
  region: {
    type:DataTypes.STRING
  },
  city: {
    type:DataTypes.STRING
  },
  postal_code: {
    type:DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'history_reedem',
});

module.exports=history_reedem;