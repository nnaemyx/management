const mongoose = require('mongoose')
require("dotenv").config()

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB