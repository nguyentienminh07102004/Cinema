const systemVariable = require("../../config/system.js");
const homeRouter = require("./home.router.js");
const movies = require("./movies.router.js");

const router = (app) => {
  app.use(systemVariable.PATH_ADMIN + "/", homeRouter);
  app.use(`${systemVariable.PATH_ADMIN}/movies`, movies);
}

module.exports = router;