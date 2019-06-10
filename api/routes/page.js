const express = require("express");
const router = express.Router();
var path = require('path');

router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname + "../../../src/home/home.html"));
});

router.get("/home", function(req, res, next) {
  res.sendFile(path.join(__dirname + "../../../src/home/home.html"));
});

router.get("/about", function(req, res, next) {
  res.sendFile(path.join(__dirname + "../../../src/about/about.html"));
});

router.get("/contact", function(req, res, next) {
  res.sendFile(path.join(__dirname + "../../../src/contact/contact.html"));
});

module.exports = router;
