'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 200,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 195,
        upperLimit: 199,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 189,
        upperLimit: 194,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 182,
        upperLimit: 188,
        points: 18.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 175,
        upperLimit: 181,
        points: 18.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 155,
        upperLimit: 174,
        points: 17.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 135,
        upperLimit: 154,
        points: 15.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 115,
        upperLimit: 134,
        points: 14.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 95,
        upperLimit: 114,
        points: 13.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 75,
        upperLimit: 94,
        points: 11.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 55,
        upperLimit: 74,
        points: 10.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 50,
        upperLimit: 54,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 45,
        upperLimit: 49,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 0,
        upperLimit: 44,
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
