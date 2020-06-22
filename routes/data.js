var express = require('express');
var router = express.Router();
const { envModel } = require('../models/data');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const numOfPoints = req.body.numOfPoints;

  var query = envModel.find({}, null, { sort: '-timestamp' }).limit(numOfPoints);
  query.exec((err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

module.exports = router;
