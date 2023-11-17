const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connection= require('./db/connection');

const app = express();

connection()
app.use(express.json());
app.use(express.static("public"))

app.use('/api',userRoutes);

app.listen(1234,(error)=>{
    if(error){
        console.log("error occur",error);
    }
    else{
        console.log("Server Started");
    }
})