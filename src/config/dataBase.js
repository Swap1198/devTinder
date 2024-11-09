const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://swapnilmapari6:RpzLb85pdH7iVoaz@usercollection.8orv1.mongodb.net/devTinder")
    console.log("Connected to data base successfully")
}

module.exports = {connectDB}