const constants = {
    DATABASE_URL : process.env.DATABASE_URL,

    ROOMNAME: {
            _id: Number,
            name: String,
            roomtype : Number,
            price: Number
    },

    ROOM_TYPES: {
            _id: Number,
            name: String
    },

    MESSAGE: {
        FETCH: "Fetched Successfully",
        CREATED: "Created Successfully",
        EDIT: "Edited Successfully",
        DELETE: "Deleted Successfully",
        ERROR:  "Error!!"


    }


    
        
}

module.exports = constants




