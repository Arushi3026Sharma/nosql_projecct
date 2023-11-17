const {Timestamp} = require("mongoose");
const { default: mongoose } = require("mongoose");


const taskSchema = new mongoose.Schema({
    taskId: {type:String, required:true, unique:true},
    tasktitle: { type:String, required:true},
    taskDesc: {type:String},
    dateOfCreation : {type:Timestamp},
    useremail:{type:String, required:true}

})

const taskModel = mongoose.model("taskDatas", taskSchema);

module.exports = taskModel;