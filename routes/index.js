const express = require('express');
const router = express.Router();

const playersRoutes = require('./players/index');
const matchesRoutes =  require('./matches/index');

router.use('/players', playersRoutes)
router.use('/matches', matchesRoutes)


module.exports = router;