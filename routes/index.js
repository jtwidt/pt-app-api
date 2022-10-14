const {Router} = require('express');
const historyController = require('../controllers/score-history-controller');
const userController = require('../controllers/user-controller');
const router = Router();

router.get('/', (req, res) => {
  res.send('Bork bork bork');
});

// User
router.post('/user', userController.createUser);

// Score History
router.post('/history', historyController.createHistoryEntry);
router.get('/history/:userId', historyController.getAllUserHistory);
router.get('/history/:userId/dates', historyController.getUserHistoryByDate);

module.exports = router;
