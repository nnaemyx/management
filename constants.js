const constants = {
    DATABASE_URL : process.env.DATABASE_URL,

    ROOMNAME: {
            _id: number,
            name: String,
            roomtype : number,
            price: number
    },

    ROOM_TYPES: {
            _id: number,
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




