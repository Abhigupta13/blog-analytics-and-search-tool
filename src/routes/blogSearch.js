const express = require("express");
const blogSearch = require("../controllers/blogSearch.js");

const router = new express.Router();

router.get("/", blogSearch.get)

module.exports = router;
