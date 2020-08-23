const { Router } = require('express');
const testController = require('../controllers/test.controller');
const router = Router();

router.get('/test', testController.test);

module.exports = router;
