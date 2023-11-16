const mongoose = require("mongoose")
const express = require("express")
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require("cors") 
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/user',require('./routes/userRoutes'));
app.use("/doctors",require('./routes/doctorRoutes'))
// app.use("/patient",doctorRoute)

const port = process.env.PORT || 5004
//listen port
app.listen(port, () =>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})
