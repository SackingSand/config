'use strict';
const {sequelize} = require("../config/Sequelize");

const {
  Model,DataTypes,Sequelize
} = require('sequelize');
class user extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

user.init({
  firstname: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  timestamps:true,
  modelName: 'user',
});

module.exports=user;
