var express = require('express');
var router = express.Router();

let concertController = require('../controller/concert');


/* GET list of items */
router.get('/list', concertController.concertList);

// Routers for edit
router.get('/edit/:id', concertController.displayEditPage);
router.post('/edit/:id', concertController.processEditPage);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', concertController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', concertController.processAddPage);


router.get('/delete/:id', concertController.performDelete);


module.exports = router;