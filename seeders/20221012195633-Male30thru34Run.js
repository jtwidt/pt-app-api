'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ScoreChart', [
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 0,
        upperLimit: 574,
        points: 60.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 575,
        upperLimit: 598,
        points: 59.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 599,
        upperLimit: 610,
        points: 59.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 611,
        upperLimit: 623,
        points: 58.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 624,
        upperLimit: 637,
        points: 58.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 638,
        upperLimit: 651,
        points: 57.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 652,
        upperLimit: 666,
        points: 57.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 667,
        upperLimit: 682,
        points: 56.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 683,
        upperLimit: 698,
        points: 56.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 699,
        upperLimit: 716,
        points: 55.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 717,
        upperLimit: 734,
        points: 55.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 735,
        upperLimit: 753,
        points: 54.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 754,
        upperLimit: 773,
        points: 54.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 774,
        upperLimit: 794,
        points: 53.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 795,
        upperLimit: 816,
        points: 52.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 817,
        upperLimit: 840,
        points: 50.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 841,
        upperLimit: 865,
        points: 49.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 866,
        upperLimit: 892,
        points: 46.5,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 893,
        upperLimit: 920,
        points: 44.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 921,
        upperLimit: 950,
        points: 41.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 951,
        upperLimit: 982,
        points: 38.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 983,
        upperLimit: 1017,
        points: 35.0,
      },
      {
        exerciseName: '1.5 Mile Run',
        exerciseGroup: 'Cardio',
        gender: 'Male',
        lowerAge: 30,
        upperAge: 34,
        lowerLimit: 1018,
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
