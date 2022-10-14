const {Router} = require('express');
const historyController = require('../controllers/score-history-controller');
const authController = require('../controllers/auth-controller');
const router = Router();

router.get('/', (req, res) => {
  res.send('Bork bork bork');
});

// User
router.post('/user', authController.registerUser);

// Score History
router.post('/history', historyController.createHistoryEntry);
router.get('/history/:userId', historyController.getAllUserHistory);
router.get('/history/:userId/dates', historyController.getUserHistoryByDate);

module.exports = router;
