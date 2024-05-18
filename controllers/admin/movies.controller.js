const Movies = require("../../models/Movie.model.js");
const filterStatus = require("../../helpers/filterStatus.helper.js");

const index = async (req, res, next) => {
  const buttonStatus = filterStatus(req);
  const find = {
    deleted: false
  }
  
  if(req.query.status && req.query.status != "All"){
      find.status = req.query.status;
  }

  const movies = await Movies.find(find);

  res.render("admin/pages/movies/index.pug", {
    title: "Movies",
    movies: movies,
    buttonStatus: buttonStatus
  });

}

module.exports = { index };