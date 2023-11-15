const express = require("express");
const router = express.Router();
const doctorsSchema = require("../models/doctorsSchema");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post("/create-doctor",async(req,res,next) =>{
    const existingUser = await doctorsSchema.findOne({email:req.body.email})
    if(existingUser){
        return res.status(200).json({message:'User Already Exists',success:true})
    }
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    req.body.password = hashedPassword
    req.body.cpassword = hashedPassword
    const newDoc = new doctorsSchema(req.body)
    await newDoc.save()
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
