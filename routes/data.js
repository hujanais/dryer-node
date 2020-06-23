var express = require('express');
var router = express.Router();
const { envModel } = require('../models/data');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const numOfPoints = parseInt(req.query.numOfPoints);
  envModel.find({}, null, { sort: { timestamp: -1 }, limit: numOfPoints }, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

module.exports = router;
