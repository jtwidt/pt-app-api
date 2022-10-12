'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScoreChart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ScoreChart.hasMany(models.ScoreHistory, {foreignKey: 'exerciseId'})
    }
  }

  ScoreChart.init({
    exerciseName: DataTypes.STRING,
    exerciseGroup: DataTypes.ENUM('Cardio', 'UpperBody', 'Core'),
    gender: DataTypes.ENUM('Male', 'Female'),
    lowerAge: DataTypes.INTEGER,
    upperAge: DataTypes.INTEGER,
    lowerLimit: DataTypes.INTEGER,
    upperLimit: DataTypes.INTEGER,
    points: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ScoreChart',
    timestamps: false
  });
  return ScoreChart;
};
