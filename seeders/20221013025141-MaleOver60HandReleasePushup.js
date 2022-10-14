'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 30,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 29,
        upperLimit: 29,
        points: 19.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 28,
        upperLimit: 28,
        points: 19.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 27,
        upperLimit: 27,
        points: 18.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 26,
        upperLimit: 26,
        points: 18.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 25,
        upperLimit: 25,
        points: 17.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 24,
        upperLimit: 24,
        points: 17.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 23,
        upperLimit: 23,
        points: 16.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 22,
        upperLimit: 22,
        points: 16.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 21,
        upperLimit: 21,
        points: 15.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 20,
        upperLimit: 20,
        points: 15.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 19,
        upperLimit: 19,
        points: 14.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 18,
        upperLimit: 18,
        points: 14.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 17,
        upperLimit: 17,
        points: 13.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 16,
        upperLimit: 16,
        points: 13.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 15,
        upperLimit: 15,
        points: 12.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 14,
        upperLimit: 14,
        points: 12.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 13,
        upperLimit: 13,
        points: 11.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 12,
        upperLimit: 12,
        points: 11.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 11,
        upperLimit: 11,
        points: 10.5,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 10,
        upperLimit: 10,
        points: 10.0,
      },
      {
        exerciseName: '2 Min Hand Release Push-ups',
        exerciseGroup: 'UpperBody',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 9,
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
