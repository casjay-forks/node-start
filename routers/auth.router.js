const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const testController = require('../controllers/test.controller');
const router = Router();

router.post('/auth/login', authController.login);
router.post('/auth/signup', authController.signup);
router.post('/auth/refresh', authController.refresh);
router.get('/auth/check', authController.authenticate, testController.test);

module.exports = router;
