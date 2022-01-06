'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('daily_recordations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ques_now_mens: {
        type: Sequelize.BOOLEAN
      },
      body_weight: {
        type: Sequelize.NUMBER
      },
      sex: {
        type: Sequelize.BOOLEAN
      },
      using_contraception: {
        type: Sequelize.BOOLEAN
      },
      body_condition: {
        type: Sequelize.STRING
      },
      mental_condition: {
        type: Sequelize.STRING
      },
      mens_pain: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('daily_recordations');
  }
};