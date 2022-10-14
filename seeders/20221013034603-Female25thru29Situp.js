'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 50,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 49,
        upperLimit: 49,
        points: 19.5,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 48,
        upperLimit: 48,
        points: 19.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 47,
        upperLimit: 47,
        points: 18.8,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 46,
        upperLimit: 46,
        points: 18.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 45,
        upperLimit: 45,
        points: 17.8,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 44,
        upperLimit: 44,
        points: 17.2,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 43,
        upperLimit: 43,
        points: 17.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 42,
        upperLimit: 42,
        points: 16.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 41,
        upperLimit: 41,
        points: 15.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 40,
        upperLimit: 40,
        points: 15.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 39,
        upperLimit: 39,
        points: 14.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 38,
        upperLimit: 38,
        points: 14.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 37,
        upperLimit: 37,
        points: 13.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 36,
        upperLimit: 36,
        points: 13.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 35,
        upperLimit: 35,
        points: 12.6,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 34,
        upperLimit: 34,
        points: 12.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 33,
        upperLimit: 33,
        points: 9.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 32,
        upperLimit: 32,
        points: 6.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 31,
        upperLimit: 31,
        points: 3.0,
      },
      {
        exerciseName: '1 Min Sit-ups',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 0,
        upperLimit: 30,
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