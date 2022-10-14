const {User} = require('../models');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    let userInfo = req.body;
    const salt = await bcrypt.genSalt(10);
    userInfo.password = await bcrypt.hash(userInfo.password, salt);
    console.log(userInfo);
    const user = await User.create(userInfo);
    return res.status(201).json({user});
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

module.exports = {
  createUser,
}
