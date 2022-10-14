'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 175,
        upperLimit: 999,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 170,
        upperLimit: 174,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 164,
        upperLimit: 169,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 157,
        upperLimit: 163,
        points: 18.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 150,
        upperLimit: 156,
        points: 18.4,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 130,
        upperLimit: 149,
        points: 17.1,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 110,
        upperLimit: 129,
        points: 15.8,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 90,
        upperLimit: 109,
        points: 14.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 70,
        upperLimit: 89,
        points: 13.2,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 50,
        upperLimit: 69,
        points: 11.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 30,
        upperLimit: 49,
        points: 10.6,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 25,
        upperLimit: 29,
        points: 10.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 20,
        upperLimit: 24,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Female',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 0,
        upperLimit: 19,
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
