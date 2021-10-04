const { application } = require('express');
const express = require('express');
const atmController = require('../controllers/atmController');
const router = express.Router();
router.get('/atm/see-data', atmController.getData)
router.post('/atm/withdrawal', atmController.withdrawal);
router.post('/admin/:currency', atmController.adding)

module.exports = router;