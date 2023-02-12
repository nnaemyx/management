const {model,  Schema} = require('mongoose');
const constants = require('./constants');
const {ROOM_TYPES, ROOMNAME} = constants;

const RoomSchema = new Schema( 
    {
        id: {
            type: Number,
            required: true
        },

        roomName : {
            type : String,
            required: true

        },
        roomtype : {
         type : String,
            required: true
        },
        price : {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true 
    }
)

const Room = model(ROOMNAME.ROOM, RoomSchema)
const RoomType = model(ROOM_TYPES.ROOM, RoomSchema)

module.exports = Room;
module.exports = RoomType;
