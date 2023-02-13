const mongoose = require('mongoose');


const roomtypeSchema = new mongoose.Schema (
  {
    name : {
      type: String
    }
  }
)

module.exports = mongoose.model("roomtype", roomtypeSchema);