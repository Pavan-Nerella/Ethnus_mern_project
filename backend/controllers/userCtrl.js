const usermodel = require('../models/userSchema')
const bcrypt = require('bcryptjs')

const registerController = async(req,res) =>{
    try{
        const existingUser = await usermodel.findOne({email:req.body.email})
        if(existingUser){
            return res.satus(200).send({message:'User Already Exists',success:false})
        }
        const password = req.body.password
        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.send(201).send({message:`Register Sucessfully`,sucess:true});
    }catch{
        console.log(error);
        res.status(500).send({success:false,message:`Register Controller ${error.message}`})
    }

};

const loginController = ()=>{

}



module.exports = {loginController,registerController}