'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 180,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 175,
        upperLimit: 179,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 169,
        upperLimit: 174,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 162,
        upperLimit: 168,
        points: 18.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 155,
        upperLimit: 161,
        points: 18.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 135,
        upperLimit: 154,
        points: 17.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 115,
        upperLimit: 134,
        points: 15.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 95,
        upperLimit: 114,
        points: 14.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 75,
        upperLimit: 94,
        points: 13.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 55,
        upperLimit: 74,
        points: 11.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 35,
        upperLimit: 54,
        points: 10.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 30,
        upperLimit: 34,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 25,
        upperLimit: 29,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
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
