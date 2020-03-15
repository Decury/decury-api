const express = require("express");
const app = express();
const config = require("./config.json");

app.listen(config.port);
