'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 175,
        upperLimit: 900,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 170,
        upperLimit: 174,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 165,
        upperLimit: 169,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 159,
        upperLimit: 163,
        points: 18.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 152,
        upperLimit: 158,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 145,
        upperLimit: 151,
        points: 18.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 125,
        upperLimit: 144,
        points: 16.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 115,
        upperLimit: 124,
        points: 16.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 85,
        upperLimit: 114,
        points: 14.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 65,
        upperLimit: 84,
        points: 12.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 45,
        upperLimit: 64,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 25,
        upperLimit: 44,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 24,
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
