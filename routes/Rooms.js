const express = require("express");
const router = express.Router();


//create rooms
router.post('/rooms', async(req, res) => {
  try{
      const data = await control.addRoom()
      res.status(200).send({message: MESSAGE.FETCH})
  } catch(err) {
      res.status(500).send({message: MESSAGE.ERROR})
  }
})


//fetch all rooms with filters
router.get('/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}*maxPrice={searchRoomMaximumPriceMatch}',async (req, res) => {
  try{
      const data = await control.getRoom()
      res.status(200).send({message: MESSAGE.FETCH})
  } catch(err) {
      res.status(500).send({message: MESSAGE.ERROR})
  }     
})


// editing rooms
router.patch('/rooms/{roomId}', async(req, res) => {
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
router.delete('/rooms/{roomId}', async(req, res) => {
  try {
      const {id} = req.params.id

      const data = await control.deleteRoom(id)
      res.status(200).send({message:MESSAGE.DELETE})
  } catch(err) {
      res.status(500).send({message: MESSAGE.ERROR})
  }
})

//fetch room with Id
router.get('/rooms{roomId}', async (req, res) => {
  try{
      const {id} = req.params.id 
      const data = await control.getRoomById()

      res.status(200).send({message: MESSAGE.FETCH})
  }catch(err) {
      res.status(500).send({message: MESSAGE.ERROR})
  }
})

module.exports = router;