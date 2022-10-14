const {Router} = require('express');
const historyController = require('../controllers/score_history_controller');
const router = Router();

router.get('/', (req, res) => {
  res.send('Bork bork bork');
});

router.post('/history', historyController.createHistoryEntry);
router.get('/history/:id', historyController.getAllUserHistory);
router.get('/history/:id/dates', historyController.getUserHistoryByDate);

module.exports = router;
