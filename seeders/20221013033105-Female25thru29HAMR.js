'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 80,
        upperLimit: 200,
        points: 60.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 74,
        upperLimit: 79,
        points: 59.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 71,
        upperLimit: 73,
        points: 59.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 68,
        upperLimit: 70,
        points: 58.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 65,
        upperLimit: 67,
        points: 58.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 62,
        upperLimit: 64,
        points: 57.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 59,
        upperLimit: 61,
        points: 57.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 56,
        upperLimit: 58,
        points: 56.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 54,
        upperLimit: 55,
        points: 56.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 51,
        upperLimit: 53,
        points: 55.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 48,
        upperLimit: 50,
        points: 55.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 45,
        upperLimit: 47,
        points: 54.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 42,
        upperLimit: 44,
        points: 54.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 39,
        upperLimit: 41,
        points: 53.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 36,
        upperLimit: 38,
        points: 52.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 33,
        upperLimit: 35,
        points: 50.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 30,
        upperLimit: 32,
        points: 49.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 27,
        upperLimit: 29,
        points: 45.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 24,
        upperLimit: 26,
        points: 42.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 22,
        upperLimit: 23,
        points: 38.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 19,
        upperLimit: 21,
        points: 35.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 25,
        upperAge: 29,
        lowerLimit: 0,
        upperLimit: 18,
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
