const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema (
  {
    name : {
      type: String
    },
    roomType : {
      type: ObjectId
    },
    price: {
      type: Number
    }
  }
)

module.exports = mongoose.model("room", roomSchema);