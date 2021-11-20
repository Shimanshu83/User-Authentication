const router = require('express').Router() ; 

const initialSignupCheck = require('../controller/initialSignupCheck');
const signup = require('../controller/signup');
const userAuthentication = require('../controller/userAuthentication');


router.post('/signup' ,initialSignupCheck , signup ) ;
router.post('/login' ,userAuthentication ) ; 

module.exports = router ; 