const express = require("express");
const configServer = require("./config/serverConfig");
const indexRouter = require("./routes/index.route");

const app = express();

configServer(app);

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server started");
});
