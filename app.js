const express = require('express');
const cors = require('cors');
require('dotenv').config();
const numberRoute = require('./src/Routes/numberRoute')

const PORT = process.env.PORT || 3000;
const app = express();

//Use Middleware
app.use(cors()); //enable cors middleware
app.use(express.json());  //allows json request

//Use Route
app.use(numberRoute)

//Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
