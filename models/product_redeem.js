'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model, DataTypes
} = require('sequelize');

class product_redeem extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

product_redeem.init({
  name_product: {
    type:DataTypes.STRING
  },
  reedem_point: {
    type:DataTypes.NUMBER
  },
  valid_date: {
    type:DataTypes.DATE
  },
  img_product: {
    type:DataTypes.STRING
  },
  description: {
    type:DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'product_redeem',
});

module.exports=product_redeem;