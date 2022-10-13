'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 71,
        upperLimit: 900,
        points: 60.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 65,
        upperLimit: 70,
        points: 59.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 62,
        upperLimit: 64,
        points: 59.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 59,
        upperLimit: 61,
        points: 58.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 56,
        upperLimit: 58,
        points: 58.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 54,
        upperLimit: 55,
        points: 57.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 51,
        upperLimit: 53,
        points: 57.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 48,
        upperLimit: 50,
        points: 56.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 45,
        upperLimit: 47,
        points: 56.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 42,
        upperLimit: 44,
        points: 55.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 39,
        upperLimit: 41,
        points: 55.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 36,
        upperLimit: 38,
        points: 54.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 33,
        upperLimit: 35,
        points: 54.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 30,
        upperLimit: 32,
        points: 52.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 27,
        upperLimit: 29,
        points: 51.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 24,
        upperLimit: 26,
        points: 49.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 22,
        upperLimit: 22,
        points: 47.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 19,
        upperLimit: 21,
        points: 44.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 16,
        upperLimit: 18,
        points: 41.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 13,
        upperLimit: 15,
        points: 38.5,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 10,
        upperLimit: 12,
        points: 35.0,
      },
      {
        exerciseName: '20 Meter HAMR Shuttles',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 60,
        upperAge: 99,
        lowerLimit: 0,
        upperLimit: 9,
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
