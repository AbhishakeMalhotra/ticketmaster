//Student Name - Ronak Barochia
//Student ID - 301239977


var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET Project page. */
router.get('/projects', indexController);

/* GET about page. */
router.get('/about', indexController.about);

/* GET services page. */
router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);

let concertController = require('../controller/concert');


module.exports = router;
