const express = require("express");
require('dotenv').config()
const configServer = require("./config/serverConfig");
const indexRouter = require("./routes/index.route");

const app = express();

configServer(app);

app.use("/", indexRouter);

const PORT = process.env.PORT || 4000
app.listen(3000, () => {
  console.log(`Server started on ${PORT} port`);
});

