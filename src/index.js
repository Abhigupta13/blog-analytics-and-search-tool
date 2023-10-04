const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const blogStatsRoute = require("./routes/blogStats.js");
const blogSearchRoute = require("./routes/blogSearch.js");
const defaultRoute = require("./routes/defaultRoute.js");

//Routes
app.use("/api/blog-stats", blogStatsRoute);
app.use("/api/blog-search", blogSearchRoute);
app.use("/", defaultRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Server running on Port ${PORT}`);
})

