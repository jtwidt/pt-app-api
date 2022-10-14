'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 54,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 53,
        upperLimit: 53,
        points: 19.7,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 52,
        upperLimit: 52,
        points: 19.4,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 51,
        upperLimit: 51,
        points: 19.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 50,
        upperLimit: 50,
        points: 18.8,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 49,
        upperLimit: 49,
        points: 18.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 48,
        upperLimit: 48,
        points: 17.8,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 47,
        upperLimit: 47,
        points: 17.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 46,
        upperLimit: 46,
        points: 17.2,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 45,
        upperLimit: 45,
        points: 17.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 44,
        upperLimit: 44,
        points: 16.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 43,
        upperLimit: 43,
        points: 15.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 42,
        upperLimit: 42,
        points: 15.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 41,
        upperLimit: 41,
        points: 14.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 40,
        upperLimit: 40,
        points: 13.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 39,
        upperLimit: 39,
        points: 13.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 38,
        upperLimit: 38,
        points: 12.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 37,
        upperLimit: 37,
        points: 9.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 36,
        upperLimit: 36,
        points: 6.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 35,
        upperLimit: 35,
        points: 3.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 0,
        upperLimit: 34,
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
