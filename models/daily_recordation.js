'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model,DataTypes
} = require('sequelize');
class daily_recordation extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // this relation
    // define association here
  }
};
daily_recordation.init({
  ques_now_mens: {
    type:DataTypes.BOOLEAN
  },
  body_weight: {
    type:DataTypes.NUMBER
  },
  sex: {
    type:DataTypes.BOOLEAN
  },
  using_contraception: {
    type:DataTypes.BOOLEAN
  },
  body_condition: {
    type:DataTypes.STRING
  },
  mental_condition: {
    type:DataTypes.STRING
  },
  mens_pain: {
    type:DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'daily_recordation',
});

module.exports = daily_recordation;