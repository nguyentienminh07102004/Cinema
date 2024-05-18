const router = require("express").Router();
const controller = require("../../controllers/admin/movies.controller.js")

router.get("/", controller.index);

module.exports = router;