
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const constants = require('./constants');
const collection = require('./collection');
const control = require('./control');
const cors = require('cors');
const {MESSAGE} = constants 


app.use(cors());
app.use(express.json());

const port = process.env.port || 3000;


app.get('/', (req, res) => {
    res.status(200).send({message: MESSAGE.FETCH})
})

//create room types
app.post('./api/v1/room-types', async (req, res) => {
    try{
        const data = await control.addRoomTypes()
        res.status(200).send({message: MESSAGE.CREATED })
    } catch (err) {
        res.status(500).send({message : err.message || MESSAGE.ERROR })
    }
} )


// fetch all room types 
app.get('./api/v1/rooms-types', async (req, res) => {
    try {
        const rooms =await control.getRoomTypes()
        res.status(200).send({message: MESSAGE.FETCH, data: ROOM_TYPES})
    } catch(err) { 
        res.status(500).send({message: MESSAGE.ERROR})
    }
} )


//create rooms
app.post('./api/v1/rooms', async(req, res) => {
    try{
        const data = await control.addRoom()
        res.status(200).send({message: MESSAGE.FETCH})
    } catch(err) {
        res.status(500).send({message: MESSAGGE.ERROR})
    }
})


//fetch all rooms with filters
app.get('./api/v1/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}*maxPrice={searchRoomMaximumPriceMatch}',async (req, res) => {
    try{
        const data = await control.getRoom()
        res.status(200).send({message: MESSAGE.FETCH})
    } catch(err) {
        res.status(500).send({message: MESSAGE.ERROR})
    }     
})


// editing rooms
app.patch('./api/v1/rooms/{roomId}', async(req, res) => {
    try{
        const {id} = req.params.id
        const body = req.body //no idea where body came from!!!!
        const data = await control.editROom()
        res.status(200).send({message: MESSAGE.EDIT, data})
    } catch(err) {
        res.status(500).send({message: MESSAGE.ERROR})
    }
})

//deleting rooms
app.delete('./api/v1/rooms/{roomId}', async(req, res) => {
    try {
        const {id} = req.params.id

        const data = await control.deleteRoom(id)
        res.status(200).send({message:MESSAGE.DELETE})
    } catch(err) {
        res.status(500).send({message: MESSAGE.ERROR})
    }
})

//fetch room with Id
app.get('./api/v1/rooms{roomId}', async (req, res) => {
    try{
        const {id} = req.params.id 
        const data = await control.getRoomById()

        res.status(200).send({message: MESSAGE.FETCH})
    }catch(err) {
        res.status(500).send({message: MESSAGE.ERROR})
    }
})


app.listen(port,  () => {
    collection()
    console.log(`App is listening on port ${port}`)

})  