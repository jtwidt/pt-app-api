'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 205,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 200,
        upperLimit: 204,
        points: 19.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 194,
        upperLimit: 199,
        points: 19.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 187,
        upperLimit: 193,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 180,
        upperLimit: 186,
        points: 19.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 160,
        upperLimit: 179,
        points: 16.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 140,
        upperLimit: 159,
        points: 16.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 120,
        upperLimit: 139,
        points: 15.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 100,
        upperLimit: 119,
        points: 13.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 80,
        upperLimit: 99,
        points: 12.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 60,
        upperLimit: 89,
        points: 11.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 55,
        upperLimit: 59,
        points: 10.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 50,
        upperLimit: 54,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 0,
        upperLimit: 49,
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
