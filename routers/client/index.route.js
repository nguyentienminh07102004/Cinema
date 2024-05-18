// home router
const homeRouter = require("./home.route.js");
// products router
const products = require("./products.router.js");

const router = (app) => {
  app.use("/", homeRouter);

  app.use("/products", products);
};

module.exports = router;
