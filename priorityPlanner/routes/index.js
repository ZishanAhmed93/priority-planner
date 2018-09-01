var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/priority', require('./priority'));
router.use('/tasks', require('./tasks'));
router.use('/backlog', require('./backlog'));
router.use('/completed', require('./completed'));
router.use('/todo', require('./todo'));

module.exports = router;
