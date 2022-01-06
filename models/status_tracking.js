'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model, DataTypes
} = require('sequelize');
class status_tracking extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

status_tracking.init({
  post_description: {
    type:DataTypes.STRING
  },
  status_post: {
    type:DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'status_tracking',
});

module.exports=status_tracking;