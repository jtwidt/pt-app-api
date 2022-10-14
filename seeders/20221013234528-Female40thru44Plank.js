'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 190,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 185,
        upperLimit: 189,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 179,
        upperLimit: 184,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 172,
        upperLimit: 178,
        points: 18.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 165,
        upperLimit: 171,
        points: 18.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 145,
        upperLimit: 164,
        points: 17.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 125,
        upperLimit: 144,
        points: 15.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 105,
        upperLimit: 124,
        points: 14.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 85,
        upperLimit: 104,
        points: 13.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 65,
        upperLimit: 84,
        points: 11.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 45,
        upperLimit: 64,
        points: 10.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 40,
        upperLimit: 44,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
        lowerLimit: 35,
        upperLimit: 39,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 40,
        upperAge: 44,
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
