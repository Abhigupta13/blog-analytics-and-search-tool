const express = require("express");
const defaultRoute = require("../controllers/defaultRoute.js");

const router = new express.Router();

router.get("/", defaultRoute.get)

module.exports = router;
