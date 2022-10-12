const {Router} = require('express');
// const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => {
  res.send('Bork bork bork');
})

module.exports = router;
