'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Exempt',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 0,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 9999,
        points: null,
      },
      {
        exerciseName: 'Exempt',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 0,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 9999,
        points: null,
      },
      {
        exerciseName: 'Exempt',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 0,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 9999,
        points: null,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
