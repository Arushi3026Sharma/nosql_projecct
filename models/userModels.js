const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    username : {type:String, required:true},
    email: {type:String , requires:true , unique:true},
    password: {type:String, required:true}
})

const userModel =  mongoose.model("userDatas", userSchema);

module.exports = userModel;