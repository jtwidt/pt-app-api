'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 195,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 190,
        upperLimit: 194,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 184,
        upperLimit: 189,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 177,
        upperLimit: 183,
        points: 18.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 170,
        upperLimit: 176,
        points: 18.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 150,
        upperLimit: 169,
        points: 17.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 130,
        upperLimit: 149,
        points: 15.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 110,
        upperLimit: 129,
        points: 14.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 90,
        upperLimit: 109,
        points: 13.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 70,
        upperLimit: 89,
        points: 11.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 50,
        upperLimit: 69,
        points: 10.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 45,
        upperLimit: 49,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
        lowerLimit: 40,
        upperLimit: 44,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 35,
        upperAge: 39,
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
