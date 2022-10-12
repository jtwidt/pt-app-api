'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 190,
        upperLimit: 900,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 185,
        upperLimit: 189,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 180,
        upperLimit: 184,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 174,
        upperLimit: 179,
        points: 18.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 167,
        upperLimit: 173,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 160,
        upperLimit: 166,
        points: 18.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 140,
        upperLimit: 159,
        points: 16.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 120,
        upperLimit: 139,
        points: 15.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 100,
        upperLimit: 119,
        points: 14.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 80,
        upperLimit: 99,
        points: 12.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 60,
        upperLimit: 79,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 40,
        upperLimit: 59,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 45,
        upperAge: 49,
        lowerLimit: 0,
        upperLimit: 39,
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
