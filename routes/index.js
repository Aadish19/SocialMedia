//Entry Point to all the routes
const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log("Express Router Loaded")

router.get('/',homeController.home); // 1 http://localhost:8000/
router.use('/users',require('./users')) //2 http://localhost:8000/users/profile
router.use('/posts',require('./posts'))

//for any further routes , access from here
// router.use('/routerName'.require('./routerfile'))

module.exports = router; //to be made available to main index.js