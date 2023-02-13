const express = require('express');
const dotenv = require('dotenv').config();
const Roomtype = require('./routes/Roomtype')
const Rooms = require('./routes/Rooms')
const port = process.env.port || 5000;
const cors = require('cors');
const connectDB = require('./config/db');


connectDB();

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', Roomtype)
app.use('/api/v1', Rooms)


app.listen(port, () => console.log(`Server started on port ${port}`));