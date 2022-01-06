'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model,DataTypes
} = require('sequelize');
class bio_doctor extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
bio_doctor.init({
  fullname: {
    type:DataTypes.STRING
  },
  address: {
    type:DataTypes.STRING
  },
  phone_number: {
    type:DataTypes.STRING
  },
  avatar: {
    type:DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'bio_doctor',
});

module.exports=bio_doctor;