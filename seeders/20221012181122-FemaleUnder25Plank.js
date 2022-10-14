'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 210,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 205,
        upperLimit: 209,
        points: 19.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 198,
        upperLimit: 204,
        points: 18.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 192,
        upperLimit: 197,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 185,
        upperLimit: 191,
        points: 18.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 165,
        upperLimit: 184,
        points: 15.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 145,
        upperLimit: 164,
        points: 15.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 125,
        upperLimit: 144,
        points: 14.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 105,
        upperLimit: 124,
        points: 12.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 85,
        upperLimit: 104,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 65,
        upperLimit: 84,
        points: 10.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 60,
        upperLimit: 64,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 55,
        upperLimit: 59,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 0,
        upperAge: 24,
        lowerLimit: 0,
        upperLimit: 54,
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
