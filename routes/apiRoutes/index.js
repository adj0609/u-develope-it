const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));




module.exports = router;