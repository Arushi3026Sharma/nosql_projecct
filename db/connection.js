const { default: mongoose } = require("mongoose")


const URL = "mongodb+srv://arushi21csu518:arushi3026@cluster0.d0yhgfl.mongodb.net/taskManager?retryWrites=true&w=majority"


const connection = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("Database connected successfully");
    }).catch(()=>{
        console.log("Database Not successfully");
    })
}

module.exports = connection;