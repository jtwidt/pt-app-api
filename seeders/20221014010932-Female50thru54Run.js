'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreCharts', [
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 0,
        upperLimit: 773,
        points: 60.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 774,
        upperLimit: 816,
        points: 59.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 817,
        upperLimit: 840,
        points: 59.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 841,
        upperLimit: 865,
        points: 58.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 866,
        upperLimit: 892,
        points: 58.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 893,
        upperLimit: 920,
        points: 57.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 921,
        upperLimit: 950,
        points: 57.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 951,
        upperLimit: 982,
        points: 56.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 983,
        upperLimit: 1017,
        points: 56.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1018,
        upperLimit: 1054,
        points: 55.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1055,
        upperLimit: 1094,
        points: 55.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1095,
        upperLimit: 1136,
        points: 53.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1137,
        upperLimit: 1183,
        points: 52.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1184,
        upperLimit: 1233,
        points: 49.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1234,
        upperLimit: 1288,
        points: 46.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1289,
        upperLimit: 1348,
        points: 42.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1349,
        upperLimit: 1414,
        points: 39.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1415,
        upperLimit: 1486,
        points: 35.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Female',
        lowerAge: 50,
        upperAge: 54,
        lowerLimit: 1487,
        upperLimit: 9999,
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
