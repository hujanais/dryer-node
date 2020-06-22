var express = require('express');
var router = express.Router();
const { envModel } = require('../models/data');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const hours = req.body.hours;

  var query = envModel.find({}, null, { sort: '-timestamp' }).limit(hours);
  query.exec((err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

module.exports = router;
