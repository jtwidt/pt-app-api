'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 185,
        upperLimit: 900,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 180,
        upperLimit: 184,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 175,
        upperLimit: 179,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 169,
        upperLimit: 174,
        points: 18.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 162,
        upperLimit: 168,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 155,
        upperLimit: 161,
        points: 18.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 135,
        upperLimit: 154,
        points: 16.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 115,
        upperLimit: 134,
        points: 15.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 95,
        upperLimit: 114,
        points: 14.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 75,
        upperLimit: 94,
        points: 12.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 55,
        upperLimit: 74,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 35,
        upperLimit: 54,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 50,
        upperAge: 54,
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
