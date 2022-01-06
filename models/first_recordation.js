'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model,DataTypes
} = require('sequelize');

class first_recordation extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

first_recordation.init({
  ques_mens_cycle: {
    type: DataTypes.DATE
  },
  ques_longmens_cycle: {
    type: DataTypes.STRING
  },
  ques_lastmens_cycle: {
    type: DataTypes.STRING
  },
  height: {
    type: DataTypes.NUMBER
  },
  weight: {
    type: DataTypes.NUMBER
  },
  ques_husband: {
    type: DataTypes.STRING
  },
  ques_pregnancy: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'first_recordation',
});

module.exports=first_recordation;
