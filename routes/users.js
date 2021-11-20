const express = require('express');
const passport=require('passport');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.post('/create',usersController.create);
router.get('/login', usersController.login);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/login'}
),usersController.createSession); 


module.exports = router;