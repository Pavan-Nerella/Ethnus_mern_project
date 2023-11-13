const express = require("express");
const router = express.Router();
const doctorsSchema = require("../models/doctorsSchema");

router.post("/create-doctor",(req,res,next) =>{
    doctorsSchema.create(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(
        err => {
            return next(err)
        }
    )
    })

router.get("/",(req,res,next) =>{
    doctorsSchema.find().then((data) =>{
        return res.json(data)
    }).catch((err) =>{
        return next(err)
    })

})

router.post("/login",(req,res) => {
    const {name,password}= req.body;
    doctorsSchema.findOne({name: name}).then(
        (doctor) =>{
            if(doctor){
                if(doctor.password === password){
                    res.json("successfull");
                }else{
                    res.json("nameInCorrect");
                }
            } else{
                res.json("No records Found")
            }
        }
    )
})





module.exports = router
