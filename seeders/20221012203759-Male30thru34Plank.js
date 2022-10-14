'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 205,
        upperLimit: 900,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 200,
        upperLimit: 204,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 195,
        upperLimit: 199,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 189,
        upperLimit: 194,
        points: 18.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 182,
        upperLimit: 188,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 175,
        upperLimit: 181,
        points: 18.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 155,
        upperLimit: 174,
        points: 16.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 135,
        upperLimit: 154,
        points: 15.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 115,
        upperLimit: 134,
        points: 14.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 95,
        upperLimit: 114,
        points: 12.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 75,
        upperLimit: 94,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 55,
        upperLimit: 74,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 0,
        upperLimit: 54,
        points: 0.0,
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
