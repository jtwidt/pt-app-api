'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ScoreCharts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exerciseName: {
        type: Sequelize.STRING
      },
      exerciseGroup: {
        type: Sequelize.ENUM('Cardio', 'UpperBody', 'Core')
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female')
      },
      lowerAge: {
        type: Sequelize.INTEGER
      },
      upperAge: {
        type: Sequelize.INTEGER
      },
      lowerLimit: {
        type: Sequelize.INTEGER
      },
      upperLimit: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.DOUBLE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ScoreCharts');
  }
};
