const mongoose = require("mongoose")
const express = require("express")
const doctorRoute = require("./doctorRoutes/doctorRoutes")
const cors = require("cors") 
const app = express()
mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://amlnarayana7207:123@lakshminarayana.ycb5k44.mongodb.net/Hospital")
const db = mongoose.connection
db.on("open",() =>{
    console.log("db connected")
});

db.on("error",() =>{
    console.log("db error")
})

app.use(express.json())

app.use(cors())

app.use("/doctors",doctorRoute)
app.use("/patient",doctorRoute)
const port = 5003
app.listen(port, () =>{
    console.log("Server connected")
})
