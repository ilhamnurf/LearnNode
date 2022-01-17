const express = require("express");
const app = express();
const dotenv = require("dotenv");
const res = require("express/lib/response");
const req = require("express/lib/request");
const router = require("./routes");
dotenv.config();
const port = process.env.PORT || 8000;

require("dotenv").config();

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Walked on 1945 By Mr.Adolf H. ${port}`);
});

