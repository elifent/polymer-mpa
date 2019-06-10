const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
router.use(bodyParser.urlencoded({
  extended: false
})); // support encoded bodies

router.post('/', function (req, res, next) {
    
  const body = req.body;
  console.log(body);
  //Save message and send back a message id to client.
  res.json({
      "status": true
  });
  res.end();
  
});

module.exports = router;