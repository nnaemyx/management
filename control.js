const Room = require('./roomModel');

class Control {
    async getRoomTypes() {  
        return await RoomType.find({})
    }

    async addRoomType(room) {  
        return await RoomType.create(room)
    }

    async getRoom() {  
        return await Room.filter(function(roomName, roomtype, price) {
            
        })
    }

    async addRoom(room) {  
        return await Room.create(room)
    }

    async getRoomById(id) {
        return await Room.findOne({ _id: id})
    }

    async editROom(id, data) {
        return await Room.findOneAndUpdate({_id: id}, data)
    }

    async deleteRoom(id) {
        return await Room.findOneAndDelete({_id: id})
    }
}

module.exports = new Control()