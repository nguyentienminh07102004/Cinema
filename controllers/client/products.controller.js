// model
const movie = require("../../models/Movie.model.js");

const index = async (req, res, next) => {
  try{
    let find = {
      status: "active"
    }
    
    const movies = await movie.find(find);

    res.render("client/pages/movies/index.pug", {
      title: "Movie",
      movies: movies 
    });
    
  } catch(ex){
    console.log(ex);
  }
}

module.exports = { index };
