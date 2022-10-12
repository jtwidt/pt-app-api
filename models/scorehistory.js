'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScoreHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ScoreHistory.belongsTo(models.User, {foreignKey: 'userId'});
      ScoreHistory.belongsTo(models.ScoreChart, {foreignKey: 'exerciseId'});
    }
  }

  ScoreHistory.init({
    value: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
    testDate: DataTypes.DATE,
    isDiagnostic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ScoreHistory',
    timestamps: false,
  });
  return ScoreHistory;
};
