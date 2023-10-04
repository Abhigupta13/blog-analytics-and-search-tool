const express = require("express");
const blogStats = require("../controllers/blogStats.js");

const router = new express.Router();

router.get("/", blogStats.get);

module.exports = router;
