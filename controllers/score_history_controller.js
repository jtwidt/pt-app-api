const {
  ScoreHistory,
  User,
  ScoreChart
} = require('../models');
const {calculateAge} = require('../utilities/helpers');
const {Op} = require("sequelize");

const createHistoryEntry = async (req, res) => {
  try {
    const {userId, exerciseName, value, testDate, isDiagnostic} = req.body;
    const user = await User.findByPk(userId);
    const userGender = user.gender;
    const userAge = calculateAge(user.birthDate);
    const exercise = await ScoreChart.findOne({
      where: {
        gender: userGender,
        exerciseName: exerciseName,
        lowerAge: {
          [Op.lte]: userAge
        },
        upperAge: {
          [Op.gte]: userAge
        },
        value: {
          [Op.between]: [lowerLimit, upperLimit]
        }
      }
    });
    const newHistory = {
      value,
      userId,
      exerciseId: exercise.id,
      testDate,
      isDiagnostic,
    };
    const history = ScoreHistory.create(newHistory);
    return res.status(201).json({history});

  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

const getAllUserHistory = async (req, res) => {
  try {
    const {userId} = req.params;
    const histories = await ScoreHistory.findAll({
      where: {
        userId: userId
      },
      include: [ScoreChart]
    });
    return res.status(200).json({histories});
  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

const getUserHistoryByDate = async (req, res) => {
  try {
    const {userId} = req.params;
    const {startDate, endDate} = req.body;
    const histories = await ScoreHistory.findAll({
      where: {
        userId: userId,
        testDate: {
          [Op.between]: [startDate, endDate]
        }
      },
      include: [ScoreChart]
    });
    return res.status(200).json({histories});
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

module.exports = {
  createHistoryEntry,
  getAllUserHistory,
  getUserHistoryByDate,
}
