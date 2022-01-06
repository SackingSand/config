'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('first_recordations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ques_mens_cycle: {
        type: Sequelize.DATE
      },
      ques_longmens_cycle: {
        type: Sequelize.STRING
      },
      ques_lastmens_cycle: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.NUMBER
      },
      weight: {
        type: Sequelize.NUMBER
      },
      ques_husband: {
        type: Sequelize.STRING
      },
      ques_pregnancy: {
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
    await queryInterface.dropTable('first_recordations');
  }
};