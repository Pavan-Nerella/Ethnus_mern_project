const express = require("express");
const router = express.Router();
const doctorsSchema = require("../models/doctorsSchema");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const docAuthMiddleware = require("../middlewares/docAuthMiddleware")
const {authController } = require('../controllers/docCtrl')

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

router.post("/login",async(req,res) => {
    try{
        const doctor = await doctorsSchema.findOne({email: req.body.email})
        if(!doctor){
            return res.status(200).json({message:`user not found`,success:false})
        }
        const isMatch = await bcrypt.compare(req.body.password,doctor.password)
        if(!isMatch){
            return res.json("email In Correct");
        }else{
            const token = jwt.sign({id:doctor._id},process.env.JWT_DOCTOR_SECRET,{expiresIn:'1d'})
            res.status(200).json({message:`Login Success`,success:true,token})
        }
    }catch(error){
        console.log(error);
        res.json("No records Found")
    }
})

//Auth || Post
router.post('/getUserData',docAuthMiddleware,authController)
module.exports = router
