const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const morgan = require('morgan');

morgan('tiny');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Server running on Port ${PORT}`);
})

