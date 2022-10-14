'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 51,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 50,
        upperLimit: 50,
        points: 19.5,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 49,
        upperLimit: 49,
        points: 19.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 48,
        upperLimit: 48,
        points: 18.8,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 47,
        upperLimit: 47,
        points: 18.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 46,
        upperLimit: 46,
        points: 18.5,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 45,
        upperLimit: 45,
        points: 18.4,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 44,
        upperLimit: 44,
        points: 18.2,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 43,
        upperLimit: 43,
        points: 18.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 42,
        upperLimit: 42,
        points: 17.8,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 41,
        upperLimit: 41,
        points: 17.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 40,
        upperLimit: 40,
        points: 17.4,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 39,
        upperLimit: 39,
        points: 17.2,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 38,
        upperLimit: 38,
        points: 17.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 37,
        upperLimit: 37,
        points: 16.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 36,
        upperLimit: 36,
        points: 16.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 35,
        upperLimit: 35,
        points: 15.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 34,
        upperLimit: 34,
        points: 15.4,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 33,
        upperLimit: 33,
        points: 15.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 32,
        upperLimit: 32,
        points: 14.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 31,
        upperLimit: 31,
        points: 14.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 30,
        upperLimit: 30,
        points: 13.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 29,
        upperLimit: 29,
        points: 13.4,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 28,
        upperLimit: 28,
        points: 13.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 27,
        upperLimit: 27,
        points: 12.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 26,
        upperLimit: 26,
        points: 11.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 25,
        upperLimit: 25,
        points: 10.6,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 24,
        upperLimit: 24,
        points: 10.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 23,
        upperLimit: 23,
        points: 7.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 22,
        upperLimit: 22,
        points: 4.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 21,
        upperLimit: 21,
        points: 1.0,
      },
      {
        exerciseName: '1 Min Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 0,
        upperLimit: 20,
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
