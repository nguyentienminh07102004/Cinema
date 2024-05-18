const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Connect to database
const Connection = require("./config/ConnectData.config.js");
Connection();

// router client
const Router = require("./routers/client/index.route.js");
// router admin
const routerAdmin = require("./routers/admin/index.route.js");
const systemVariable = require('./config/system.js');

// set đường dẫn views
app.set("views", `${__dirname}/views`);
// set view engine
app.set("views engine", "pug");

// set folder puglic làm file tĩnh
app.use(express.static(`${__dirname}/public`));

Router(app);
routerAdmin(app);

// set biến local cho template
app.locals.PATH_ADMIN = systemVariable.PATH_ADMIN;

app.listen(port, () => {
  console.log(`App opens in port ${port}`);
})