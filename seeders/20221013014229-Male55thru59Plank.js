'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 180,
        upperLimit: 900,
        points: 20.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 175,
        upperLimit: 179,
        points: 19.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 170,
        upperLimit: 174,
        points: 19.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 164,
        upperLimit: 169,
        points: 18.9,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 157,
        upperLimit: 163,
        points: 18.5,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 150,
        upperLimit: 156,
        points: 18.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 130,
        upperLimit: 149,
        points: 16.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 110,
        upperLimit: 129,
        points: 15.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 90,
        upperLimit: 109,
        points: 14.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 70,
        upperLimit: 89,
        points: 12.7,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 50,
        upperLimit: 69,
        points: 11.3,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 30,
        upperLimit: 49,
        points: 10.0,
      },
      {
        exerciseName: 'Forearm Plank Time (mm:ss)',
        exerciseGroup: 'Core',
        gender: 'Male',
        lowerAge: 55,
        upperAge: 59,
        lowerLimit: 0,
        upperLimit: 29,
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
