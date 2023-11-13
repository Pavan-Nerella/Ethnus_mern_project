const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    name : {type : String},
    email : {type : String},
    password : {type:String},
    specality : {type : String},
    gender : {type : String},
},
{
    collection: "Doctors",
}
)

module.exports = mongoose.model("Doctors",doctorsSchema);