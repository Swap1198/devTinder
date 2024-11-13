How to connect to the database...

Login on MongoDB -- Create a free cluster -- Browse that cluster with compass (for that install compass)
and connect to cluster with connection string -- at the time of creation please save password of connection string somewhere -- connect to compass 

npm i mongoose -- to install mongoose lib

const mongoose = require('mongoose')
const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://swapnilmapari6:RpzLb85pdH7iVoaz@usercollection.8orv1.mongodb.net/")
    console.log("Connected successfully")
}

Cluster-- Collection-- DataBase-- Document
usercollectionn-- devTinder-- users --(data that is inserted)

connect to collection (using collection string)
After connecting to database later listen request on server...

create schema-- model-- insert data in the model-- save it..