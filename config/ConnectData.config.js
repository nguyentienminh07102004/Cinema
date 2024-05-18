const mongoose = require("mongoose");
const connectDatabase = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to database successfully");
  } catch(ex) {
    console.log(ex);
  }
}
module.exports = connectDatabase;